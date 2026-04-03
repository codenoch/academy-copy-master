import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact Us", href: "#contact" },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 as const } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 24 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.15 } },
};

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const l of [...navLinks].reverse()) {
        const el = document.getElementById(l.href.replace("#", ""));
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(l.href.replace("#", ""));
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`sticky top-0 z-[60] transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
                 : "bg-card/90 backdrop-blur-lg border-b border-border/30"
      }`}>
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <motion.a
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="text-base sm:text-lg font-heading font-extrabold text-primary leading-tight"
            whileHover={{ scale: 1.03 }}
          >
            Om Digital Academy
          </motion.a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((l, i) => {
              const id = l.href.replace("#", "");
              return (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => smoothScroll(e, l.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all after:duration-300 ${
                    active === id ? "text-primary after:w-full" : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {l.label}
                </motion.a>
              );
            })}
            <Button asChild className="hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-heading">
              <a href="tel:9625654137">
                <Phone className="w-4 h-4 mr-2" />
                Enroll Now — Free Demo
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors z-[70]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6 text-primary" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile full-screen menu — z-[55] so it's below the navbar z-[60] */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[55] bg-primary flex flex-col justify-center px-8 overflow-y-auto"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-1 pt-20 pb-10"
            >
              {navLinks.map((l) => (
                <motion.li key={l.href} variants={itemVariants}>
                  <a
                    href={l.href}
                    onClick={(e) => { smoothScroll(e, l.href); setOpen(false); }}
                    className="block text-2xl sm:text-3xl font-extrabold font-heading text-primary-foreground hover:text-accent transition-colors py-3 border-b border-primary-foreground/10"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="pt-6">
                <a
                  href="tel:9625654137"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-lg px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91-9625654137
                </a>
              </motion.li>
            </motion.ul>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4 pointer-events-none" />
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
