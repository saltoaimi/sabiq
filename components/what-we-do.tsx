import { Car, KeyRound, Zap } from "lucide-react";

const offerings = [
  {
    icon: Car,
    title: "auto finance",
    description:
      "quick, fully digital vehicle financing up to 60K SAR. no branches, no paperwork — just speed.",
  },
  {
    icon: KeyRound,
    title: "lease to own",
    description:
      "flexible lease-to-own plans that put consumers in the driver's seat from day one.",
  },
  {
    icon: Zap,
    title: "alternative scoring",
    description:
      "digital credit scoring that sees what traditional models miss. more approvals, faster decisions.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="text-3xl md:text-4xl text-dark text-center mb-4"
        >
          what we do
        </h2>
        <p className="text-stone-500 text-center mb-16 max-w-xl mx-auto">
          three ways we're making auto finance faster and more accessible in
          saudi arabia.
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
                style={{ fontFamily: "'Bruno Ace', sans-serif" }}
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
