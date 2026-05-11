import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is it safe?",
    answer: "Safety is our top priority. All treatments are performed by Becks, a Registered Nurse with extensive clinical training. We use only premium, FDA/CE approved products and maintain strict medical hygiene standards."
  },
  {
    question: "What's the recovery like?",
    answer: "Recovery depends on the treatment. Many procedures have minimal 'social downtime', though some swelling or bruising can occur. We provide comprehensive aftercare instructions and support for every patient."
  },
  {
    question: "Do I need a consultation first?",
    answer: "Yes, always. Every new patient journey starts with a medical consultation. This allows us to assess your suitability, discuss your goals, and create a personalised treatment plan together."
  },
  {
    question: "Are you qualified?",
    answer: "Absolutely. Becks is a Registered Nurse (NMC) with advanced training in aesthetic medicine. Nurse-led aesthetics ensures you are in the hands of a professional with deep medical accountability."
  },
  {
    question: "How long do results last?",
    answer: "Result longevity varies by treatment and individual. Dermal fillers typically last 6-18 months, anti-wrinkle treatments 3-4 months, and skin boosters 4-6 months. We will discuss expectations during your consultation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
          Your Questions Answered
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-clinic-text mb-20">
          Everything You <br />
          <span className="italic text-clinic-gold">Need to Know</span>
        </h2>
        
        <div className="space-y-6 text-left">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-clinic-rose/10 pb-6"
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-xl font-serif text-clinic-text group-hover:text-clinic-gold transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-clinic-rose/20 flex items-center justify-center text-clinic-gold transition-all ${openIndex === i ? 'bg-clinic-gold text-white' : ''}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-clinic-muted leading-relaxed pb-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
