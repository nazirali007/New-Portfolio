export type ClientMessage = { role: "user" | "assistant"; content: string };

export const CONTACT_LINE =
  "For anything more specific, visitors can email Nazir at itsnazirali1010@gmail.com or WhatsApp him at +91 70072 97120.";
export const FALLBACK_BUSY_LINE =
  "The AI assistant is temporarily busy, so I can only answer the main portfolio questions right now. Please try again shortly for a more detailed AI answer.";

export const INTRO_MARKER = "trained on Nazir's resume";
export const MAX_HISTORY = 12;
export const MAX_CHARS_PER_MSG = 2000;

export function isValidApiKey(key: string | undefined): key is string {
  if (!key) return false;
  const trimmed = key.trim();
  if (trimmed.length < 20) return false;
  if (trimmed.includes("your_real_key_here")) return false;
  if (trimmed.includes("your-key")) return false;
  return trimmed.startsWith("AIza");
}

export function getLatestUserMessage(messages: ClientMessage[]) {
  return [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
}

/** Rule-based resume Q&A used when no (or an invalid) Gemini API key is configured. */
export function getLocalResumeAnswer(question: string) {
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
    return "Nazir has 3+ years of experience shipping production frontends. He most recently worked as a Frontend Developer at CaptureATrip from Feb 2025 to Jul 2026, and before that at Techdock Labs from Jan 2023 to Feb 2025 after a 6-month frontend internship.";
  }

  if (/(contact|email|phone|whatsapp|reach|hire|connect)/.test(q)) {
    return "You can contact Nazir at itsnazirali1010@gmail.com. You can also reach him by phone or WhatsApp at +91 70072 97120.";
  }

  if (/(available|avilable|availability|job|role|opportunit|freelance|contract|recruit|hiring)/.test(q)) {
    return `Nazir is available for full-time roles, contract work, and freelance projects in 2026. ${CONTACT_LINE}`;
  }

  if (/(professional journey|journey|background|career|profile|who is|summary|intro|introduction)/.test(q)) {
    return "Nazir is a Frontend Developer based in Gurgaon with 3+ years of production frontend experience. He started with a frontend internship at Techdock Labs in Jul 2022, became a Frontend Developer there from Jan 2023 to Feb 2025, then worked as a Frontend Developer at CaptureATrip from Feb 2025 to Jul 2026. He's now open to new full-time roles, contract work, and freelance projects.";
  }

  if (/(current|present|now|currently|company|worked|work history|captureatrip|techdock)/.test(q)) {
    return "Nazir most recently worked as a Frontend Developer at CaptureATrip from Feb 2025 to Jul 2026. Before that, he was at Techdock Labs as a Frontend Developer from Jan 2023 to Feb 2025, after a frontend internship from Jul 2022 to Dec 2022. He's currently available for new opportunities.";
  }

  if (/(skill|stack|technology|tech|tools|react|next|typescript|javascript|tailwind|redux)/.test(q)) {
    return "Nazir's main frontend stack includes React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, shadcn/UI, Material UI, REST APIs, Axios, JWT authentication, React Hook Form, Zod, Git, GitHub, Vercel, SEO, performance optimization, and accessibility.";
  }

  if (/(project|work|portfolio|github|recent|latest|built|build)/.test(q)) {
    return "Nazir's selected projects include Maintenance Reminder, WaterMark Remover, URL Shortener, Dating App Admin Panel, Bowling Web Application, Essential Apartment Parking, Buy & Sell Admin Panel, and Social Media Application. His latest project is Maintenance Reminder, built with Next.js, Prisma, and PostgreSQL.";
  }

  if (/(location|based|city|where)/.test(q)) {
    return "Nazir is based in Gurgaon, Haryana, India.";
  }

  if (/(resume|cv|download)/.test(q)) {
    return "Nazir's resume is available from the Resume button in the portfolio navigation. You can also email him at itsnazirali1010@gmail.com for the latest copy.";
  }

  return `${FALLBACK_BUSY_LINE} You can also email Nazir directly at itsnazirali1010@gmail.com.`;
}
