"use client";

import { useState, useEffect } from "react";
import { useLang, t, logoFont, headingFont } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const s = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          style={{ fontFamily: logoFont(lang) }}
          className={`text-dark ${lang === "ar" ? "text-2xl font-bold" : "text-xl"}`}
        >
          {lang === "ar" ? "سابق" : "sabiq"}
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm text-dark/60 hover:text-dark transition-colors px-3 py-1.5"
            style={{ fontFamily: lang === "ar" ? "'Bruno Ace', sans-serif" : "'Tajawal', sans-serif" }}
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <a
            href="#partner"
            style={{ fontFamily: headingFont(lang) }}
            className={`bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm transition-colors ${lang === "ar" ? "font-bold" : ""}`}
          >
            {s.partnerCta}
          </a>
        </div>
      </div>
    </nav>
  );
}
