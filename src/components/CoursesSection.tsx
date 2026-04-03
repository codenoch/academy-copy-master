import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Monitor, FileText, Calculator, Laptop, PenTool, Palette, Image, Globe, Megaphone, Keyboard, Wrench, BookOpen
} from "lucide-react";

const courses = [
  { icon: Monitor, title: "Basic Computer Course", tag: "Perfect for Absolute Beginners", desc: "Learn the fundamentals — how to operate a computer, use Windows, browse the internet, type faster, and handle basic digital tasks.", duration: "1–2 Months" },
  { icon: FileText, title: "MS Office (Word, Excel, PowerPoint)", tag: "The Backbone of Every Office Job", desc: "Master Microsoft Office like a pro. Create reports in Word, build powerful spreadsheets in Excel, and design stunning presentations.", duration: "1–3 Months" },
  { icon: Calculator, title: "Tally Prime (Basic to Advanced)", tag: "The #1 Course for Accounting Jobs", desc: "India's most in-demand accounting software. Learn GST entries, balance sheets, payroll, inventory management, and more.", duration: "2–3 Months" },
  { icon: Laptop, title: "Advance Computer Course", tag: "Go Beyond the Basics", desc: "A comprehensive program covering MS Office, Internet, Email, Google Workspace, and basic troubleshooting.", duration: "3–6 Months" },
  { icon: PenTool, title: "AutoCAD (2D & 3D)", tag: "For Engineers, Architects & Designers", desc: "Learn to create professional 2D drawings and 3D models used in civil, mechanical, and architectural industries.", duration: "2–4 Months" },
  { icon: Palette, title: "DTP — Desktop Publishing", tag: "Design for Print & Digital Media", desc: "Master CorelDRAW and Photoshop to create visiting cards, banners, brochures, and marketing materials.", duration: "2–3 Months" },
  { icon: Image, title: "Graphic Design", tag: "Turn Creativity Into a Career", desc: "Learn Adobe Photoshop, Illustrator, and Canva for social media, branding, logo design, and digital marketing.", duration: "2–4 Months" },
  { icon: Globe, title: "Web Designing (HTML, CSS & WordPress)", tag: "Build Websites. Build a Business.", desc: "Create beautiful websites from scratch. No prior coding needed. Covers HTML, CSS, and WordPress.", duration: "3–4 Months" },
  { icon: Megaphone, title: "Digital Marketing", tag: "Market Online. Grow Any Business.", desc: "Learn SEO, Google Ads, Facebook Ads, Instagram Marketing, Email Marketing, and more.", duration: "2–4 Months" },
  { icon: Keyboard, title: "Typing (Hindi & English)", tag: "Speed. Accuracy. Confidence.", desc: "Government job exams require typing skills. We train you in both Hindi and English typing with speed tests.", duration: "1–2 Months" },
  { icon: Wrench, title: "Computer Hardware & Networking", tag: "Fix Computers. Build a Career in IT.", desc: "Learn to assemble, repair, and troubleshoot computers. Covers networking basics, LAN setup, and IT support.", duration: "3–6 Months" },
  { icon: BookOpen, title: "Busy Accounting Software", tag: "For Commerce Students & Accountants", desc: "Industry-preferred accounting software used by thousands of businesses. Learn billing, inventory, and financial reports.", duration: "1–2 Months" },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="courses" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Our Programs</p>
          <h2 className="section-title">Find the Course That Fits Your Goals</h2>
          <p className="section-subtitle">From beginners to professionals — we have a course for every stage of your journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">{c.tag}</span>
              <h3 className="text-lg font-bold mt-1 mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">📅 {c.duration} | 📜 Certificate</span>
                <Button size="sm" variant="ghost" className="text-primary font-semibold text-xs" asChild>
                  <a href="#contact">Enroll →</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center glass-card p-8 max-w-xl mx-auto">
          <p className="font-bold text-lg mb-2">Not sure which course is right for you?</p>
          <p className="text-muted-foreground text-sm mb-4">Talk to our counsellors — we'll help you pick the perfect program.</p>
          <Button asChild>
            <a href="#contact">📞 Get Free Counselling →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
