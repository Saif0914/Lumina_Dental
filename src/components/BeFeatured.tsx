import React from 'react';
import { motion } from 'motion/react';
import { Quote, CheckCircle2 } from 'lucide-react';

interface BeFeaturedProps {
  onOpenBooking: () => void;
}

export const BeFeatured: React.FC<BeFeaturedProps> = ({ onOpenBooking }) => {
  return (
    <section id="featured" className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real people. Confident smiles. Life-changing care.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every smile has a unique story. Join thousands of patients across Southern California who rediscovered their confidence at Lumina Dental Studio.
          </p>
        </div>

        {/* Bento Grid Showcase of Real Patient Smiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Featured Portrait Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row gap-6 items-center"
          >
            <div className="relative w-full sm:w-56 h-72 rounded-2xl overflow-hidden shadow-md shrink-0">
              <img
                src="/images/patient-smile-woman.jpg"
                alt="Patient smiling brightly after cosmetic whitening"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                @luminadental
              </div>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Patient • 5.0 Rating</span>
                </div>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-cyan-200 absolute -top-4 -left-2 -z-10" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic">
                  “The anxiety I used to have about dentists completely vanished here. From the ceiling Netflix to Dr. Vance’s gentle touch, it was honestly relaxing!”
                </p>
              </div>

              <div>
                <div className="font-bold text-sm text-slate-900">Camilla Vasquez</div>
                <div className="text-xs text-slate-500">Laser Whitening & Clear Aligners • Whittier, CA</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Secondary Patient Story (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-5 bg-gradient-to-br from-cyan-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>5.0 / 5.0 Rating</span>
                </div>
                <span className="text-[11px] font-semibold text-cyan-300">Verified Google Review</span>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed font-medium italic">
                “Dr. Vance designed a full ceramic bridge that looks indistinguishable from natural teeth. My speech, bite, and self-esteem are 100% back.”
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shrink-0">
                <img
                  src="/images/patient-smile-man.jpg"
                  alt="Patient reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-sm text-white">David Miller</div>
                <div className="text-xs text-cyan-200">Restorative Porcelain Dentistry</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Schedule your zero-obligation consultation today.
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Same-day appointments and weekend hours available. Digital 3D smile preview included with every cosmetic consultation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Appointment Online
              </motion.button>
              <a
                href="tel:+15627891935"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/25 transition-colors text-center"
              >
                Call (562) 789-1935
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
