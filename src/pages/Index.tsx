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
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsSection />
      <PlacementsSection />
      <GallerySection />
      <AdmissionsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
