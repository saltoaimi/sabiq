# Sabiq Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page landing page for Sabiq, a pre-launch Saudi auto finance fintech, with a "Partner With Us" contact form as the primary CTA.

**Architecture:** Static single-page site built with Next.js (App Router, static export). Six sections stacked vertically: Navbar, Hero, What We Do, How It Works, Partner With Us form, Footer. Form submissions sent via Formspree (no backend needed). Deployed to Vercel.

**Tech Stack:** Next.js 15 (App Router, static export), Tailwind CSS 4, Lucide React (icons), Formspree (form handling)

**Design reference:** `docs/plans/2026-06-07-landing-page-design.md`

---

## Visual Identity

- **Primary color:** Rose `#E11D48` — bold, warm, disruptive
- **Accent color:** Amber `#FB923C` — warmth and optimism
- **Dark:** `#1C1917` (stone-900)
- **Light/background:** `#FAFAF9` (stone-50)
- **Arabic font:** Aref Ruqaa (خط رقعة) — calligraphic warmth, Saudi heritage
- **English font:** Bruno Ace (lowercase) — futuristic, techy, rounded
- **Body font:** system-ui / sans-serif
- **Logo:** Bilingual wordmark — سابق (Aref Ruqaa) + sabiq (Bruno Ace lowercase)
- **Style:** All English text in lowercase. Light background theme.

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Create Next.js app**

Run:
```bash
cd /Users/salehaltoaimi/Projects/sabiq
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-turbopack
```

If prompted about existing files, say yes to continue.

**Step 2: Install dependencies**

Run:
```bash
cd /Users/salehaltoaimi/Projects/sabiq
npm install lucide-react
```

**Step 3: Configure static export**

In `next.config.ts`, set:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

**Step 4: Set up global styles and fonts**

Replace `app/globals.css` with:
```css
@import "tailwindcss";

@theme {
  --color-primary: #0D9488;
  --color-primary-dark: #0B7C72;
  --color-accent: #84CC16;
  --color-dark: #0F172A;
  --color-light: #F8FAFC;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

**Step 5: Set up layout**

Replace `app/layout.tsx` with:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabiq — Driving Saudi Forward",
  description:
    "Digital auto financing and lease-to-own powered by alternative credit scoring. Up to 60K SAR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-dark bg-light">
        {children}
      </body>
    </html>
  );
}
```

**Step 6: Verify it runs**

Run:
```bash
cd /Users/salehaltoaimi/Projects/sabiq
npm run dev
```

Expected: Dev server starts on localhost:3000, blank page loads.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind and Inter font"
```

---

### Task 2: Navbar Component

**Files:**
- Create: `components/navbar.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Navbar component**

Create `components/navbar.tsx`:
```tsx
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
        <a href="#" className="text-2xl font-extrabold text-dark">
          Sabiq
        </a>
        <a
          href="#partner"
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
        >
          Partner With Us
        </a>
      </div>
    </nav>
  );
}
```

**Step 2: Add Navbar to page**

Replace `app/page.tsx` with:
```tsx
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <p className="text-center">Sections go here</p>
      </div>
    </main>
  );
}
```

**Step 3: Verify in browser**

Run dev server, check:
- Logo "Sabiq" on left
- "Partner With Us" button on right
- Navbar becomes translucent white on scroll

**Step 4: Commit**

```bash
git add components/navbar.tsx app/page.tsx
git commit -m "feat: add sticky navbar with logo and CTA button"
```

---

### Task 3: Hero Section

**Files:**
- Create: `components/hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Hero component**

Create `components/hero.tsx`:
```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/20">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Driving Saudi
          <span className="text-primary"> Forward</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Digital auto financing and lease-to-own — fast approvals, alternative
          credit scoring, up to 60K SAR. Built for the way Saudi moves.
        </p>
        <a
          href="#partner"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
}
```

**Step 2: Add Hero to page**

Update `app/page.tsx`:
```tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

**Step 3: Verify in browser**

Check: Full-screen hero, gradient background, glowing orbs, headline with "Forward" in teal, subheadline, CTA button.

**Step 4: Commit**

```bash
git add components/hero.tsx app/page.tsx
git commit -m "feat: add hero section with tagline and gradient background"
```

---

### Task 4: What We Do Section

**Files:**
- Create: `components/what-we-do.tsx`
- Modify: `app/page.tsx`

**Step 1: Create What We Do component**

