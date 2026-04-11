import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import studentRahul from "@/assets/student-rahul.jpg";
import studentAmit from "@/assets/student-amit.jpg";
import studentSunita from "@/assets/student-sunita.jpg";
import studentMohit from "@/assets/student-mohit.jpg";
import studentPooja from "@/assets/student-pooja.jpg";
import studentPriya from "@/assets/student-priya.jpg";
import studentSana from "@/assets/student-sana.jpg";
import studentDeepak from "@/assets/student-deepak.jpg";

const testimonials = [
  {
    img: studentRahul,
    quote: "I joined Om Digital Academy for the Tally course after failing to find a job for months. Within 45 days of completing my course, I got placed at an accounting firm in Cyber City. Best investment of my life.",
    name: "Rahul Sharma",
    title: "Accounts Executive, DLF Cyber City",
  },
  {
    img: studentAmit,
    quote: "The AutoCAD batch is excellent. The trainer explained everything step by step. I got my first project as a draughtsman just 3 weeks after completing the course.",
    name: "Amit Rawat",
    title: "Junior Draughtsman, Gurugram",
  },
  {
    img: studentSunita,
    quote: "I'm a homemaker and wanted to learn something useful. The Basic Computer + MS Office course was perfect. Now I help my husband with his business accounts and even make presentations.",
    name: "Sunita Devi",
    title: "Homemaker & Part-Time Business Assistant",
  },
  {
    img: studentMohit,
    quote: "Fees are very reasonable, teachers are very supportive, and the lab is well-equipped. I completed my Digital Marketing course here and now run ads for small businesses.",
    name: "Mohit Garg",
    title: "Freelance Digital Marketer",
  },
  {
    img: studentPooja,
    quote: "I was preparing for government exams and needed typing + basic computer. Om Digital Academy helped me crack the SSC typing test. Highly recommended!",
    name: "Pooja Yadav",
    title: "Government Job Aspirant",
  },
  {
    img: studentPriya,
    quote: "From knowing nothing about computers to getting hired in 3 months — this place changed my life. The faculty is patient and the curriculum is very practical.",
    name: "Priya Verma",
    title: "Office Assistant, Gurugram",
  },
  {
    img: studentSana,
    quote: "The teachers here actually care about your progress. I completed the Advance Computer Course and now work at a private firm. Best decision I ever made.",
    name: "Sana Qureshi",
    title: "Data Entry Operator",
  },
  {
    img: studentDeepak,
    quote: "Got certified, got confident, got placed. The MS Office + Tally combo course is exactly what every fresher needs. Thank you Om Digital Academy!",
    name: "Deepak Negi",
    title: "Accounts Assistant",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Student Reviews</p>
          <h2 className="section-title">Real Students. Real Results. Real Jobs.</h2>
          <p className="section-subtitle">Don't take our word for it — hear from the students whose lives we've changed.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-4 sm:p-5 flex flex-col relative overflow-hidden group hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground italic flex-1 mb-3 sm:mb-4 font-body leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.img
                  src={t.img}
                  alt={t.name}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-primary/20"
                  width={44}
                  height={44}
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="font-bold text-xs sm:text-sm font-heading">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-body">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
