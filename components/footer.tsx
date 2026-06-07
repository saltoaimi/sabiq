import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
            <span
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
              className="text-xl font-bold text-white"
            >
              سابق
            </span>
            <span
              style={{ fontFamily: "'Bruno Ace', sans-serif" }}
              className="text-sm text-primary"
            >
              sabiq
            </span>
          </div>
          <div
            style={{ fontFamily: "'Bruno Ace', sans-serif" }}
            className="text-xs text-stone-400"
          >
            driving saudi forward
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="text-center md:text-right text-sm text-stone-500">
          <p>sabiq is currently in the licensing stage with SAMA</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} sabiq. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
