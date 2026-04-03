import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Students Trained" },
  { value: 15, suffix: "+", label: "Courses Offered" },
  { value: 98, suffix: "%", label: "Placement Rate" },
  { value: 12, suffix: "+", label: "Years of Experience" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
};

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-semibold mb-8 opacity-80"
        >
          Numbers That Speak For Themselves
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-1 font-heading">
                <CountUp target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-sm opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
