import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const batches = [
  { label: "🕗 Morning Batch", time: "7:00 AM – 10:00 AM" },
  { label: "🕐 Afternoon Batch", time: "12:00 PM – 3:00 PM" },
  { label: "🕕 Evening Batch", time: "5:00 PM – 8:00 PM" },
  { label: "📅 Weekend Batch", time: "Saturday & Sunday" },
];

const perks = [
  "Course Study Material (Printed)",
  "Access to Practice Labs",
  "Government-Recognized Certificate",
  "Free Placement Assistance",
  "Student ID Card",
];

const AdmissionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admissions" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Join the Next Batch</p>
          <h2 className="section-title">New Batches Starting Every Month — Limited Seats</h2>
          <p className="section-subtitle">Don't miss your chance. Seats fill up fast — especially for Tally, AutoCAD, and Digital Marketing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="font-bold text-lg mb-4">Batch Timings</h3>
            <div className="space-y-3">
              {batches.map((b) => (
                <div key={b.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium text-sm">{b.label}</span>
                  <span className="text-sm text-muted-foreground">{b.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="font-bold text-lg mb-4">What You Get on Admission</h3>
            <div className="space-y-3 mb-6">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">
              Affordable fees with easy installment options. Special discounts for students, women, and groups of 2+.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#contact">Secure Your Seat — Enroll Today →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
