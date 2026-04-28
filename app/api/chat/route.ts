import { GoogleGenerativeAI } from "@google/generative-ai";
import { RESUME_CONTEXT } from "../../data/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ClientMessage = { role: "user" | "assistant"; content: string };

const CONTACT_LINE =
  "For anything more specific, visitors can email Nazir at itsnazirali1010@gmail.com or WhatsApp him at +91 70072 97120.";
const FALLBACK_BUSY_LINE =
  "The AI assistant is temporarily busy, so I can only answer the main portfolio questions right now. Please try again shortly for a more detailed AI answer.";

function getLatestUserMessage(messages: ClientMessage[]) {
  return [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
}

function getLocalResumeAnswer(question: string) {
  const q = question
    .toLowerCase()
    .replace(/[^\w\s+@.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!q) {
    return "Hi, I am here to help with Nazir's professional journey, experience, skills, projects, and contact details. What would you like to know?";
  }

  if (/^(hi|hello|hey|hii|heyy|namaste|good morning|good afternoon|good evening)\b/.test(q)) {
    return "Hi, nice to meet you. I can help you learn about Nazir's experience, projects, skills, availability, or the best way to contact him.";
  }

  if (/(interview|join|joining|notice|soon|immediate|when can|schedule|call|meet|meeting)/.test(q)) {
    return "Nazir is available for interviews and new opportunities. For the fastest scheduling, please email him at itsnazirali1010@gmail.com or WhatsApp/call him at +91 70072 97120.";
  }

  if (/(experience|experiance|exp|year|years|how long)/.test(q)) {
    return "Nazir has 3+ years of experience shipping production frontends. He has worked as a Frontend Developer at CaptureATrip since Feb 2025, and before that at Techdock Labs from Jan 2023 to Feb 2025 after a 6-month frontend internship.";
  }

  if (/(contact|email|phone|whatsapp|reach|hire|connect)/.test(q)) {
    return "You can contact Nazir at itsnazirali1010@gmail.com. You can also reach him by phone or WhatsApp at +91 70072 97120.";
  }

  if (/(available|avilable|availability|job|role|opportunit|freelance|contract|recruit|hiring)/.test(q)) {
    return `Nazir is available for full-time roles, contract work, and freelance projects in 2026. ${CONTACT_LINE}`;
  }

  if (/(professional journey|journey|background|career|profile|who is|summary|intro|introduction)/.test(q)) {
    return "Nazir is a Frontend Developer based in Gurgaon with 3+ years of production frontend experience. He started with a frontend internship at Techdock Labs in Jul 2022, became a Frontend Developer there from Jan 2023 to Feb 2025, and now works as a Frontend Developer at CaptureATrip.";
  }

  if (/(current|present|now|currently|company|worked|work history|captureatrip|techdock)/.test(q)) {
    return "Nazir currently works as a Frontend Developer at CaptureATrip. Earlier, he worked at Techdock Labs as a Frontend Developer from Jan 2023 to Feb 2025, after a frontend internship from Jul 2022 to Dec 2022.";
  }

  if (/(skill|stack|technology|tech|tools|react|next|typescript|javascript|tailwind|redux)/.test(q)) {
    return "Nazir's main frontend stack includes React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, shadcn/UI, Material UI, REST APIs, Axios, JWT authentication, React Hook Form, Zod, Git, GitHub, Vercel, SEO, performance optimization, and accessibility.";
  }

  if (/(project|work|portfolio|github|recent|latest|built|build)/.test(q)) {
    return "Nazir's selected projects include WaterMark Remover, URL Shortener, Dating App Admin Panel, Bowling Web Application, Essential Apartment Parking, Buy & Sell Admin Panel, and Social Media Application. His latest listed project is WaterMark Remover, built with Next.js, React, and TypeScript.";
  }

  if (/(location|based|city|where)/.test(q)) {
    return "Nazir is based in Gurgaon, Haryana, India.";
  }

  if (/(resume|cv|download)/.test(q)) {
    return "Nazir's resume is available from the Resume button in the portfolio navigation. You can also email him at itsnazirali1010@gmail.com for the latest copy.";
  }

  return `${FALLBACK_BUSY_LINE} You can also email Nazir directly at itsnazirali1010@gmail.com.`;
}

function textResponse(text: string) {
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}

const SYSTEM_PROMPT = `You are "Ask Nazir" — a friendly AI assistant on Nazir Ali Siddiqui's portfolio website. You speak on Nazir's behalf to recruiters, hiring managers, and visitors who want to learn about him.

Your single source of truth is the resume context below. Follow these rules strictly:

1. Answer ONLY using facts from the resume context. If a question is not covered, say so honestly and suggest the visitor email Nazir at itsnazirali1010@gmail.com.
2. Be concise. Default to 2-4 short sentences. Use bullet points only when listing 3+ items.
3. Speak in third person about Nazir ("Nazir has...", "He built...", "His stack is...").
4. Never invent companies, dates, projects, salaries, or skills not in the context.
5. If asked something off-topic (general coding questions, jokes, other people), politely redirect: "I'm here to answer questions about Nazir's experience — happy to share more about his projects or skills."
6. If a recruiter asks about availability, encourage them to reach out via email or WhatsApp.
7. Use a warm, professional tone. No emojis.

=== RESUME CONTEXT (your only source of truth) ===
${RESUME_CONTEXT} 
=== END RESUME CONTEXT ===`;

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

  if (!process.env.GOOGLE_API_KEY) {
    return textResponse(fallbackAnswer);
  }

  const chatHistory = messages
    .filter(
      (m) =>
        !(
          m.role === "assistant" &&
          m.content.includes("trained on Nazir's resume")
        )
    )
    .filter((m) => m.content.trim().length > 0)
    .slice(-12);

  const firstUserIndex = chatHistory.findIndex((m) => m.role === "user");
  const trimmed = (firstUserIndex >= 0 ? chatHistory.slice(firstUserIndex) : chatHistory).map((m) => ({
    role: m.role === "assistant" ? ("model" as const) : ("user" as const),
    parts: [{ text: String(m.content).slice(0, 2000) }],
  }));

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
    generationConfig: { maxOutputTokens: 600, temperature: 0.4 },
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
