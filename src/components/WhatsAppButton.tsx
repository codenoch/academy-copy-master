import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline-block text-sm font-bold whitespace-nowrap">Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;
