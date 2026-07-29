import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { RESUME_CONTEXT } from "@/data/resume";
import {
  ClientMessage,
  INTRO_MARKER,
  MAX_HISTORY,
  MAX_CHARS_PER_MSG,
  isValidApiKey,
  getLatestUserMessage,
  getLocalResumeAnswer,
} from "@/utils/chat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function textResponse(text: string) {
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}

const SYSTEM_PROMPT = `You are "Ask Nazir" — a friendly, professional AI assistant on Nazir Ali Siddiqui's portfolio website. Your job is to answer recruiters, hiring managers, and curious visitors who want to learn about Nazir.

Speak about Nazir in third person ("Nazir built…", "He uses…", "His stack is…"). Never claim to be Nazir himself.

# Strict accuracy rules
- The RESUME CONTEXT below is your ONLY source of truth. Do not invent companies, dates, projects, salaries, technologies, or achievements that are not in it.
- If a question cannot be answered from the context, say so honestly in one short sentence and suggest the visitor email Nazir at itsnazirali1010@gmail.com.
- Do not speculate about salary, availability dates beyond "available in 2026", or personal details not in the context.
- If the visitor asks about another person, off-topic coding help, opinions, news, or jokes, politely redirect: "I'm here to answer questions about Nazir — happy to share more about his projects, skills, or how to reach him."

# Format rules (very important — the chat UI renders plain text only)
- Reply in plain prose. Do NOT use markdown. No asterisks for bold, no hashes for headings, no backticks.
- Do NOT use bullet lists with "-" or "*" or numbered lists. If you need to list 3+ items, write them as a single sentence separated by commas, or split into 2–3 short sentences.
- Use blank lines between paragraphs only when the answer truly needs them.
- No emojis.

# Length & tone
- Default to 2–4 short, confident sentences. Up to ~120 words if the visitor explicitly asks for detail.
- Warm and professional. Get to the answer quickly — don't restate the question.
- Don't open with "Hi" or "Hello" unless this is the very first message of the conversation.

# Contact-info rule
If the visitor mentions hiring, recruiting, interviewing, joining, scheduling, availability, freelance, contract, or "how do I reach him", always include both: itsnazirali1010@gmail.com and +91 70072 97120 (WhatsApp/phone). Weave them into the sentence naturally.

# Identity
If asked who you are, say: "I'm Ask Nazir, an AI assistant trained on Nazir's resume to answer questions about his work."

=== RESUME CONTEXT (your only source of truth) ===
${RESUME_CONTEXT}
=== END RESUME CONTEXT ===`;

const SAFETY_SETTINGS = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

export async function POST(req: Request) {
  let messages: ClientMessage[];
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid messages array");
    }
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const fallbackAnswer = getLocalResumeAnswer(getLatestUserMessage(messages));
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!isValidApiKey(apiKey)) {
    return textResponse(fallbackAnswer);
  }

  const chatHistory = messages
    .filter(
      (m) =>
        !(m.role === "assistant" && m.content.includes(INTRO_MARKER))
    )
    .filter((m) => m.content.trim().length > 0)
    .slice(-MAX_HISTORY);

  const firstUserIndex = chatHistory.findIndex((m) => m.role === "user");
  const trimmed = (firstUserIndex >= 0
    ? chatHistory.slice(firstUserIndex)
    : chatHistory
  ).map((m) => ({
    role: m.role === "assistant" ? ("model" as const) : ("user" as const),
    parts: [{ text: String(m.content).slice(0, MAX_CHARS_PER_MSG) }],
  }));

  if (trimmed.length === 0) {
    return textResponse(fallbackAnswer);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
    safetySettings: SAFETY_SETTINGS,
    generationConfig: {
      maxOutputTokens: 700,
      temperature: 0.3,
      topP: 0.9,
      topK: 40,
    },
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      let hasContent = false;

      try {
        const result = await model.generateContentStream({
          contents: trimmed,
        });

        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            hasContent = true;
            controller.enqueue(encoder.encode(text));
          }
        }

        if (!hasContent) {
          controller.enqueue(encoder.encode(fallbackAnswer));
        }
        controller.close();
      } catch {
        controller.enqueue(encoder.encode(fallbackAnswer));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
    },
  });
}
