import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#171717] text-gray-400 text-xs pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Brand Banner in Footer */}
        <div className="pb-10 mb-10 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Logo variant="light" size="lg" showSubtitle={true} />
          <p className="text-gray-400 text-xs max-w-md">
            Dedicated to gentle, world-class dentistry and lifelong healthy smiles. Serving patients of all ages with personalized comfort.
          </p>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Patient Information */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-heading">Patient Information</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#family-care" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Before & Afters</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-heading">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Preventive Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Checkups</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Braces</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Emergency</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-heading">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 4: Contact us */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-heading">Contact us</h4>
            <div className="space-y-2 text-gray-400 leading-relaxed">
              <p>
                123 West Street,<br />
                2nd Floor,<br />
                Whittier, CA 90604
              </p>
              <div className="flex items-center space-x-2 pt-1">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+15627891935" className="hover:text-white transition-colors">(562) 789-1935</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:care@luminadental.com" className="hover:text-white transition-colors">care@luminadental.com</a>
              </div>
            </div>
          </div>

          {/* Column 5: Stay connected! */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm font-heading">Stay connected!</h4>
            
            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent border border-gray-700 focus:border-gray-500 rounded-l px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none w-full"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-200 text-gray-900 font-bold px-4 py-2 text-xs rounded-r transition-colors uppercase cursor-pointer"
              >
                Send
              </motion.button>
            </form>

            {subscribed && (
              <p className="text-emerald-400 text-[11px]">Thank you for subscribing!</p>
            )}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-1 text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="mailto:care@vancedental.com"
                className="hover:text-white transition-colors"
                title="Email Us"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <p className="text-[11px] text-gray-500 pt-2">
              Copyright © 2026 Lumina Dental Studio. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};
