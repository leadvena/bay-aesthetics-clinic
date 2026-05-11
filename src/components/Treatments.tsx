import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Droplets, Layers, Smile, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    title: 'Anti-Wrinkle',
    desc: 'Softening fine lines and wrinkles for a refreshed, naturally youthful appearance.',
    price: 'From £150',
    tag: 'Popular',
    icon: Sparkles
  },
  {
    title: 'Dermal Fillers',
    desc: 'Restore lost volume and refine contours of the cheeks, jawline, and chin.',
    price: 'From £220',
    tag: 'Clinical',
    icon: Layers
  },
  {
    title: 'Lip Enhancement',
    desc: 'Subtle, natural lip framing and volume using premium hyaluronic acid fillers.',
    price: 'From £180',
    tag: 'Specialist',
    icon: Smile
  },
  {
    title: 'Profhilo',
    desc: 'The ultimate skin bioremodelling treatment for sagging skin and hydration.',
    price: 'From £250',
    tag: 'Advanced',
    icon: Droplets
  },
  {
    title: 'Skin Boosters',
    desc: 'Deeply hydrating injectable treatments to improve skin texture and radiance.',
    price: 'From £140',
    tag: 'Glow',
    icon: Zap
  },
  {
    title: 'Chemical Peels',
    desc: 'Medical-grade peels for targeted skin concerns like acne, pigmentation and ageing.',
    price: 'From £80',
    tag: 'Renew',
    icon: RefreshCw
  }
];

export default function Treatments() {
  return (
    <section id="treatments-section" className="py-32 bg-clinic-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Professional Treatments
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-clinic-text leading-tight">
              Clinically Proven <br />
              <span className="italic text-clinic-gold">Solutions</span> For You.
            </h2>
          </div>
          <Link 
            to="/treatments" 
            className="group flex items-center space-x-3 text-xs uppercase tracking-widest text-clinic-text hover:text-clinic-gold transition-colors pb-2 border-b border-clinic-rose/20"
          >
            <span>View All Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl lux-shadow border border-clinic-rose/5 group hover:border-clinic-gold transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-clinic-offwhite rounded-2xl flex items-center justify-center text-clinic-gold">
                  <t.icon size={28} />
                </div>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-clinic-rose/10 text-clinic-rose rounded-full font-bold uppercase">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-clinic-text group-hover:text-clinic-gold transition-colors">{t.title}</h3>
              <p className="text-sm text-clinic-muted leading-relaxed mb-8">
                {t.desc}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-clinic-rose/5">
                <span className="font-serif text-lg text-clinic-text">{t.price}</span>
                <Link to="/book" className="text-clinic-gold hover:text-clinic-rose transition-colors">
                  <Sparkles size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
