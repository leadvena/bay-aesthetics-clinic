import { motion } from 'motion/react';
import { BadgeCheck, GraduationCap, Heart, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <section id="about-becks" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden lux-shadow">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
                  alt="Becks - Registered Nurse"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-clinic-gold p-8 rounded-3xl text-white shadow-2xl flex flex-col items-center">
                <GraduationCap size={40} className="mb-2" />
                <span className="text-sm uppercase tracking-widest font-bold">NMC Registered</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80 mt-1">Practicing Nurse</span>
              </div>
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-clinic-rose/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-clinic-gold/5 rounded-full blur-3xl z-0"></div>
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
                Meet Your Practitioner
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-clinic-text leading-tight mb-8">
                About <span className="italic text-clinic-gold">Becks</span>
              </h2>
              <p className="text-lg text-clinic-muted leading-relaxed mb-6">
                With a background in professional nursing care, Becks founded Bay Aesthetics to provide 
                a clinical standard of care in the world of aesthetics. Her approach is rooted in 
                safety, natural enhancement, and patient empowerment.
              </p>
              <p className="text-clinic-muted leading-relaxed">
                As a Registered Nurse (NMC), Becks understands the anatomy and clinical 
                responsibility behind every needle. At Bay Aesthetics, you aren't just a client—you 
                are a patient receiving evidence-based care in a trusted, medical environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: Stethoscope, text: "Clinical Background" },
                { icon: BadgeCheck, text: "Fully Insured" },
                { icon: GraduationCap, text: "Advanced Trained" },
                { icon: Heart, text: "Patient-First Care" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-clinic-offwhite rounded-2xl border border-clinic-rose/5">
                  <item.icon size={20} className="text-clinic-gold" />
                  <span className="text-sm font-medium text-clinic-text">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <blockquote className="border-l-4 border-clinic-gold pl-6 py-2">
                <p className="text-xl font-serif italic text-clinic-text">
                  "Nurse-led aesthetics isn't just about the result; it's about the safety, 
                  knowledge, and clinical integrity that goes into every treatment."
                </p>
                <footer className="mt-4 text-xs uppercase tracking-widest text-clinic-rose font-bold">
                  — Becks, RGN
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