Create `components/what-we-do.tsx`:
```tsx
import { Car, KeyRound, Zap } from "lucide-react";

const offerings = [
  {
    icon: Car,
    title: "Auto Finance",
    description:
      "Quick, fully digital vehicle financing up to 60K SAR. No branches, no paperwork — just speed.",
  },
  {
    icon: KeyRound,
    title: "Lease to Own",
    description:
      "Flexible lease-to-own plans that put consumers in the driver's seat from day one.",
  },
  {
    icon: Zap,
    title: "Alternative Scoring",
    description:
      "Digital credit scoring that sees what traditional models miss. More approvals, faster decisions.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-4">
          What We Do
        </h2>
        <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto">
          Three ways we're making auto finance faster and more accessible in
          Saudi Arabia.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page**

Update `app/page.tsx` to import and render `<WhatWeDo />` after `<Hero />`.

**Step 3: Verify in browser**

Check: Three cards, icons, responsive grid (stacks on mobile).

**Step 4: Commit**

```bash
git add components/what-we-do.tsx app/page.tsx
git commit -m "feat: add what-we-do section with three offering cards"
```

---

### Task 5: How It Works Section

**Files:**
- Create: `components/how-it-works.tsx`
- Modify: `app/page.tsx`

**Step 1: Create How It Works component**

Create `components/how-it-works.tsx`:
```tsx
const steps = [
  {
    number: "01",
    title: "Apply in Minutes",
    description: "Fully digital onboarding. No branches, no paperwork.",
  },
  {
    number: "02",
    title: "Get Approved Fast",
    description: "Instant scoring and a decision before you finish your coffee.",
  },
  {
    number: "03",
    title: "Drive Away",
    description: "Pick your vehicle. We handle the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Three steps. That's it.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-extrabold text-primary/30 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page**

Update `app/page.tsx` to import and render `<HowItWorks />` after `<WhatWeDo />`.

**Step 3: Verify in browser**

Check: Dark background, three steps with large faded numbers, readable text.

**Step 4: Commit**

```bash
git add components/how-it-works.tsx app/page.tsx
git commit -m "feat: add how-it-works section with three-step flow"
```

---

### Task 6: Partner With Us Section (Form)

**Files:**
- Create: `components/partner-form.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Partner Form component**

Create `components/partner-form.tsx`:
```tsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section id="partner" className="py-24 px-6 bg-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-slate-500">
            We'll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="partner" className="py-24 px-6 bg-light">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-4">
          Let's Build the Future of Auto Finance Together
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">
          Whether you're a dealership, an auto platform, or an investor — we'd
          love to talk.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch(form.action, {
              method: "POST",
              body: new FormData(form),
              headers: { Accept: "application/json" },
            }).then((res) => {
              if (res.ok) setSubmitted(true);
            });
          }}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            Send <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
```

> **Note:** Replace `YOUR_FORM_ID` with a real Formspree form ID. The user can create one for free at formspree.io. For development, the form will just show the success state.

**Step 2: Add to page**

Update `app/page.tsx` to import and render `<PartnerForm />` after `<HowItWorks />`.

**Step 3: Verify in browser**

Check: Form renders, fields validate, submit shows thank-you state.

**Step 4: Commit**

```bash
git add components/partner-form.tsx app/page.tsx
git commit -m "feat: add partner contact form with Formspree integration"
```

---

### Task 7: Footer

**Files:**
- Create: `components/footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Footer component**

Create `components/footer.tsx`:
```tsx
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-xl font-extrabold text-white mb-1">Sabiq</div>
          <div className="text-sm text-slate-400">Driving Saudi Forward</div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="text-center md:text-right text-sm text-slate-500">
          <p>Sabiq is currently in the licensing stage with SAMA</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Sabiq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Add to page**

Update `app/page.tsx` to import and render `<Footer />` after `<PartnerForm />`.

**Step 3: Verify in browser**

Check: Footer shows logo, tagline, social icons, SAMA note, copyright with current year.

**Step 4: Commit**

```bash
git add components/footer.tsx app/page.tsx
git commit -m "feat: add footer with social links and SAMA licensing note"
```

---

### Task 8: Final Polish and Verification

**Files:**
- Modify: `app/page.tsx` (final assembly check)

**Step 1: Run full build**

```bash
cd /Users/salehaltoaimi/Projects/sabiq
npm run build
```

Expected: Static export succeeds, no errors.

**Step 2: Visual review in browser**

Run `npm run dev` and verify the full page:
- [ ] Navbar is sticky, transparent → white on scroll
- [ ] Hero fills viewport, gradient looks right, CTA works
- [ ] What We Do shows 3 cards, responsive on mobile
- [ ] How It Works has dark background, 3 steps
- [ ] Partner form validates required fields, shows success state
- [ ] Footer has logo, tagline, social icons, SAMA note
- [ ] All "Partner With Us" links scroll to #partner
- [ ] Mobile responsive (check at 375px width)

**Step 3: Commit any fixes**

```bash
git add -A
git commit -m "chore: final polish and responsive fixes"
```
