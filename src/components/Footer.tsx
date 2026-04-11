import { Phone, MapPin, Mail, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quickLinks = ["Home", "About Us", "Courses", "Gallery", "Testimonials", "Admissions", "Contact"];
const courseLinks = ["Basic Computer", "MS Office", "Tally", "AutoCAD", "Digital Marketing", "Web Design", "Graphic Design", "Typing", "Hardware & Networking"];

const Footer = () => {
  const bigRef = useRef(null);
  const bigInView = useInView(bigRef, { once: true, margin: "-50px" });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <>
      <footer ref={footerRef} className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="sm:col-span-2 md:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-heading font-extrabold mb-2 sm:mb-3">Om Digital Academy</h3>
              <p className="text-xs sm:text-sm opacity-70 mb-3 sm:mb-4 font-body">Empowering Careers Through Digital Education Since 2012</p>
              <a
                href="tel:9625654137"
                className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> +91-9625654137
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider opacity-60">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace(/ /g, "")}`}
                      className="text-xs sm:text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all duration-200 flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-accent">→</span>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider opacity-60">Courses</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {courseLinks.map((c) => (
                  <li key={c}>
                    <a
                      href="#courses"
                      className="text-xs sm:text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all duration-200 flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-accent">→</span>
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-2 md:col-span-1"
            >
              <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider opacity-60">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <a href="tel:9625654137" className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> +91-9625654137
                </a>
                <p className="flex items-start gap-2 sm:gap-3 opacity-70">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" /> Gurugram, Haryana
                </p>
                <p className="flex items-center gap-2 sm:gap-3 opacity-70">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> info@omdigitalacademy.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-4 sm:py-5 text-center text-[10px] sm:text-xs opacity-40 flex flex-col sm:flex-row items-center justify-center gap-1 font-body px-4">
          <span>© 2025 Om Digital Academy. All Rights Reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">Designed with <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-red-400" /> in Gurugram</span>
        </div>
      </footer>

      {/* Big OM DIGITAL watermark */}
      <section ref={bigRef} className="bg-primary overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 relative">
        {/* Decorative background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5" />
        </div>

        <div className="container mx-auto px-4 relative">
        <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 60 }}
            animate={bigInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 50, damping: 15 }}
            className="text-center"
          >
            <h2
              className="font-extrabold font-heading text-primary-foreground/[0.07] leading-none tracking-tighter select-none"
              style={{ fontSize: "clamp(5rem, 20vw, 18rem)" }}
            >
              OM DIGITAL
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={bigInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-2 px-4"
            >
              <p className="text-primary-foreground/40 text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-body">
                Academy — Empowering Careers Since 2012
              </p>
              <motion.a
                href="tel:9625654137"
                initial={{ opacity: 0 }}
                animate={bigInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 sm:mt-5 text-primary-foreground/50 hover:text-primary-foreground text-base sm:text-lg md:text-xl font-bold font-heading tracking-wider transition-colors"
              >
                📞 +91-9625654137
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Footer;
