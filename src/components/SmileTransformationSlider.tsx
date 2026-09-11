import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  patient: string;
  treatment: string;
  timeframe: string;
  quote: string;
  beforeImg: string;
  afterImg: string;
  shadeImprovement: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'case-1',
    patient: 'Elena R., 29',
    treatment: 'Laser Whitening & Micro-Veneers',
    timeframe: '2 Sessions (10 Days)',
    quote: '“I used to hide my smile in every photo. Now I literally cannot stop smiling. Completely pain-free!”',
    beforeImg: '/images/patient-smile-man.jpg',
    afterImg: '/images/hero-woman-smile.jpg',
    shadeImprovement: '8 Shades Lighter',
  },
  {
    id: 'case-2',
    patient: 'Marcus T., 34',
    treatment: 'Full Aesthetic Smile Restoration',
    timeframe: '3 Weeks',
    quote: '“The 3D digital preview showed me exactly what my teeth would look like before we even started.”',
    beforeImg: '/images/patient-smile-woman.jpg',
    afterImg: '/images/radiant_smile_care_1788793487884.jpg',
    shadeImprovement: 'Complete Realignment',
  },
];

interface SmileTransformationSliderProps {
  onOpenBooking: (treatment?: string) => void;
}

export const SmileTransformationSlider: React.FC<SmileTransformationSliderProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            See the transformation with your own eyes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Drag the interactive slider below to view real patient before & after smile makeovers completed at Lumina Dental Studio.
          </motion.p>

          {/* Case Toggle Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer border ${
                  activeCaseIndex === idx
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {c.patient} • {c.treatment.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          
          {/* Slider Canvas (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200/80 shadow-inner group"
            >
              {/* "AFTER" Image (Full background) */}
              <img
                src={activeCase.afterImg}
                alt="After smile transformation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                draggable={false}
              />

              {/* "BEFORE" Image (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeCase.beforeImg}
                  alt="Before smile transformation"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{
                    width: containerRef.current?.clientWidth || '100%',
                    filter: 'grayscale(20%) contrast(95%) brightness(95%)',
                  }}
                  draggable={false}
                />
                
                {/* Before Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/20">
                  Initial State
                </div>
              </div>

              {/* After Badge */}
              <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/20">
                Lumina Result
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute inset-y-0 z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="h-full w-[3px] bg-white relative -left-[1.5px]">
                  {/* Central Draggable Circle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center border-2 border-slate-900 cursor-grab active:cursor-grabbing group-hover:scale-110 transition-transform">
                    <ArrowLeftRight className="w-4 h-4 text-slate-900" />
                  </div>
                </div>
              </div>

              {/* Subtle instruction banner on bottom */}
              <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                <span className="inline-block bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/10">
                  ↔ Drag slider left or right to compare
                </span>
              </div>
            </div>
          </div>

          {/* Details & Testimonial Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                Verified Smile Case Study
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {activeCase.treatment}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Patient: <span className="font-semibold text-slate-700">{activeCase.patient}</span> • Treatment Duration: <span className="font-semibold text-slate-700">{activeCase.timeframe}</span>
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-100">
                <div className="text-xl font-extrabold text-cyan-900">{activeCase.shadeImprovement}</div>
                <div className="text-xs text-cyan-700 font-medium mt-0.5">Clinical Metric</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="text-xl font-extrabold text-emerald-900">100% Pain-Free</div>
                <div className="text-xs text-emerald-700 font-medium mt-0.5">Laser Assisted</div>
              </div>
            </div>

            {/* Patient Quote */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-slate-700 text-sm italic relative leading-relaxed">
              {activeCase.quote}
            </div>

            {/* Checkpoints */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom CAD/CAM digital preview before any treatment starts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero-sensitivity formulation with post-procedure enamel remineralization</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Natural porcelain shading matched to your facial symmetry</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking(activeCase.treatment)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer inline-flex items-center justify-center space-x-2"
              >
                <span>Book a Smile Consultation</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
