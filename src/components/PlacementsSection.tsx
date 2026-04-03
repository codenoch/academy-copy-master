import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const companies = [
  "CA Firms", "Architecture Studios", "MNCs in Gurugram", "Government Offices",
  "Banks", "IT Companies", "E-Commerce Companies", "Startups", "Media & Printing Companies", "Real Estate Firms",
];

const PlacementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center">
        <p className="section-label">Where Our Students Work</p>
        <h2 className="section-title">Our Students Are Working at Top Companies</h2>
        <p className="section-subtitle mb-10">Our placement-ready training has helped students land jobs at:</p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
          {companies.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium cursor-default hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-200 shadow-sm"
            >
              {c}
            </motion.span>
          ))}
        </div>

        <Button variant="outline" asChild>
          <a href="#contact">See How We Support Your Placement →</a>
        </Button>
      </div>
    </section>
  );
};

export default PlacementsSection;
