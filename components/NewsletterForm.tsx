"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await subscribeNewsletter(email);

    if ("error" in result) {
      setStatus("error");
      setMessage(result.error || "Ein Fehler ist aufgetreten.");
    } else {
      setStatus("success");
      setMessage(result.message || "Danke! Du bist jetzt dabei.");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
      <input
        type="email"
        placeholder="Deine E-Mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="px-4 py-3 rounded-lg bg-black bg-opacity-30 text-white border border-pink-400 border-opacity-50 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:border-opacity-100 focus:ring-2 focus:ring-pink-400 focus:ring-opacity-20 backdrop-blur-sm transition-all disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-black font-bold rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-500/50 disabled:opacity-50"
      >
        {status === "loading" ? "Wird angemeldet..." : "Anmelden"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "success"
              ? "text-[color:var(--color-mint)]"
              : "text-[color:var(--color-neon-pink)]"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
