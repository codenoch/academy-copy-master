import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import galleryLab1 from "@/assets/gallery-lab1.jpg";
import galleryAutocad from "@/assets/gallery-autocad.jpg";
import galleryCeremony from "@/assets/gallery-ceremony.jpg";
import galleryTally from "@/assets/gallery-tally.jpg";
import galleryEvening from "@/assets/gallery-evening.jpg";
import galleryBuilding from "@/assets/gallery-building.jpg";
import galleryGroup1 from "@/assets/gallery-group1.jpg";
import galleryGraphic from "@/assets/gallery-graphic.jpg";
import galleryTyping from "@/assets/gallery-typing.jpg";
import galleryTeaching from "@/assets/gallery-teaching.jpg";
import galleryDigital from "@/assets/gallery-digital.jpg";
import galleryWebdesign from "@/assets/gallery-webdesign.jpg";
import galleryAward from "@/assets/gallery-award.jpg";
import galleryHardware from "@/assets/gallery-hardware.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import galleryExcel from "@/assets/gallery-excel.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryMentoring from "@/assets/gallery-mentoring.jpg";
import galleryGroup2 from "@/assets/gallery-group2.jpg";
import galleryDtp from "@/assets/gallery-dtp.jpg";

const images = [
  { src: galleryLab1, caption: "Our air-conditioned lab with 30+ workstations" },
  { src: galleryAutocad, caption: "Hands-on AutoCAD training session" },
  { src: galleryCeremony, caption: "Certificate distribution ceremony — Batch March 2024" },
  { src: galleryTally, caption: "Students working on live Tally projects" },
  { src: galleryEvening, caption: "Evening batch in session" },
  { src: galleryBuilding, caption: "Om Digital Academy — Our Campus" },
  { src: galleryGroup1, caption: "Proud students — Batch 2024 group photo" },
  { src: galleryGraphic, caption: "Graphic Design class — Photoshop in action" },
  { src: galleryTyping, caption: "Speed typing practice session" },
  { src: galleryTeaching, caption: "Expert faculty explaining MS Office" },
  { src: galleryDigital, caption: "Digital Marketing students learning analytics" },
  { src: galleryWebdesign, caption: "Web Design batch — coding HTML & CSS" },
  { src: galleryAward, caption: "Student receiving Best Performer award" },
  { src: galleryHardware, caption: "Hardware & Networking hands-on lab" },
  { src: galleryCelebration, caption: "Batch completion celebration!" },
  { src: galleryExcel, caption: "Student mastering MS Excel" },
  { src: galleryReception, caption: "Our modern reception & welcome area" },
  { src: galleryMentoring, caption: "One-on-one mentoring session" },
  { src: galleryGroup2, caption: "Another successful batch — ready for careers!" },
  { src: galleryDtp, caption: "DTP class — CorelDRAW & design work" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Life at Om Digital Academy</p>
          <h2 className="section-title">Inside Our Academy — Where Careers Are Built</h2>
          <p className="section-subtitle">Take a look at our state-of-the-art labs, classrooms, and student activities.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto mb-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="#contact">Book a Campus Visit →</a>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[lightbox].src}
            alt={images[lightbox].caption}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
          />
          <p className="absolute bottom-8 text-primary-foreground text-center text-sm font-medium">
            {images[lightbox].caption}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
