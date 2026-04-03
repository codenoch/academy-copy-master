import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
import studentRahul from "@/assets/student-rahul.jpg";
import studentAmit from "@/assets/student-amit.jpg";
import studentSunita from "@/assets/student-sunita.jpg";
import studentMohit from "@/assets/student-mohit.jpg";
import studentPooja from "@/assets/student-pooja.jpg";
import studentPriya from "@/assets/student-priya.jpg";
import studentSana from "@/assets/student-sana.jpg";
import studentDeepak from "@/assets/student-deepak.jpg";

const tabs = ["All", "Classes", "Students", "Events", "Campus"];

const images = [
  { src: galleryBuilding, caption: "Om Digital Academy — Our Campus", category: "Campus", featured: true },
  { src: galleryLab1, caption: "Air-conditioned lab with 30+ workstations", category: "Campus" },
  { src: galleryReception, caption: "Modern reception & welcome area", category: "Campus" },
  { src: galleryTeaching, caption: "Expert faculty explaining MS Office", category: "Classes" },
  { src: galleryAutocad, caption: "Hands-on AutoCAD training session", category: "Classes" },
  { src: galleryTally, caption: "Students working on live Tally projects", category: "Classes" },
  { src: galleryGraphic, caption: "Graphic Design class — Photoshop in action", category: "Classes" },
  { src: galleryTyping, caption: "Speed typing practice session", category: "Classes" },
  { src: galleryDigital, caption: "Digital Marketing students learning analytics", category: "Classes" },
  { src: galleryWebdesign, caption: "Web Design batch — coding HTML & CSS", category: "Classes" },
  { src: galleryHardware, caption: "Hardware & Networking hands-on lab", category: "Classes" },
  { src: galleryExcel, caption: "Student mastering MS Excel", category: "Classes" },
  { src: galleryDtp, caption: "DTP class — CorelDRAW & design work", category: "Classes" },
  { src: galleryMentoring, caption: "One-on-one mentoring session", category: "Classes" },
  { src: galleryEvening, caption: "Evening batch in session", category: "Classes" },
  { src: galleryCeremony, caption: "Certificate distribution ceremony — Batch March 2024", category: "Events", featured: true },
  { src: galleryAward, caption: "Student receiving Best Performer award", category: "Events" },
  { src: galleryCelebration, caption: "Batch completion celebration!", category: "Events" },
  { src: galleryGroup1, caption: "Proud students — Batch 2024 group photo", category: "Students", featured: true },
  { src: galleryGroup2, caption: "Another successful batch — ready for careers!", category: "Students" },
  { src: studentRahul, caption: "Rahul Sharma — Placed at DLF Cyber City", category: "Students" },
  { src: studentAmit, caption: "Amit Rawat — Junior Draughtsman, Gurugram", category: "Students" },
  { src: studentSunita, caption: "Sunita Devi — Homemaker turned Business Assistant", category: "Students" },
  { src: studentMohit, caption: "Mohit Garg — Freelance Digital Marketer", category: "Students" },
  { src: studentPooja, caption: "Pooja Yadav — Cracked SSC Typing Test", category: "Students" },
  { src: studentPriya, caption: "Priya Verma — Hired in 3 months", category: "Students" },
  { src: studentSana, caption: "Sana Qureshi — Advance Computer Graduate", category: "Students" },
  { src: studentDeepak, caption: "Deepak Negi — MS Office + Tally Certified", category: "Students" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? images : images.filter((img) => img.category === activeTab);

  const goLightboxNext = () => setLightbox((l) => l !== null ? (l + 1) % filtered.length : null);
  const goLightboxPrev = () => setLightbox((l) => l !== null ? (l - 1 + filtered.length) % filtered.length : null);

  return (
    <section id="gallery" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-label">Life at Om Digital Academy</p>
          <h2 className="section-title">Inside Our Academy — Where Careers Are Built</h2>
          <p className="section-subtitle">Take a look at our state-of-the-art labs, classrooms, students, and events.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto mb-8"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.caption}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${img.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${img.featured ? "h-64 md:h-full" : "h-40 md:h-48"}`}
                loading="lazy"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/65 transition-all duration-300 flex flex-col items-end justify-between p-3">
                <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-primary-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium leading-snug">
                  {img.caption}
                </p>
              </div>
              {img.featured && (
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Featured
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" asChild className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <a href="#contact">📍 Book a Campus Visit →</a>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-primary-foreground bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goLightboxPrev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goLightboxNext(); }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].caption}
                  className="max-w-full max-h-[75vh] rounded-xl object-contain shadow-2xl"
                />
                <p className="mt-4 text-primary-foreground text-center text-sm font-medium opacity-80">
                  {filtered[lightbox].caption}
                </p>
                <p className="text-primary-foreground/40 text-xs mt-1">
                  {lightbox + 1} / {filtered.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
