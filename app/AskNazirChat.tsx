"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUGGESTED_QUESTIONS } from "./data/resume";
import { ChatMessageSkeleton } from "./SkeletonLoader";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const INTRO: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hi — I'm an AI assistant trained on Nazir's resume. Ask me about his experience, skills, projects, or how to get in touch.",
};

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export default function AskNazirChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMsg: Message = { id: uid(), role: "user", content: trimmed };
      const assistantId = uid();
      const placeholder: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
      };

      const nextHistory = [...messages, userMsg];
      setMessages([...nextHistory, placeholder]);
      setInput("");
      setLoading(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: nextHistory.map(({ role, content }) => ({
              role,
              content,
            })),
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const errText = await res.text().catch(() => "");
          throw new Error(errText || `Request failed (${res.status})`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: acc } : m
            )
          );
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        const msg =
          err instanceof Error ? err.message : "Something went wrong.";
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: `Sorry — I couldn't reach the assistant. ${msg}\n\nYou can email Nazir directly at itsnazirali1010@gmail.com.`,
                }
              : m
          )
        );
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [loading, messages]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  };

  const stop = () => abortRef.current?.abort();

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Ask Nazir AI"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        className="ask-launcher"
      >
        <span className="ask-launcher-dot" aria-hidden="true" />
        <span className="ask-launcher-label">
          {open ? "Close" : "Ask Nazir AI"}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ask-overlay"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-label="Ask Nazir AI"
              aria-modal="true"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="ask-panel"
            >
              <header className="ask-header">
                <div className="flex items-center gap-2.5">
                  <span className="ask-pulse" aria-hidden="true" />
                  <div>
                    <p className="ask-title">Ask Nazir AI</p>
                    <p className="ask-subtitle">
                      Resume-aware assistant for recruiters & visitors
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="ask-close"
                  aria-label="Close chat"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6L18 18M18 6L6 18" />
                  </svg>
                </button>
              </header>

              <div ref={scrollRef} className="ask-scroll">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`ask-msg ${
                      m.role === "user" ? "ask-msg-user" : "ask-msg-bot"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <span className="ask-msg-tag">NAZIR · AI</span>
                    )}
                    <div className="ask-bubble">
                      {m.content || (
                        <ChatMessageSkeleton />
                      )}
                    </div>
                  </div>
                ))}

                {messages.length === 1 && (
                  <div className="ask-suggestions" aria-label="Suggested questions">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        type="button"
                        key={q}
                        className="ask-chip"
                        onClick={() => void send(q)}
                        disabled={loading}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <form onSubmit={onSubmit} className="ask-form">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about projects, skills, availability…"
                  rows={1}
                  className="ask-input"
                  disabled={loading}
                  aria-label="Type your question"
                />
                {loading ? (
                  <button
                    type="button"
                    onClick={stop}
                    className="ask-send"
                    aria-label="Stop response"
                  >
                    Stop
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ask-send"
                    disabled={!input.trim()}
                    aria-label="Send"
                  >
                    Send <span aria-hidden="true">→</span>
                  </button>
                )}
              </form>

              <p className="ask-disclaimer">
                AI responses come from Nazir&apos;s resume context. For anything
                else, email{" "}
                <a href="mailto:itsnazirali1010@gmail.com">
                  itsnazirali1010@gmail.com
                </a>
                .
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
