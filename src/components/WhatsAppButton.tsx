import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919625654137?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground rounded-full p-4 shadow-xl flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline-block text-sm font-bold whitespace-nowrap">Chat with Us</span>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:9625654137"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        className="fixed bottom-6 right-[88px] z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-xl"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
