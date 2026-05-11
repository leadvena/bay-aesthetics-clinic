import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'About Becks', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-clinic-offwhite/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group flex flex-col">
          <span className="text-2xl font-serif tracking-tighter text-clinic-text group-hover:text-clinic-gold transition-colors">
            Bay Aesthetics
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-clinic-rose -mt-1">
            Clinic
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest hover:text-clinic-gold transition-colors ${
                location.pathname === link.path ? 'text-clinic-gold' : 'text-clinic-text'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-clinic-gold text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-clinic-rose transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-clinic-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-clinic-offwhite shadow-xl md:hidden border-t border-clinic-rose/10"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-clinic-text hover:text-clinic-rose transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="bg-clinic-gold text-white px-8 py-4 rounded-full text-center uppercase tracking-widest text-sm"
              >
                Book a Consultation
              </Link>
              <div className="flex justify-center space-x-6 pt-4 border-t border-clinic-rose/10">
                <a href="https://instagram.com/bay.aesthetics_clinic" target="_blank" rel="noreferrer" className="text-clinic-rose">
                  <Instagram size={20} />
                </a>
                <a href="tel:+447768645168" className="text-clinic-rose">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
