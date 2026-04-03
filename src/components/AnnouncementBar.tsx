import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center relative overflow-hidden"
        >
          <span className="font-semibold">🎉 New Batch Starting Soon — Limited Seats!</span>
          {" "}Book Your FREE Demo Class Today →{" "}
          <a
            href="https://wa.me/919625654137?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold hover:opacity-80 transition-opacity"
          >
            WhatsApp Us Now
          </a>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
