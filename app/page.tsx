import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import HowItWorks from "@/components/how-it-works";
import PartnerForm from "@/components/partner-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <PartnerForm />
      <Footer />
    </main>
  );
}
