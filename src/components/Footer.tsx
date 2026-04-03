import { Phone, MapPin, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quickLinks = ["Home", "About Us", "Courses", "Gallery", "Testimonials", "Admissions", "Contact"];
const courseLinks = ["Basic Computer", "MS Office", "Tally", "AutoCAD", "Digital Marketing", "Web Design", "Graphic Design", "Typing", "Hardware & Networking"];

const Footer = () => {
  const bigRef = useRef(null);
  const bigInView = useInView(bigRef, { once: true, margin: "-50px" });

  return (
    <>
      <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-heading font-extrabold mb-3">Om Digital Academy</h3>
              <p className="text-sm opacity-70">Empowering Careers Through Digital Education Since 2012</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1.5">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/ /g, "")}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Courses</h4>
              <ul className="space-y-1.5">
                {courseLinks.map((c) => (
                  <li key={c}>
                    <a href="#courses" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{c}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Contact</h4>
              <div className="space-y-2 text-sm opacity-70">
                <a href="tel:9625654137" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="w-4 h-4" /> +91-9625654137</a>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Gurugram, Haryana</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@omdigitalacademy.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-50">
          © 2025 Om Digital Academy. All Rights Reserved. | Designed with ❤️ in Gurugram
        </div>
      </footer>

      {/* Big OM DIGITAL mark */}
      <section ref={bigRef} className="bg-primary overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={bigInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold font-heading text-primary-foreground/10 leading-none tracking-tighter select-none">
              OM DIGITAL
            </h2>
            <p className="text-primary-foreground/40 text-sm md:text-base mt-4 font-medium tracking-widest uppercase">
              Academy — Empowering Careers Since 2012
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Footer;
