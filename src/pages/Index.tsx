import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlacementsSection from "@/components/PlacementsSection";
import GallerySection from "@/components/GallerySection";
import AdmissionsSection from "@/components/AdmissionsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionReveal from "@/components/SectionReveal";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero — no reveal, shows immediately */}
      <HeroSection />

      <SectionReveal><TrustBar /></SectionReveal>
      <SectionReveal><AboutSection /></SectionReveal>
      <SectionReveal><CoursesSection /></SectionReveal>
      <SectionReveal><WhyChooseUs /></SectionReveal>
      <SectionReveal><HowItWorks /></SectionReveal>
      <SectionReveal><TestimonialsSection /></SectionReveal>
      <SectionReveal><PlacementsSection /></SectionReveal>
      <SectionReveal><GallerySection /></SectionReveal>
      <SectionReveal><AdmissionsSection /></SectionReveal>
      <SectionReveal><FAQSection /></SectionReveal>
      <SectionReveal><ContactSection /></SectionReveal>
      <SectionReveal><CTASection /></SectionReveal>
      <SectionReveal><Footer /></SectionReveal>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
