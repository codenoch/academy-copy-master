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
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
    const text = `Hi, I'm ${form.name}.%0AMobile: ${form.mobile}%0AEmail: ${form.email || "N/A"}%0ACourse: ${form.course || "Not selected"}%0ABatch: ${form.batch || "Not selected"}%0AMessage: ${form.message || "N/A"}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Ready to Start? We're Just One Message Away.</h2>
          <p className="section-subtitle">Fill in the form and we'll reach out instantly to help you choose the right course.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <Input
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Mobile Number *"
              required
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Select onValueChange={(v) => setForm({ ...form, course: v })}>
              <SelectTrigger><SelectValue placeholder="Course Interested In" /></SelectTrigger>
              <SelectContent>
                {courseOptions.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(v) => setForm({ ...form, batch: v })}>
              <SelectTrigger><SelectValue placeholder="Preferred Batch Time" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Morning">Morning</SelectItem>
                <SelectItem value="Evening">Evening</SelectItem>
                <SelectItem value="Weekend">Weekend</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Any Message / Query (Optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" size="lg" className="w-full font-bold">
              📲 Send Enquiry on WhatsApp
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Address</p>
                <p className="text-sm text-muted-foreground">Gurugram, Haryana</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Phone / WhatsApp</p>
                <p className="text-sm text-muted-foreground">+91-XXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm text-muted-foreground">info@omdigitalacademy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Academy Hours</p>
                <p className="text-sm text-muted-foreground">Mon–Sat: 7:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: 9:00 AM – 2:00 PM</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl overflow-hidden mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883832!2d76.90131893955079!3d28.423998614449935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-48 rounded-lg"
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
