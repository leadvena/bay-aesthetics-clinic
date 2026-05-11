import { motion } from 'motion/react';
import TrustBar from '../components/TrustBar';

const fullTreatments = [
  {
    category: 'Injectables',
    items: [
      { name: 'Anti-Wrinkle (Botox)', price: '1 Area £150 / 2 Areas £190 / 3 Areas £230', desc: 'Smoothing of forehead lines, frown lines, and crow’s feet.' },
      { name: 'Lip Contouring & Volume', price: '0.5ml £180 / 1ml £220', desc: 'Natural enhancement using premium fillers for shape and hydration.' },
      { name: 'Cheek/Jawline Filler', price: 'From £250', desc: 'Adding structure and lift to the mid-face or defining the jawline.' },
      { name: 'Nasolabial / Marionette Lines', price: 'From £220', desc: 'Softening deep lines around the mouth and nose.' },
    ]
  },
  {
    category: 'Skin Rejuvenation',
    items: [
      { name: 'Profhilo Skin Booster', price: '£250 per session', desc: 'High-concentration hyaluronic acid for deep hydration and skin tightening.' },
      { name: 'Seventy Hyal', price: '£150 per session', desc: 'Next-generation skin booster for immediate radiance and hydration.' },
      { name: 'Polynucleotides', price: 'From £200', desc: 'Cell-signalling treatment for skin repair, excellent for under-eyes.' },
    ]
  },
  {
    category: 'Clinical Facials',
    items: [
      { name: 'Chemical Peels', price: '£80', desc: 'Customised medical-grade peels to treat acne, ageing, or pigmentation.' },
      { name: 'Microneedling', price: '£120', desc: 'Stimulating natural collagen production for smoother, firmer skin.' },
      { name: 'Dermaplaning', price: '£45', desc: 'Exfoliation treatment removing peach fuzz and dead skin cells.' },
    ]
  }
];

export default function TreatmentsPage() {
  return (
    <div className="bg-clinic-offwhite pb-32">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Menu of Services
            </span>
            <h1 className="text-6xl md:text-7xl font-serif text-clinic-text mb-8">
              Aesthetic <span className="italic text-clinic-gold">Treatments</span>
            </h1>
            <p className="text-clinic-muted leading-relaxed">
              Every treatment at Bay Aesthetics Clinic begins with a thorough clinical 
              consultation to ensure the most natural, effective, and safe results for you.
            </p>
          </motion.div>

          <div className="space-y-24">
            {fullTreatments.map((cat, i) => (
              <div key={cat.category}>
                <h2 className="text-sm uppercase tracking-[0.4em] text-clinic-rose font-bold mb-10 pb-4 border-b border-clinic-rose/10 flex items-center">
                  <span className="mr-4">0{i+1}</span> {cat.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="group p-8 bg-white rounded-3xl lux-shadow border border-clinic-rose/5"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-serif text-clinic-text group-hover:text-clinic-gold transition-colors">{item.name}</h3>
                        <span className="text-xs font-bold text-clinic-rose bg-clinic-rose/5 px-3 py-1 rounded-full">{item.price}</span>
                      </div>
                      <p className="text-sm text-clinic-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBar />
    </div>
  );
}
