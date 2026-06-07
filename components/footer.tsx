export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div
            style={{ fontFamily: "'Bruno Ace', sans-serif" }}
            className="text-lg text-white"
          >
            sabiq
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
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="X"
            className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
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
