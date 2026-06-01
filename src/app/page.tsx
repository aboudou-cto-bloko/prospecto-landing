import Header from "@/components/layout/header";
import HeroSection from "@/components/blocks/hero-section/hero-section";
import ProblemSection from "@/components/blocks/problem-section/problem-section";
import SolutionSection from "@/components/blocks/solution-section/solution-section";
import PersonasSection from "@/components/blocks/personas-section/personas-section";
import PricingSection from "@/components/blocks/pricing-section/pricing-section";
import DockerSection from "@/components/blocks/docker-section/docker-section";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <div className="mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <ProblemSection />
      <div className="mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <SolutionSection />
      <div className="mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <PersonasSection />
      <div className="mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <PricingSection />
      <div className="mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <DockerSection />
      <Footer />
    </div>
  );
}
