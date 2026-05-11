import { motion } from 'motion/react';
import TrustBar from '../components/TrustBar';
import { Shield, GraduationCap, Heart, BadgeCheck, Stethoscope, Microscope } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-[60px] overflow-hidden lux-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
                alt="Becks - Registered Nurse"
                className="w-full h-full object-cover grayscale-[0.2]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-text/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-sm uppercase tracking-widest font-bold mb-1">Becks, RGN</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Founder & Lead Practitioner</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold block">
                The Founder
              </span>
              <h1 className="text-6xl font-serif text-clinic-text leading-tight">
                Luxury Aesthetics <br />
                Managed with <span className="italic text-clinic-gold">Clinical Rigour</span>
              </h1>
              <p className="text-lg text-clinic-muted leading-relaxed">
                As a Registered Nurse with a professional career in medical care, my transition 
                into aesthetics was driven by a desire to combine my clinical expertise 
                with my passion for natural, balanced beauty.
              </p>
              <p className="text-clinic-muted leading-relaxed">
                At Bay Aesthetics Clinic, we believe that aesthetic medicine is about much 
                more than appearance. It’s about psychological well-being, medical 
                responsibility, and technical mastery.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-clinic-offwhite flex items-center justify-center text-clinic-gold">
                    <Shield size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-clinic-text">Full Insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-clinic-offwhite flex items-center justify-center text-clinic-gold">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-clinic-text">NMC Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-clinic-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-text mb-6">Why Nurse-Led Matters</h2>
            <p className="text-clinic-muted">
              Choosing a nurse-led clinic ensures your treatments are performed by a professional 
              who understands medical emergencies, anatomy, and pharmacology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                icon: Stethoscope,
                desc: "Nurses are trained to manage complications and side effects, providing a safer environment for medical-grade procedures."
              },
              {
                title: "Anatomical Knowledge",
                icon: Microscope,
                desc: "Our deep understanding of facial anatomy allows for more precise injections and consistent, natural results."
              },
              {
                title: "Ethical Practice",
                icon: Heart,
                desc: "Nurses follow a strict code of ethics through the NMC, prioritising your well-being over sales or trends."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] lux-shadow border border-clinic-rose/5 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-clinic-offwhite flex items-center justify-center text-clinic-gold mb-8 group-hover:bg-clinic-gold transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-clinic-text">{item.title}</h3>
                <p className="text-sm text-clinic-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <TrustBar />
    </div>
  );
}
