const steps = [
  {
    number: "01",
    title: "apply in minutes",
    description: "fully digital onboarding. no branches, no paperwork.",
  },
  {
    number: "02",
    title: "get approved fast",
    description: "instant scoring and a decision before you finish your coffee.",
  },
  {
    number: "03",
    title: "drive away",
    description: "pick your vehicle. we handle the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="text-3xl md:text-4xl text-white text-center mb-4"
        >
          how it works
        </h2>
        <p className="text-stone-400 text-center mb-16 max-w-xl mx-auto">
          three steps. that&apos;s it.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-extrabold text-primary/30 mb-4">
                {step.number}
              </div>
              <h3
                style={{ fontFamily: "'Bruno Ace', sans-serif" }}
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
