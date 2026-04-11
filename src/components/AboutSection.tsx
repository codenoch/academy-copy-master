import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, UserCheck, Monitor, Calendar, Briefcase, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Trophy, text: "Government-Recognized Certification", color: "text-yellow-500" },
  { icon: UserCheck, text: "Expert Trainers with Industry Experience", color: "text-blue-500" },
  { icon: Monitor, text: "Modern, Air-Conditioned Computer Labs", color: "text-green-500" },
  { icon: Calendar, text: "Flexible Batch Timings (Morning / Evening / Weekend)", color: "text-purple-500" },
  { icon: Briefcase, text: "Free Job Assistance After Course Completion", color: "text-orange-500" },
  { icon: Gift, text: "Free Demo Class Before Enrollment", color: "text-pink-500" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">
            We're Not Just a Computer Institute.{" "}
            <span className="gradient-text">We're a Career Launchpad.</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0 font-body"
          >
            Om Digital Academy was founded with one mission: to make quality computer education accessible
            to every student in Gurugram — regardless of age, background, or prior knowledge.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10 font-body"
          >
            Since our founding, we have trained <strong className="text-foreground">10,000+ students</strong> and placed them in top companies,
            government departments, CA firms, architecture studios, and more. Our trainers are industry professionals,
            our labs are equipped with the latest software, and our curriculum is built around what employers actually want.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
              className="flex items-center gap-2 sm:gap-3 bg-secondary/50 hover:bg-secondary rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-default transition-colors duration-300"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <h.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${h.color}`} />
              </div>
              <span className="text-xs sm:text-sm font-medium font-body">{h.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Button variant="outline" asChild className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <a href="#contact">Learn More About Us →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
