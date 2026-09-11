import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Heart } from 'lucide-react';

interface FamilyCareProps {
  onOpenBooking: () => void;
}

export const FamilyCare: React.FC<FamilyCareProps> = ({ onOpenBooking }) => {
  return (
    <section id="family-care" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Modern Image with Layered Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Background ambient glow frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100/50 to-teal-50/50 rounded-[36px] blur-xl -z-10" />

            {/* Photo frame */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-200/80 aspect-[4/3] group">
              <img
                src="/images/family-dentist-care.jpg"
                alt="Gentle pediatric and adult dental care for the entire family"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Trust Metric Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xl z-20 max-w-xs"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-teal-600 fill-teal-100" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-tight">15,000+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Smiles Restored with Care</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Serving toddlers, teens, adults, and seniors with personalized warmth since 2012.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Title, Narrative, and Perks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-6 lg:pl-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.14] tracking-tight font-heading">
              Thoughtful dental care for the entire family.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We design every visit to feel uplifting rather than clinical. From a child’s very first gentle checkup to advanced periodontal therapy and cosmetic veneers, our multi-specialty clinicians coordinate your entire household’s care under one roof.
            </p>

            {/* Checklist of Modern Clinical Standards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Pediatric Comfort Protocol:</strong> Gentle introductions, show-tell-do methods, and positive reinforcement for kids.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Preventative Biofilm Management:</strong> Non-abrasive ultrasonic cleanings that protect natural tooth enamel.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Same-Day Family Scheduling:</strong> Coordinate back-to-back appointments so your whole family can be seen in a single visit.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                Schedule Family Checkup
              </motion.button>
              <a
                href="#experience"
                className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold tracking-wide transition-colors"
              >
                Tour Our Studio
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
