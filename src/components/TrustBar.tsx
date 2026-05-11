import { motion } from 'motion/react';
import { ShieldCheck, Star, Heart, UserCheck } from 'lucide-react';

const stats = [
  { icon: UserCheck, label: 'Registered Nurse', sub: 'NMC Registered' },
  { icon: Star, label: '5-Star Clinical Reviews', sub: 'Google Certified' },
  { icon: ShieldCheck, label: 'Fully Insured', sub: 'Insured Practice' },
  { icon: Heart, label: 'Personalised Care', sub: 'Tailored Plans' },
];

export default function TrustBar() {
  return (
    <section id="trust-bar" className="bg-white py-12 border-b border-clinic-rose/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-clinic-offwhite flex items-center justify-center text-clinic-gold group-hover:bg-clinic-gold group-hover:text-white transition-all duration-500">
                <stat.icon size={22} />
              </div>
              <div>
                <p className="text-sm font-serif text-clinic-text leading-tight">{stat.label}</p>
                <p className="text-[10px] uppercase tracking-widest text-clinic-rose font-medium mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
