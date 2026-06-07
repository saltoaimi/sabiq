"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLang, t } from "@/lib/i18n";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLang();
  const s = t[lang];
  const font = lang === "ar" ? "'Aref Ruqaa', serif" : "'Bruno Ace', sans-serif";

  if (submitted) {
    return (
      <section id="partner" className="py-24 px-6 bg-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{ fontFamily: font }}
            className="text-3xl md:text-4xl text-dark mb-4"
          >
            {s.thankYouTitle}
          </h2>
          <p className="text-stone-500">{s.thankYouSub}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="partner" className="py-24 px-6 bg-light">
      <div className="max-w-2xl mx-auto">
        <h2
          style={{ fontFamily: font }}
          className="text-3xl md:text-4xl text-dark text-center mb-4"
        >
          {s.partnerTitle}
        </h2>
        <p className="text-stone-500 text-center mb-12 max-w-lg mx-auto">
          {s.partnerSub}
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
              placeholder={s.formName}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="text"
              name="company"
              placeholder={s.formCompany}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="email"
              name="email"
              placeholder={s.formEmail}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder={s.formPhone}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <textarea
            name="message"
            placeholder={s.formMessage}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />
          <button
            type="submit"
            style={{ fontFamily: font }}
            className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
          >
            {s.formSend} <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
