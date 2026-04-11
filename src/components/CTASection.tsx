import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Limited Seats Available — Enroll Now
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-primary-foreground leading-tight mb-6"
        >
          Your Dream Career Starts
          <br />
          <span className="text-accent">With One Free Class.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Join 10,000+ students who transformed their lives at Om Digital Academy.
          No risk — attend a free demo class and decide for yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
          >
            Book FREE Demo Class
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="tel:9625654137"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call: +91-9625654137
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-primary-foreground/60 text-xs sm:text-sm font-body px-4"
        >
          {["✅ No Registration Fee", "✅ Free Demo Class", "✅ Flexible Timings", "✅ Job Placement Support"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
