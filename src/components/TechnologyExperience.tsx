import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Headphones, Zap } from 'lucide-react';

interface TechPillar {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  perks: string[];
}

const PILLARS: TechPillar[] = [
  {
    id: 'scanning',
    title: '3D Optical Digital Scanning',
    description: 'Our high-definition 3D scanners capture 6,000 frames per second to construct a photorealistic 3D map of your teeth and bite in under 90 seconds—with zero gag reflex or mess.',
    metric: '90 Sec',
    metricLabel: 'Full Arch Digital Scan',
    icon: Cpu,
    image: '/images/modern_dental_studio_1788793454621.jpg',
    perks: ['Zero physical impression putty', 'Instant simulation of tooth alignment', 'Sub-millimeter margin accuracy'],
  },
  {
    id: 'painless',
    title: 'Computer-Controlled Painless Delivery',
    description: 'By regulating anesthesia delivery at a micro-molecular rate below the human neural pain threshold, sensation is localized without the dreaded stinging pinch or lingering facial numbness.',
    metric: '99.4%',
    metricLabel: 'Report Zero Discomfort',
    icon: Zap,
    image: '/images/dentist_consultation_1788793472164.jpg',
    perks: ['Needle-less pressure application', 'Targeted single-tooth numbing', 'No numb lips or slurred speech after'],
  },
  {
    id: 'spa-comfort',
    title: 'Boutique Spa & Sensory Comfort',
    description: 'Sink into ergonomic memory foam treatment suites. Enjoy custom ceiling-mounted displays streaming your favorite shows, wireless noise-cancelling headphones, and warm lavender towels.',
    metric: '99.8%',
    metricLabel: 'Patient Comfort Standard',
    icon: Headphones,
    image: '/images/cover-bg.jpg',
    perks: ['Bose noise-canceling headsets', 'Ceiling-mounted Netflix 4K screens', 'Warm scented aromatherapy towels'],
  },
];

interface TechnologyExperienceProps {
  onOpenBooking: () => void;
}

export const TechnologyExperience: React.FC<TechnologyExperienceProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = PILLARS[activeTab];

  return (
    <section id="experience" className="py-24 bg-[#09121f] text-white relative overflow-hidden">
      {/* Dynamic ambient backdrops */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-slate-800">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Clinical precision meets sensory relaxation.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            We replaced outdated drills and uncomfortable waiting rooms with gentle laser dentistry, 3D diagnostics, and calming hospitality.
          </p>
        </div>

        {/* Interactive Tabs Bar */}
        <div className="flex items-center gap-3 overflow-x-auto py-6 custom-scroll">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-3 px-5 py-3 rounded-2xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-cyan-600 text-white border-cyan-500'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          
          {/* Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                {/* Metric pill */}
                <div className="flex items-baseline space-x-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-sm">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                    {current.metric}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {current.metricLabel}
                  </div>
                </div>

                {/* Key Perks List */}
                <div className="space-y-2.5 pt-2">
                  {current.perks.map((perk, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/30">
                        ✓
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Booking Button */}
                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-900 text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer inline-flex items-center space-x-2"
                  >
                    <span>Tour the Sensory Suite</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Showcase (6 cols) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl h-[380px] sm:h-[460px] group"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating clinical badge on image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Hospital-Grade Sterilization</div>
                      <div className="text-[11px] text-slate-400">Class B Medical Autoclave Certified</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                    Active Clean Air
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
