import { Phone, MapPin, Mail } from "lucide-react";

const quickLinks = ["Home", "About Us", "Courses", "Gallery", "Testimonials", "Admissions", "Contact"];
const courseLinks = ["Basic Computer", "MS Office", "Tally", "AutoCAD", "Digital Marketing", "Web Design", "Graphic Design", "Typing", "Hardware & Networking"];

const Footer = () => {
  return (
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
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-XXXXXXXXXX</p>
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
  );
};

export default Footer;
