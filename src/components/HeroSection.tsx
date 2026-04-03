import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";
import studentRahul from "@/assets/student-rahul.jpg";
import studentPriya from "@/assets/student-priya.jpg";
import studentAmit from "@/assets/student-amit.jpg";
import studentSana from "@/assets/student-sana.jpg";
import studentDeepak from "@/assets/student-deepak.jpg";

const testimonials = [
  { img: studentRahul, quote: "Rahul landed a job at an accounting firm after completing Tally.", name: "Rahul Sharma", batch: "Batch 2024" },
  { img: studentPriya, quote: "I went from knowing nothing about computers to getting hired in 3 months.", name: "Priya Verma", batch: "Basic Computer Course" },
  { img: studentAmit, quote: "AutoCAD training here is hands-on. I got a draughtsman job within weeks.", name: "Amit Rawat", batch: "AutoCAD Batch" },
  { img: studentSana, quote: "The teachers here actually care. Best decision I ever made.", name: "Sana Qureshi", batch: "Advance Computer Course" },
  { img: studentDeepak, quote: "Got certified, got confident, got placed.", name: "Deepak Negi", batch: "MS Office + Tally" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroClassroom} alt="Om Digital Academy classroom" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative container mx-auto section-padding flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-primary-foreground"
        >
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            🎓 Gurugram's Most Trusted Computer Training Institute
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn Your Computer Skills Into a{" "}
            <span className="text-accent">Career That Pays</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-xl">
            From zero to job-ready — Om Digital Academy trains real students for real jobs.
            Whether you're a student, homemaker, or job-seeker, we've got the course that changes your life.
          </p>
          <div className="flex flex-wrap gap-3 text-sm opacity-80 mb-8">
            <span>✅ 1000+ Students Trained</span>
            <span>✅ 100% Practical Training</span>
            <span>✅ Govt-Recognized Certificate</span>
            <span>✅ Job Placement Support</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base" asChild>
              <a href="#contact"><Target className="w-5 h-5 mr-2" />Book Your FREE Demo Class</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base" asChild>
              <a href="#courses">View All Courses <ArrowRight className="w-5 h-5 ml-2" /></a>
            </Button>
          </div>
        </motion.div>

        {/* Right: rotating student testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0 w-full max-w-sm"
        >
          <div className="glass-card p-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary/30"
                  width={80}
                  height={80}
                />
                <p className="italic text-sm text-card-foreground mb-3">"{t.quote}"</p>
                <p className="font-bold text-card-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.batch}</p>
              </motion.div>
            </AnimatePresence>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
