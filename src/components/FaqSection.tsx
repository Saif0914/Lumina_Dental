import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Phone, Calendar } from 'lucide-react';
import { FaqItem } from '../types.ts';

const faqItems: FaqItem[] = [
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes! We are in-network with most major PPO dental insurance providers including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Blue Cross Blue Shield. We verify benefits complimentary and file all claims on your behalf.'
  },
  {
    question: 'What if I suffer from dental anxiety or fear?',
    answer: 'Dental anxiety is completely normal, and our studio was intentionally engineered to eliminate it. We offer computerized zero-sting numbing, Bose noise-cancelling headphones, streaming ceiling entertainment, warm aromatherapy blankets, and nitrous oxide sedation upon request.'
  },
  {
    question: 'Do you offer emergency dental appointments?',
    answer: 'Yes, we reserve priority daily emergency slots specifically for urgent dental care—including severe tooth pain, fractured restorations, chipped teeth, and localized infections. Call our front desk at (562) 789-1935 or message us via WhatsApp for immediate triage.'
  },
  {
    question: 'How does the free 3D digital smile simulation work?',
    answer: 'During your cosmetic consultation, we utilize our iTero high-definition optical scanner to capture a micron-precise 3D digital replica of your teeth in under 90 seconds—no messy impression goop. We then render a side-by-side preview of your future smile.'
  },
  {
    question: 'How often should I come in for dental checkups?',
    answer: 'The American Dental Association recommends a comprehensive wellness examination and ultrasonic dental hygiene cleaning every 6 months to prevent enamel decay, monitor periodontal health, and maintain optimal systemic wellness.'
  }
];

interface FaqSectionProps {
  onOpenBooking?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Everything you need to know about our modern treatments, insurance verification, and anxiety-free visits.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-cyan-500/40 shadow-sm ring-1 ring-cyan-500/20' 
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-cyan-100 text-cyan-800 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 sm:px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Have a specific question or insurance inquiry?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our patient care team is available by phone or appointment request.</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-600" />
                <span>Book Appointment</span>
              </button>
            )}
            <a
              href="tel:5627891935"
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span>(562) 789-1935</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
