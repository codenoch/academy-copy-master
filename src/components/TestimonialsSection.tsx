import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import studentRahul from "@/assets/student-rahul.jpg";
import studentAmit from "@/assets/student-amit.jpg";
import studentSunita from "@/assets/student-sunita.jpg";
import studentMohit from "@/assets/student-mohit.jpg";
import studentPooja from "@/assets/student-pooja.jpg";

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
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Student Reviews</p>
          <h2 className="section-title">Real Students. Real Results. Real Jobs.</h2>
          <p className="section-subtitle">Don't take our word for it — hear from the students whose lives we've changed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic flex-1 mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" width={48} height={48} loading="lazy" />
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
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
