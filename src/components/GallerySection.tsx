import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroClassroom from "@/assets/hero-classroom.jpg";

const images = [
  { src: heroClassroom, caption: "Our air-conditioned lab with 30+ workstations" },
  { src: heroClassroom, caption: "Hands-on AutoCAD training session" },
  { src: heroClassroom, caption: "Certificate distribution ceremony — Batch March 2024" },
  { src: heroClassroom, caption: "Students working on live Tally projects" },
  { src: heroClassroom, caption: "Evening batch in session" },
  { src: heroClassroom, caption: "Modern classroom facilities" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Life at Om Digital Academy</p>
          <h2 className="section-title">Inside Our Academy — Where Careers Are Built</h2>
          <p className="section-subtitle">Take a look at our state-of-the-art labs, classrooms, and student activities.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </section>
  );
};

export default GallerySection;
