import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroImage from '@/src/assets/images/clinic_hero_luxury_1778483378997.png';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bay Aesthetics Clinic Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-clinic-offwhite/90 via-clinic-offwhite/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.5em] text-clinic-rose font-semibold mb-4 block">
              Nurse-Led Clinical Practice
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-clinic-text leading-[1.1] mb-8">
              Natural <br />
              <span className="italic text-clinic-gold">Aesthetics</span> You <br />
              Can Trust.
            </h1>
            <p className="text-lg text-clinic-muted mb-10 max-w-lg leading-relaxed">
              Expert non-surgical cosmetic treatments in Pevensey Bay, 
              tailored to enhance your natural beauty with clinical precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/book"
                className="bg-clinic-text text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-clinic-gold transition-all duration-500 shadow-xl shadow-clinic-text/10 flex items-center justify-center"
              >
                Book Your Consultation
              </Link>
              <Link
                to="/treatments"
                className="bg-white/50 backdrop-blur-sm border border-clinic-rose/20 text-clinic-text px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:border-clinic-gold transition-all duration-500 flex items-center justify-center"
              >
                View Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-10 bottom-24 hidden lg:block">
        <span className="writing-vertical text-[10px] uppercase tracking-[0.6em] text-clinic-rose/40 font-medium rotate-180">
          Becks • Registered Nurse • Pevensey Bay
        </span>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-clinic-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
