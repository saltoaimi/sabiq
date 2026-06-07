export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/20">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
        >
          driving saudi
          <span className="text-primary"> forward</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          digital auto financing and lease-to-own — fast approvals, alternative
          credit scoring, up to 60K SAR. built for the way saudi moves.
        </p>
        <a
          href="#partner"
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg transition-colors"
        >
          partner with us
        </a>
      </div>
    </section>
  );
}
