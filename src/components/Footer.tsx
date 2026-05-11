import { motion } from 'motion/react';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-clinic-rose/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif tracking-tighter text-clinic-text">
                Bay Aesthetics
              </span>
              <span className="text-xs uppercase tracking-[0.4em] text-clinic-rose -mt-1">
                Clinic
              </span>
            </Link>
            <p className="text-sm text-clinic-muted leading-relaxed max-w-xs">
              Nurse-led aesthetic clinic delivering natural, refined results in the heart of Pevensey Bay.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/bay.aesthetics_clinic" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-clinic-rose/20 flex items-center justify-center text-clinic-rose hover:bg-clinic-rose hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="tel:+447768645168" 
                className="w-10 h-10 rounded-full border border-clinic-rose/20 flex items-center justify-center text-clinic-rose hover:bg-clinic-rose hover:text-white transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/treatments" className="text-sm text-clinic-muted hover:text-clinic-gold transition-colors">Treatments</Link></li>
              <li><Link to="/about" className="text-sm text-clinic-muted hover:text-clinic-gold transition-colors">About Becks</Link></li>
              <li><Link to="/gallery" className="text-sm text-clinic-muted hover:text-clinic-gold transition-colors">Gallery</Link></li>
              <li><Link to="/book" className="text-sm text-clinic-muted hover:text-clinic-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-clinic-muted">
                <MapPin size={18} className="text-clinic-gold flex-shrink-0" />
                <span>Calverton, Channelview Rd,<br />Pevensey Bay, Pevensey BN24 6LU</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-clinic-muted">
                <Phone size={18} className="text-clinic-gold flex-shrink-0" />
                <span>+44 7768 645168</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-clinic-muted">
                <Mail size={18} className="text-clinic-gold flex-shrink-0" />
                <span>hello@bayaesthetics.co.uk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm text-clinic-muted">
                <span>Mon – Sat</span>
                <span>9am – 6pm</span>
              </li>
              <li className="flex justify-between text-sm text-clinic-muted">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-clinic-offwhite rounded-lg border border-clinic-rose/5">
              <p className="text-[10px] uppercase tracking-widest text-clinic-rose font-semibold mb-1">Clinic Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-clinic-text font-medium">Currently Open</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-clinic-rose/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-clinic-muted">
          <p>© {new Date().getFullYear()} Bay Aesthetics Clinic. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-clinic-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-clinic-gold transition-colors">Terms of Service</Link>
          </div>
          <p>Nurse-Led Aesthetics | Pevensey Bay, East Sussex</p>
        </div>
      </div>
    </footer>
  );
}
