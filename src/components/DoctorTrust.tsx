import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Clock } from 'lucide-react';

interface DoctorTrustProps {
  onOpenBooking: () => void;
}

export const DoctorTrust: React.FC<DoctorTrustProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait & Credential Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient aura glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-200/30 to-teal-100/30 rounded-[36px] blur-2xl -z-10" />

            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 aspect-[3/4] max-w-[440px] mx-auto lg:mx-0 group bg-slate-100">
              <img
                src="/images/doctor-portrait.jpg"
                alt="Dr. Sophia Vance, DDS - Lead Aesthetic & Restorative Clinician"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />

              {/* In-photo doctor identifier */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/30 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                  Clinical Director
                </div>
                <h3 className="text-xl font-bold">Dr. Sophia Vance, DDS, FAGD</h3>
                <p className="text-xs text-slate-300">Fellow, American Academy of Cosmetic Dentistry</p>
              </div>
            </div>

            {/* Floating Accreditation Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center space-x-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Top Doctor 2026</div>
                <div className="text-[10px] text-slate-500">SoCal Healthcare Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Copy, Credentials & Values */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 lg:pl-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.14] tracking-tight font-heading">
              Masters in the art and science of gentle dentistry.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Lumina Dental Studio, treatments are guided by top-tier clinicians trained at top institutions. We invest more than 200 hours annually in continuing advanced cosmetic, microscopic, and laser education to ensure you receive the most refined, minimally-invasive dental care available today.
            </p>

            {/* 3 Academic & Clinical Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-cyan-600 mb-2" />
                <div className="text-xs font-bold text-slate-900">UCLA School of Dentistry</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Doctorate with Clinical Honors</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <Award className="w-5 h-5 text-teal-600 mb-2" />
                <div className="text-xs font-bold text-slate-900">AACD Fellow</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Accredited Aesthetic Master</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600 mb-2" />
                <div className="text-xs font-bold text-slate-900">14+ Years Practice</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Over 15k Happy Patients</div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-semibold tracking-wide rounded-full transition-colors cursor-pointer inline-flex items-center space-x-2"
              >
                <span>Consult with Dr. Vance</span>
                <span>→</span>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
