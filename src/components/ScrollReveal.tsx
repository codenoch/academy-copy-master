import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
  once?: boolean;
}

const directionMap = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  scale: { scale: 0.85, y: 20, x: 0 },
};

const ScrollReveal = ({ children, delay = 0, direction = "up", className = "", once = true }: ScrollRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const initial = { opacity: 0, ...directionMap[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
