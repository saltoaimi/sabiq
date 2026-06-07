"use client";

import { useLang, t } from "@/lib/i18n";

export default function HowItWorks() {
  const { lang } = useLang();
  const s = t[lang];
  const font = lang === "ar" ? "'Aref Ruqaa', serif" : "'Bruno Ace', sans-serif";

  const steps = [
    { number: "01", title: s.step1Title, description: s.step1Desc },
    { number: "02", title: s.step2Title, description: s.step2Desc },
    { number: "03", title: s.step3Title, description: s.step3Desc },
  ];

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: font }}
          className="text-3xl md:text-4xl text-white text-center mb-4"
        >
          {s.howTitle}
        </h2>
        <p className="text-stone-400 text-center mb-16 max-w-xl mx-auto">
          {s.howSub}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-extrabold text-primary/30 mb-4">
                {step.number}
              </div>
              <h3
                style={{ fontFamily: font }}
                className="text-xl text-white mb-3"
              >
                {step.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
