import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const courseOptions = [
  "Basic Computer", "MS Office", "Tally", "Advance Computer", "AutoCAD",
  "DTP", "Graphic Design", "Web Design", "Digital Marketing", "Typing",
  "Hardware & Networking", "Busy Software", "Not Sure",
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "", mobile: "", email: "", course: "", batch: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `👋 Hi, I'm *${form.name}*`,
      `📱 Mobile: ${form.mobile}`,
      form.email ? `📧 Email: ${form.email}` : null,
      `📚 Course: ${form.course || "Not selected"}`,
      `🕐 Batch: ${form.batch || "Not selected"}`,
      form.message ? `💬 Message: ${form.message}` : null,
      `\n🙏 Please contact me regarding admission.`,
    ].filter(Boolean).join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/919625654137?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Ready to Start? We're Just One Message Away.</h2>
          <p className="section-subtitle">Fill in the form and we'll reach out instantly to help you choose the right course.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4"
          >
            <Input
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="font-body"
            />
            <Input
              placeholder="Mobile Number *"
              required
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="font-body"
            />
            <Input
              placeholder="Email Address (Optional)"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="font-body"
            />
            <Select onValueChange={(v) => setForm({ ...form, course: v })}>
              <SelectTrigger className="font-body"><SelectValue placeholder="Course Interested In" /></SelectTrigger>
              <SelectContent>
                {courseOptions.map((c) => (
                  <SelectItem key={c} value={c} className="font-body">{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(v) => setForm({ ...form, batch: v })}>
              <SelectTrigger className="font-body"><SelectValue placeholder="Preferred Batch Time" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Morning" className="font-body">🌅 Morning Batch</SelectItem>
                <SelectItem value="Evening" className="font-body">🌆 Evening Batch</SelectItem>
                <SelectItem value="Weekend" className="font-body">📅 Weekend Batch</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Your message or query... (Optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="font-body min-h-[100px] resize-none"
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" size="lg" className="w-full font-bold text-sm sm:text-base gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                <Send className="w-4 h-4" />
                Send Enquiry on WhatsApp
              </Button>
            </motion.div>
            <p className="text-[10px] sm:text-xs text-muted-foreground text-center font-body">
              Your message will open in WhatsApp. We reply within minutes! 🚀
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-5"
          >
            {[
              { icon: MapPin, label: "Address", value: "Gurugram, Haryana", href: null },
              { icon: Phone, label: "Phone / WhatsApp", value: "+91-9625654137", href: "tel:9625654137" },
              { icon: Mail, label: "Email", value: "info@omdigitalacademy.com", href: "mailto:info@omdigitalacademy.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 sm:gap-4 glass-card p-3 sm:p-4"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm font-heading">{label}</p>
                  {href ? (
                    <a href={href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-body break-all">{value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm text-muted-foreground font-body">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3 sm:gap-4 glass-card p-3 sm:p-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm font-heading">Academy Hours</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-body">Mon–Sat: 7:00 AM – 8:00 PM</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-body">Sunday: 9:00 AM – 2:00 PM</p>
              </div>
            </motion.div>

            <div className="overflow-hidden rounded-lg sm:rounded-xl border border-border/50 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883832!2d76.90131893955079!3d28.423998614449935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-40 sm:h-48"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Om Digital Academy Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
