"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section id="partner" className="py-24 px-6 bg-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Bruno Ace', sans-serif" }}
            className="text-3xl md:text-4xl text-dark mb-4"
          >
            thanks for reaching out!
          </h2>
          <p className="text-stone-500">
            we'll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="partner" className="py-24 px-6 bg-light">
      <div className="max-w-2xl mx-auto">
        <h2
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="text-3xl md:text-4xl text-dark text-center mb-4"
        >
          let's build the future of auto finance together
        </h2>
        <p className="text-stone-500 text-center mb-12 max-w-lg mx-auto">
          whether you're a dealership, an auto platform, or an investor — we'd
          love to talk.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch(form.action, {
              method: "POST",
              body: new FormData(form),
              headers: { Accept: "application/json" },
            }).then((res) => {
              if (res.ok) setSubmitted(true);
            });
          }}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="text"
              name="company"
              placeholder="company"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="phone"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <textarea
            name="message"
            placeholder="message (optional)"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />
          <button
            type="submit"
            style={{ fontFamily: "'Bruno Ace', sans-serif" }}
            className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
          >
            send <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
