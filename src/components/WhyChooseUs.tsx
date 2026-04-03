import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, UserCheck, Award, Clock, Briefcase, Gift } from "lucide-react";

const features = [
  { icon: Monitor, title: "Modern Labs", desc: "Air-conditioned computer labs with the latest hardware and licensed software. Real tools, real learning." },
  { icon: UserCheck, title: "Expert Faculty", desc: "Our trainers aren't just teachers — they're industry professionals with years of hands-on experience." },
  { icon: Award, title: "Recognized Certification", desc: "Our certificates are recognized by employers across Gurugram, Delhi NCR, and beyond." },
  { icon: Clock, title: "Flexible Timings", desc: "Morning, evening, and weekend batches so education fits your schedule — not the other way around." },
  { icon: Briefcase, title: "Job Placement Support", desc: "We don't just teach you — we help you get hired. Interview prep, resume writing, and job referrals." },
  { icon: Gift, title: "Free Demo Class", desc: "Try before you commit. Attend a free demo class and see the quality of teaching yourself." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Our Difference</p>
          <h2 className="section-title">Why 10,000+ Students Chose Om Digital Academy</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
