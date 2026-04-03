import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Students Trained", icon: "🎓" },
  { value: 15, suffix: "+", label: "Courses Offered", icon: "📚" },
  { value: 98, suffix: "%", label: "Placement Rate", icon: "💼" },
  { value: 12, suffix: "+", label: "Years of Experience", icon: "🏆" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const totalSteps = Math.min(60, target);
    const step = target / totalSteps;
    const interval = duration / totalSteps;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-primary text-primary-foreground py-14 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-semibold mb-10 opacity-70 font-body tracking-wide uppercase"
        >
          Numbers That Speak For Themselves
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 90, damping: 15 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="cursor-default"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                className="text-3xl mb-2"
              >
                {s.icon}
              </motion.div>
              <div className="text-4xl md:text-5xl font-extrabold mb-1 font-heading">
                <CountUp target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-sm opacity-70 font-body">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
