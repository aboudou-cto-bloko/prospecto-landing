import Header from "@/components/layout/header";
import HeroSection from "@/components/blocks/hero-section/hero-section";
import ProblemSection from "@/components/blocks/problem-section/problem-section";
import SolutionSection from "@/components/blocks/solution-section/solution-section";
import PersonasSection from "@/components/blocks/personas-section/personas-section";
import PricingSection from "@/components/blocks/pricing-section/pricing-section";
import FaqSection from "@/components/blocks/faq-section/faq-section";
import DockerSection from "@/components/blocks/docker-section/docker-section";
import Footer from "@/components/layout/footer";
import ScrollAnimations from "@/components/ui/scroll-animations";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <ScrollAnimations />
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PersonasSection />
      <PricingSection />
      <FaqSection />
      <DockerSection />
      <Footer />
    </div>
  );
}
