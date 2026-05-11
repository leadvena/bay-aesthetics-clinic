import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1598440494883-997072046467?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=600',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
            Results You'll Love
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-clinic-text">
            Before & After <span className="italic text-clinic-gold">Gallery</span>
          </h2>
          <p className="mt-6 text-clinic-muted max-w-xl mx-auto">
            Discreet, natural results that enhance your unique features. 
            All photos shared with patient consent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden lux-shadow border border-clinic-offwhite cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery treatment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-clinic-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-clinic-gold transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest">Enlarge</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-clinic-muted italic">
            Patient privacy is our priority. For more results, visit our Instagram @bay.aesthetics_clinic
          </p>
        </div>
      </div>
    </section>
  );
}
