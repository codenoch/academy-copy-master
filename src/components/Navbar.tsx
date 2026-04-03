import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact Us", href: "#contact" },
];

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.3 },
  },
  exit: { height: 0, opacity: 0, transition: { when: "afterChildren", duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  exit: { opacity: 0, x: -20 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="text-xl font-heading font-extrabold text-primary">
          Om Digital Academy
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {l.label}
            </a>
          ))}
          <Button asChild>
            <a href="tel:9625654137">
              <Phone className="w-4 h-4 mr-2" />
              Enroll Now — Free Demo
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu with stagger */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={itemVariants}
                  className="py-3 px-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants}>
                <Button asChild className="mt-2 w-full">
                  <a href="tel:9625654137" onClick={() => setOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Enroll Now — Free Demo
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
