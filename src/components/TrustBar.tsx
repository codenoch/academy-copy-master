import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "15+", label: "Courses Offered" },
  { value: "98%", label: "Placement Rate" },
  { value: "12+", label: "Years of Experience" },
];

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold mb-8 opacity-80">Numbers That Speak For Themselves</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-1">{s.value}</div>
              <div className="text-sm opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
