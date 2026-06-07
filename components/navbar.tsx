"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="text-xl text-dark"
        >
          sabiq
        </a>
        <a
          href="#partner"
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          partner with us
        </a>
      </div>
    </nav>
  );
}
