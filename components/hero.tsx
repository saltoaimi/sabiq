"use client";

import { useLang, t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const s = t[lang];

  const titleParts = s.heroTitle.split(s.heroHighlight);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          style={{ fontFamily: lang === "ar" ? "'Aref Ruqaa', serif" : "'Bruno Ace', sans-serif" }}
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
        >
          {titleParts[0]}
          <span className="text-primary">{s.heroHighlight}</span>
          {titleParts[1] || ""}
        </h1>
        <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {s.heroSub}
        </p>
        <a
          href="#partner"
          style={{ fontFamily: lang === "ar" ? "'Aref Ruqaa', serif" : "'Bruno Ace', sans-serif" }}
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg transition-colors"
        >
          {s.heroCta}
        </a>
      </div>
    </section>
  );
}
