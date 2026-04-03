import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center relative">
      <span className="font-semibold">🎉 New Batch Starting Soon — Limited Seats!</span>
      {" "}Book Your FREE Demo Class Today →{" "}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
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
    </div>
  );
};

export default AnnouncementBar;
