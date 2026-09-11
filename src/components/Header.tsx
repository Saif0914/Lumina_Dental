import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll progress indicator along top edge
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)]'
            : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-150/60'
        }`}
      >
        {/* Animated scroll progress line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400 origin-left z-50"
          style={{ scaleX }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" id="header-brand-logo" className="block cursor-pointer">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            <motion.a
              href="#hero"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#transformations"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Before & After
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Treatments
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Painless Tech
            </motion.a>
            <motion.a
              href="#doctors"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Our Doctors
            </motion.a>
            <motion.a
              href="#featured"
              whileHover={{ y: -1.5, color: '#0284c7' }}
              className="hover:text-cyan-600 transition-colors"
            >
              Stories
            </motion.a>
          </nav>

          {/* Right Action Stack */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Phone quick link */}
            <a
              href="tel:+15627891935"
              className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-cyan-700 transition-colors py-1.5 px-3 rounded-full hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>(562) 789-1935</span>
            </a>

            {/* Direct Booking Pill Button */}
            <motion.button
              onClick={onOpenBooking}
              whileTap={{ scale: 0.98 }}
              id="header-booking-btn"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-semibold tracking-wide rounded-full transition-colors cursor-pointer flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            id="header-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 space-y-4 font-semibold text-sm shadow-xl"
          >
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-900 hover:text-cyan-600">Home</a>
            <a href="#transformations" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Smile Transformations (Before & After)</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Treatments & Services</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Painless Tech & Comfort</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Doctors & Team</a>
            <a href="#featured" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Patient Stories</a>
            <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-cyan-600">Contact</a>
            
            <div className="pt-2 border-t border-slate-150 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Book an Appointment
              </button>
              <a
                href="https://wa.me/15627891935"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 bg-slate-100 text-slate-700 rounded-full text-xs font-bold tracking-wide hover:bg-slate-200 transition-colors"
              >
                WhatsApp Desk (+1 562-789-1935)
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
