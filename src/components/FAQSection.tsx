import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need any prior computer knowledge to join?", a: "Not at all! Our Basic Computer Course is designed for complete beginners. We start from scratch." },
  { q: "What is the course fee?", a: "Fees vary by course. We offer very affordable pricing with easy installment options. Contact us or visit the academy for the exact fee structure." },
  { q: "Do I get a certificate after completing the course?", a: "Yes! Every student receives a government-recognized certificate upon successful completion of the course." },
  { q: "How long are the courses?", a: "Courses range from 1 month (Typing, Basic Computer) to 6 months (Advanced, Hardware & Networking). You can choose based on your availability." },
  { q: "Is there a free demo class?", a: "Yes! We offer a free demo class for all courses. No commitment required — just come and experience the quality of teaching." },
  { q: "Do you help with job placement?", a: "Absolutely. We provide resume-building support, interview preparation, and actively refer students to hiring companies and firms." },
  { q: "Can working professionals join your courses?", a: "Yes! We have morning, evening, and weekend batches specifically designed for working professionals and students." },
  { q: "What software and tools will I learn?", a: "Depending on the course — MS Office, Tally Prime, AutoCAD, Adobe Photoshop, CorelDRAW, WordPress, Google Ads tools, and many more." },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="section-label">Got Questions?</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
