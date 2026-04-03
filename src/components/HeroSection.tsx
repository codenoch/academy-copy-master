import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";
import galleryLab1 from "@/assets/gallery-lab1.jpg";
import galleryCeremony from "@/assets/gallery-ceremony.jpg";
import galleryGroup1 from "@/assets/gallery-group1.jpg";
import galleryTeaching from "@/assets/gallery-teaching.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import galleryBuilding from "@/assets/gallery-building.jpg";
import studentRahul from "@/assets/student-rahul.jpg";
import studentPriya from "@/assets/student-priya.jpg";
import studentAmit from "@/assets/student-amit.jpg";
import studentSana from "@/assets/student-sana.jpg";
import studentDeepak from "@/assets/student-deepak.jpg";
import studentPooja from "@/assets/student-pooja.jpg";

const heroImages = [
  { src: heroClassroom, label: "Our Modern Classrooms" },
  { src: galleryBuilding, label: "Om Digital Academy Campus" },
  { src: galleryLab1, label: "State-of-the-Art Computer Lab" },
  { src: galleryCeremony, label: "Certificate Distribution Ceremony" },
  { src: galleryGroup1, label: "Proud Students — Batch 2024" },
  { src: galleryTeaching, label: "Expert Faculty in Action" },
  { src: galleryCelebration, label: "Batch Completion Celebration" },
];

const studentCards = [
  { img: studentRahul, quote: "Landed a job at an accounting firm after Tally.", name: "Rahul Sharma", batch: "Tally Batch 2024" },
  { img: studentPriya, quote: "From zero to hired in 3 months. Life changed!", name: "Priya Verma", batch: "Basic Computer Course" },
  { img: studentAmit, quote: "AutoCAD training is hands-on. Got placed within weeks.", name: "Amit Rawat", batch: "AutoCAD Batch" },
  { img: studentSana, quote: "The teachers here actually care. Best decision ever.", name: "Sana Qureshi", batch: "Advance Computer Course" },
  { img: studentDeepak, quote: "Got certified, got confident, got placed.", name: "Deepak Negi", batch: "MS Office + Tally" },
  { img: studentPooja, quote: "Cracked the SSC typing test thanks to Om Digital!", name: "Pooja Yadav", batch: "Typing Course" },
];

const slideVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.8, ease: "easeIn" as const } },
};

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const goNext = () => setBgIndex((c) => (c + 1) % heroImages.length);
  const goPrev = () => setBgIndex((c) => (c - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCardIndex((c) => (c + 1) % studentCards.length), 4000);
    return () => clearInterval(t);
  }, []);

  const card = studentCards[cardIndex];

  return (
    <section id="home" className="relative overflow-hidden min-h-[100svh] flex items-center">
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={heroImages[bgIndex].src}
            alt={heroImages[bgIndex].label}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/85 lg:bg-gradient-to-r lg:from-foreground/92 lg:via-foreground/70 lg:to-foreground/30" />

      {/* Carousel prev/next — hidden on mobile to avoid clutter */}
      <button onClick={goPrev} className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-2 transition-all" aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={goNext} className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-2 transition-all" aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setBgIndex(i)}
            className={`rounded-full transition-all duration-300 ${i === bgIndex ? "bg-white w-5 h-2" : "bg-white/40 w-2 h-2"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 py-20 sm:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-primary-foreground text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4"
          >
            🎓 Gurugram's Most Trusted Computer Training Institute
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading"
          >
            Turn Your Computer Skills Into a{" "}
            <span className="text-accent">Career That Pays</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg opacity-90 mb-5 max-w-xl mx-auto lg:mx-0 font-body"
          >
            From zero to job-ready — Om Digital Academy trains real students for real jobs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm opacity-80 mb-6"
          >
            {["10,000+ Students Trained", "100% Practical", "Govt Certificate", "Job Support"].map((item, i) => (
              <motion.span key={item} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }}>
                ✅ {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-lg hover:shadow-accent/30 transition-all duration-300 w-full sm:w-auto" asChild>
              <a href="#contact">
                <Target className="w-5 h-5 mr-2" />
                Book FREE Demo Class
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white bg-white/10 hover:bg-white/20 font-bold backdrop-blur-sm w-full sm:w-auto" asChild>
              <a href="#courses">
                View All Courses <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right student card — hidden on small mobile, shown md+ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block flex-shrink-0 w-full max-w-xs lg:max-w-sm"
        >
          <div className="glass-card p-5 text-center">
            <div className="flex justify-center gap-1.5 mb-4">
              {studentCards.map((s, i) => (
                <button key={i} onClick={() => setCardIndex(i)}
                  className={`rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${i === cardIndex ? "border-accent w-9 h-9" : "border-white/20 w-7 h-7 opacity-50"}`}
                >
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={cardIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <img src={card.img} alt={card.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-accent/40 shadow-lg" width={80} height={80} />
                <p className="italic text-sm text-card-foreground mb-2 font-body">"{card.quote}"</p>
                <p className="font-bold text-card-foreground text-sm font-heading">{card.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.batch}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-1.5 mt-3">
              {studentCards.map((_, i) => (
                <button key={i} onClick={() => setCardIndex(i)}
                  className={`rounded-full transition-all duration-300 ${i === cardIndex ? "bg-accent w-5 h-1.5" : "bg-muted-foreground/30 w-1.5 h-1.5"}`}
                />
              ))}
            </div>
          </div>
          <a href="tel:9625654137" className="mt-3 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl py-2.5 px-4 transition-all border border-white/20">
            <span>📞</span>
            <div className="text-left">
              <p className="text-xs opacity-70 font-body">Call / WhatsApp</p>
              <p className="font-bold text-sm font-heading">+91-9625654137</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
