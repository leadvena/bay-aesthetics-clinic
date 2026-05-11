import { motion } from 'motion/react';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="pt-20 pb-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Patient Showcase
            </span>
            <h1 className="text-6xl md:text-7xl font-serif text-clinic-text mb-8">
              Real <span className="italic text-clinic-gold">Results</span>
            </h1>
            <p className="text-clinic-muted leading-relaxed">
              Browse through our real patient transformations. We pride ourselves on the 
              subtlety of our work—aiming to make you look rested and refreshed, never 'done'.
            </p>
          </div>
        </div>
      </section>
      
      <Gallery />
      
      <section className="py-32 bg-white flex justify-center">
        <div className="max-w-4xl px-6">
          <div className="p-12 md:p-20 bg-clinic-offwhite rounded-[60px] border border-clinic-rose/10 flex flex-col items-center text-center">
            <h3 className="text-3xl font-serif mb-6">Ready for your transformation?</h3>
            <p className="text-clinic-muted mb-10 max-w-lg">
              Every face is unique. Book a bespoke consultation with Becks to discuss 
              how we can achieve your aesthetic goals safely and effectively.
            </p>
            <button className="bg-clinic-text text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-clinic-gold transition-all duration-500 shadow-xl shadow-clinic-text/10 overflow-hidden relative group">
              <span className="relative z-10">Request a Consultation</span>
              <div className="absolute inset-0 bg-clinic-rose translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            </button>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </div>
  );
}
