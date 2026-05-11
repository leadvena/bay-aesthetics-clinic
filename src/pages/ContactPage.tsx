import Booking from '../components/Booking';
import Map from '../components/Map';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-6xl md:text-7xl font-serif text-clinic-text mb-8">
              Contact <span className="italic text-clinic-gold">The Clinic</span>
            </h1>
            <p className="text-clinic-muted leading-relaxed">
              We're here to help you on your aesthetic journey. Reach out with any 
              questions or to book your initial consultation at our Pevensey Bay location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Phone, title: "Phone", value: "+44 7768 645168", detail: "Mon-Sat 9am-6pm" },
              { icon: Mail, title: "Email", value: "hello@bayaesthetics.co.uk", detail: "Typical 24h response" },
              { icon: MapPin, title: "Clinic", value: "Pevensey Bay", detail: "Free onsite parking" },
              { icon: Instagram, title: "Instagram", value: "@bay.aesthetics_clinic", detail: "Direct message for quick queries" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-clinic-offwhite p-8 rounded-3xl border border-clinic-rose/5 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-clinic-gold mb-6 shadow-sm">
                  <item.icon size={20} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-clinic-text mb-2">{item.title}</h3>
                <p className="text-sm text-clinic-text font-serif mb-1">{item.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-clinic-rose font-medium">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Booking />
      <Map />
    </div>
  );
}
