import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardList, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, num: "01", title: "Book a Free Demo", desc: "Call us or fill the form. Our counsellor will call you back and schedule a free demo class at your convenience." },
  { icon: ClipboardList, num: "02", title: "Choose Your Course", desc: "After your demo class, select the course that fits your goal. Our team will guide you if you're unsure." },
  { icon: GraduationCap, num: "03", title: "Learn, Practice & Get Certified", desc: "Attend classes, practice in our lab, complete projects, and walk out with a government-recognized certificate." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="section-label">Simple Process</p>
          <h2 className="section-title">Your Journey Starts in 3 Simple Steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary/10 absolute -top-2 sm:-top-4 left-1/2 -translate-x-1/2">{s.num}</div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild className="text-sm sm:text-base">
            <a href="#contact">Start Your Journey — Book Free Demo →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
