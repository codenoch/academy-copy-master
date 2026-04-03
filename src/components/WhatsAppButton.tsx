import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5">
      {/* Phone button */}
      <motion.a
        href="tel:9625654137"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center bg-primary text-primary-foreground rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-xl shadow-primary/40"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
      </motion.a>

      {/* WhatsApp button with glow */}
      <motion.a
        href="https://wa.me/919625654137?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center gap-2 bg-[#25D366] text-white rounded-full pl-3 pr-4 py-2.5 sm:py-3 shadow-xl"
        style={{ boxShadow: "0 0 18px rgba(37,211,102,0.55), 0 4px 16px rgba(37,211,102,0.3)" }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 relative z-10" />
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap relative z-10">Chat with Us</span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
