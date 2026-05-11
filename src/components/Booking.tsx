import { motion } from 'motion/react';
import { Send, Calendar, User, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book-consultation" className="py-32 bg-clinic-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose font-semibold mb-4 block">
              Begin Your Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-clinic-text leading-tight mb-8">
              Book Your <br />
              <span className="italic text-clinic-gold">Consultation</span>
            </h2>
            <p className="text-lg text-clinic-muted leading-relaxed mb-10">
              Take the first step towards feeling your most confident self. 
              Fill out the form to request an appointment, or use our Calendly 
              integration below for instant booking.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-3xl bg-white lux-shadow flex items-center justify-center text-clinic-gold">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl">Instant Booking</h4>
                  <p className="text-sm text-clinic-muted">View live availability on Calendly</p>
                </div>
              </div>
              
              <div className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-clinic-rose/10 flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-clinic-rose font-bold mb-4">Calendly Integration Placeholder</span>
                <div className="w-full h-48 bg-clinic-offwhite/50 border-2 border-dashed border-clinic-rose/20 rounded-2xl flex items-center justify-center text-clinic-rose/60 text-sm font-medium">
                  Calendly Widget Will Be Embedded Here
                </div>
                <button className="mt-6 w-full py-4 bg-clinic-gold text-white rounded-full uppercase tracking-widest text-xs hover:bg-clinic-rose transition-all">
                  Open Booking Calendar
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[40px] lux-shadow border border-clinic-rose/5"
          >
            <h3 className="text-2xl font-serif mb-10 text-clinic-text">Enquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-clinic-rose font-bold">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinic-gold/40" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full pl-12 pr-6 py-4 bg-clinic-offwhite border-none rounded-2xl focus:ring-2 focus:ring-clinic-gold placeholder:text-clinic-muted/50 transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-clinic-rose font-bold">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinic-gold/40" />
                    <input 
                      type="tel" 
                      placeholder="07768 645168" 
                      className="w-full pl-12 pr-6 py-4 bg-clinic-offwhite border-none rounded-2xl focus:ring-2 focus:ring-clinic-gold placeholder:text-clinic-muted/50 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-clinic-rose font-bold">Treatment of Interest</label>
                <select className="w-full px-6 py-4 bg-clinic-offwhite border-none rounded-2xl focus:ring-2 focus:ring-clinic-gold transition-all text-sm appearance-none cursor-pointer">
                  <option>Botox / Anti-Wrinkle</option>
                  <option>Dermal Fillers</option>
                  <option>Skin Boosters / Profhilo</option>
                  <option>Lip Enhancement</option>
                  <option>Chemical Peels</option>
                  <option>Something Else</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-clinic-rose font-bold">Your Message</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-6 text-clinic-gold/40" />
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your goals..." 
                    className="w-full pl-12 pr-6 py-4 bg-clinic-offwhite border-none rounded-2xl focus:ring-2 focus:ring-clinic-gold placeholder:text-clinic-muted/50 transition-all text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-clinic-text text-white py-5 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center space-x-3 hover:bg-clinic-gold transition-all group"
              >
                <span>Send Enquiry</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clinic-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
}
