import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, UserCheck, Monitor, Calendar, Briefcase, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Trophy, text: "Government-Recognized Certification" },
  { icon: UserCheck, text: "Expert Trainers with Industry Experience" },
  { icon: Monitor, text: "Modern, Air-Conditioned Computer Labs" },
  { icon: Calendar, text: "Flexible Batch Timings (Morning / Evening / Weekend)" },
  { icon: Briefcase, text: "Free Job Assistance After Course Completion" },
  { icon: Gift, text: "Free Demo Class Before Enrollment" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">
            We're Not Just a Computer Institute.{" "}
            <span className="gradient-text">We're a Career Launchpad.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Om Digital Academy was founded with one mission: to make quality computer education accessible
            to every student in Gurugram — regardless of age, background, or prior knowledge.
          </p>
          <p className="text-muted-foreground mb-8">
            Since our founding, we have trained thousands of students and placed them in top companies,
            government departments, CA firms, architecture studios, and more. Our trainers are industry professionals,
            our labs are equipped with the latest software, and our curriculum is built around what employers actually want.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4"
            >
              <h.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{h.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="#contact">Learn More About Us →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
