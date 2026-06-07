"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const t = {
  en: {
    // Navbar
    partnerCta: "partner with us",

    // Hero
    heroTitle: "driving saudi forward",
    heroHighlight: "forward",
    heroSub:
      "instant auto financing at the point of sale. digital applications, fast approvals, zero paperwork.",
    heroCta: "partner with us",

    // What We Do
    whatWeDoTitle: "what we do",
    whatWeDoSub:
      "we make it easy for customers to drive away — and for you to close more deals.",
    card1Title: "auto finance",
    card1Desc:
      "vehicle financing up to 60K SAR. customers apply in minutes, get approved fast, and drive away the same day.",
    card2Title: "lease to own",
    card2Desc:
      "flexible lease-to-own plans. lower barriers, higher conversions. customers start driving from day one.",
    card3Title: "embedded checkout",
    card3Desc:
      "financing built into your sales flow. no redirects, no branches, no waiting. one seamless journey.",

    // How It Works
    howTitle: "how it works",
    howSub: "three steps. that's it.",
    step1Title: "apply in minutes",
    step1Desc: "fully digital. no paperwork, no branch visits.",
    step2Title: "approved instantly",
    step2Desc: "real-time decisioning. customers know before they leave.",
    step3Title: "drive away",
    step3Desc: "pick the vehicle, sign digitally, done.",

    // Partner
    partnerTitle: "grow your sales with embedded financing",
    partnerSub:
      "we bring the financing. you keep selling. embed sabiq at your point of sale and watch your conversion rates climb.",
    formName: "your name",
    formCompany: "company",
    formEmail: "email",
    formPhone: "phone",
    formMessage: "message (optional)",
    formSend: "let's talk",
    thankYouTitle: "we'll be in touch.",
    thankYouSub: "expect to hear from us within 24 hours.",

    // Footer
    tagline: "driving saudi forward",
    samaNote: "sabiq is currently in the licensing stage with SAMA",
    copyright: "sabiq. all rights reserved.",
  },
  ar: {
    // Navbar
    partnerCta: "انضم كشريك",

    // Hero
    heroTitle: "نقود السعودية للأمام",
    heroHighlight: "للأمام",
    heroSub:
      "تمويل سيارات فوري عند نقطة البيع. طلبات رقمية، موافقات سريعة، بدون أي ورق.",
    heroCta: "انضم كشريك",

    // What We Do
    whatWeDoTitle: "ماذا نقدم",
    whatWeDoSub:
      "نسهّل على العملاء قيادة سياراتهم — ونسهّل عليك إتمام المزيد من الصفقات.",
    card1Title: "تمويل السيارات",
    card1Desc:
      "تمويل مركبات حتى ٦٠ ألف ريال. العملاء يتقدمون بدقائق، يحصلون على الموافقة بسرعة، ويقودون سيارتهم في نفس اليوم.",
    card2Title: "تأجير منتهي بالتملك",
    card2Desc:
      "خطط تأجير مرنة تنتهي بالتملك. حواجز أقل، تحويلات أعلى. العملاء يبدأون القيادة من اليوم الأول.",
    card3Title: "تمويل مدمج",
    card3Desc:
      "التمويل مدمج في عملية البيع. بدون تحويلات، بدون فروع، بدون انتظار. رحلة واحدة سلسة.",

    // How It Works
    howTitle: "كيف يعمل",
    howSub: "ثلاث خطوات. هذا كل شيء.",
    step1Title: "تقدّم بدقائق",
    step1Desc: "رقمي بالكامل. بدون أوراق، بدون زيارة فرع.",
    step2Title: "موافقة فورية",
    step2Desc: "قرار لحظي. العميل يعرف النتيجة قبل ما يطلع.",
    step3Title: "قُد سيارتك",
    step3Desc: "اختر السيارة، وقّع رقمياً، وانطلق.",

    // Partner
    partnerTitle: "زد مبيعاتك مع التمويل المدمج",
    partnerSub:
      "نحن نوفر التمويل. أنت تواصل البيع. ادمج سابق في نقطة البيع وشاهد معدلات التحويل ترتفع.",
    formName: "الاسم",
    formCompany: "الشركة",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الجوال",
    formMessage: "رسالة (اختياري)",
    formSend: "تواصل معنا",
    thankYouTitle: "سنتواصل معك قريباً.",
    thankYouSub: "توقع ردنا خلال ٢٤ ساعة.",

    // Footer
    tagline: "نقود السعودية للأمام",
    samaNote: "سابق في مرحلة الترخيص مع البنك المركزي السعودي (ساما)",
    copyright: "سابق. جميع الحقوق محفوظة.",
  },
};
