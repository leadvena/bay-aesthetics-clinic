import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Anyone wanting treatment this place is amazing. I felt so comfortable and the results are incredibly natural.",
    author: "Google Reviewer",
    rating: 5
  },
  {
    text: "Becks is so professional and reassuring. She took the time to explain everything and made me feel at ease throughout.",
    author: "Clinically Verified",
    rating: 5
  },
  {
    text: "The service Becks provides is outstanding. Her clinical knowledge really shines through and I wouldn't trust anyone else.",
    author: "Pevensey Local",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-clinic-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Patient Experiences
            </span>
            <h2 className="text-5xl font-serif text-clinic-text leading-tight mb-8">
              What Our <br />
              <span className="italic text-clinic-gold">Patients</span> Say.
            </h2>
            <div className="flex items-center space-x-2 text-clinic-gold mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="text-clinic-text font-semibold ml-2">5.0 Google Rating</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[32px] bg-white lux-shadow relative overflow-hidden group ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <Quote size={80} className="absolute -top-4 -right-4 text-clinic-rose/5 transform group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex mb-6 space-x-1">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} size={14} fill="#C5A059" className="text-clinic-gold" />
                    ))}
                  </div>
                  <p className="text-lg font-serif italic text-clinic-text leading-relaxed mb-8">
                    "{rev.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-rose/10 flex items-center justify-center text-clinic-rose font-serif text-lg">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-clinic-text">{rev.author}</p>
                      <p className="text-[10px] uppercase tracking-widest text-clinic-rose">Google Review</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
