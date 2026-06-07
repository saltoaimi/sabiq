"use client";

import { Car, KeyRound, Workflow } from "lucide-react";
import { useLang, t } from "@/lib/i18n";

export default function WhatWeDo() {
  const { lang } = useLang();
  const s = t[lang];
  const font = lang === "ar" ? "'Aref Ruqaa', serif" : "'Bruno Ace', sans-serif";

  const offerings = [
    { icon: Car, title: s.card1Title, description: s.card1Desc },
    { icon: KeyRound, title: s.card2Title, description: s.card2Desc },
    { icon: Workflow, title: s.card3Title, description: s.card3Desc },
  ];

  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: font }}
          className="text-3xl md:text-4xl text-dark text-center mb-4"
        >
          {s.whatWeDoTitle}
        </h2>
        <p className="text-stone-500 text-center mb-16 max-w-xl mx-auto">
          {s.whatWeDoSub}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3
                style={{ fontFamily: font }}
                className="text-xl text-dark mb-3"
              >
                {item.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
