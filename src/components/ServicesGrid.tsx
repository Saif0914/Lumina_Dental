import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  CheckCircle2, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  category?: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  insuranceNotice: string;
  highlights: string[];
  image: string;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'cosmetic-whitening',
    category: 'cosmetic',
    title: 'Laser In-Office Teeth Whitening',
    tagline: 'Up to 8 shades lighter in 45 minutes.',
    description: 'Advanced dental laser activation lifts stubborn coffee, wine, and age stains without painful tooth enamel sensitivity.',
    duration: '45 mins',
    insuranceNotice: 'HSA / FSA Eligible',
    highlights: ['Zero-sensitivity remineralizing gel', 'Immediate same-day results', 'Custom take-home touch-up kit included'],
    image: '/images/radiant_smile_care_1788793487884.jpg',
  },
  {
    id: 'cosmetic-veneers',
    category: 'cosmetic',
    title: 'Porcelain Veneers & Smile Sculpting',
    tagline: 'Hand-crafted ceramic precision.',
    description: 'Ultra-thin biocompatible porcelain laminates designed to correct chipping, gap spacing, and irregular tooth morphology with natural luminosity.',
    duration: '2-3 visits',
    insuranceNotice: '0% Interest Financing Available',
    highlights: ['3D digital mock-up preview first', 'Minimally-invasive prep', 'Stain-resistant laboratory porcelain'],
    image: '/images/patient-smile-woman.jpg',
  },
  {
    id: 'preventive-checkup',
    category: 'preventive',
    title: 'Comprehensive Wellness Exam & Cleaning',
    tagline: 'Precision ultrasonic prophylaxis.',
    description: 'Gentle ultrasonic plaque removal, periodontal probing, low-radiation digital x-rays, and oral cancer wellness screenings.',
    duration: '60 mins',
    insuranceNotice: '100% PPO Insurance Covered',
    highlights: ['Airflow ultrasonic biofilm polishing', 'High-res intraoral photo walkthrough', 'Complimentary fluoridated remineralization'],
    image: '/images/dentist_consultation_1788793472164.jpg',
  },
  {
    id: 'restorative-implants',
    category: 'restorative',
    title: 'Computer-Guided Dental Implants',
    tagline: 'Permanent, lifelong tooth replacement.',
    description: 'Titanium root replacement positioned with 3D CBCT surgical guides for 99.8% precision, stability, and aesthetic gum emergence.',
    duration: 'Single surgery visit',
    insuranceNotice: 'Major Insurance & Payment Plans',
    highlights: ['3D virtual bone mapping', 'Natural zirconia ceramic crowns', 'Preserves adjacent tooth structure'],
    image: '/images/modern_dental_studio_1788793454621.jpg',
  },
  {
    id: 'ortho-aligners',
    category: 'cosmetic',
    title: 'Clear Invisible Aligners',
    tagline: 'Straighten your smile discreetly.',
    description: 'Custom-molded transparent orthodontic aligners that gently reposition your teeth without unsightly wires, brackets, or dietary restrictions.',
    duration: '4 - 9 months',
    insuranceNotice: 'Orthodontic PPO Benefits Apply',
    highlights: ['Removable for eating and flossing', 'Virtual check-ins via smartphone app', 'Accelerated tooth movement system'],
    image: '/images/patient-smile-man.jpg',
  },
  {
    id: 'emergency-care',
    category: 'emergency',
    title: 'Same-Day Urgent Emergency Care',
    tagline: 'Fast relief when pain cannot wait.',
    description: 'Immediate appointment slots dedicated daily for severe toothaches, chipped or knocked-out teeth, lost crowns, or acute swelling.',
    duration: 'Immediate Priority',
    insuranceNotice: 'Direct Emergency Claim Filing',
    highlights: ['7-days a week priority access', 'Rapid pain cessation protocols', 'Same-day emergency repairs'],
    image: '/images/family-dentist-care.jpg',
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  const services = ALL_SERVICES;

  // Responsive container width tracking
  useEffect(() => {
    const updateSize = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;
  const cardWidth = isMobile ? Math.min(320, containerWidth - 56) : isTablet ? 360 : 400;
  const cardGap = isMobile ? 16 : 28;
  const step = cardWidth + cardGap;
  const centerOffset = (containerWidth - cardWidth) / 2;
  const currentX = centerOffset - activeIndex * step;

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(services.length - 1, prev + 1));
  };

  return (
    <section id="services" className="py-24 bg-[#fafbfc] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Centered Header: Title & Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-14 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Curated dental treatments for every stage of your smile.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of specialized cosmetic, restorative, and family dental procedures.
          </p>
        </div>

        {/* Side-by-Side Scrollable Carousel */}
        <div 
          ref={carouselRef}
          className="relative w-full overflow-hidden select-none py-4"
        >
          {/* Floating Left Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous treatment card"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 disabled:opacity-25 disabled:pointer-events-none border border-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === services.length - 1}
            aria-label="Next treatment card"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 disabled:opacity-25 disabled:pointer-events-none border border-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Motion Track */}
          <motion.div
            drag="x"
            dragConstraints={{
              left: centerOffset - (services.length - 1) * step,
              right: centerOffset,
            }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40 || info.velocity.x < -200) {
                handleNext();
              } else if (info.offset.x > 40 || info.velocity.x > 200) {
                handlePrev();
              }
            }}
            animate={{ x: currentX }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="flex items-stretch cursor-grab active:cursor-grabbing py-6"
            style={{ gap: `${cardGap}px` }}
          >
            {services.map((service, index) => {
              const offset = index - activeIndex;
              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => {
                    if (index !== activeIndex) {
                      setActiveIndex(index);
                    }
                  }}
                  animate={{
                    scale: isActive ? 1.02 : isAdjacent ? 0.92 : 0.85,
                    opacity: isActive ? 1 : isAdjacent ? 0.65 : 0.35,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{ width: cardWidth, minWidth: cardWidth }}
                  className={`relative bg-white rounded-3xl overflow-hidden border select-none shrink-0 flex flex-col justify-between transition-colors ${
                    isActive
                      ? 'border-slate-800 shadow-2xl z-20 cursor-default'
                      : 'border-slate-200/90 shadow-sm z-10 cursor-pointer hover:opacity-85'
                  }`}
                >
                  {/* Top Image Banner with Overlaid Badges */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        <Clock className="w-3 h-3 text-cyan-300" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="text-[10px] font-bold text-cyan-200 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                        {service.insuranceNotice}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug flex items-start justify-between">
                        <span>{service.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0 ml-2 mt-1" />
                      </h3>

                      <p className="text-xs font-semibold text-cyan-700 mt-1">
                        {service.tagline}
                      </p>

                      <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                        {service.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        className={`text-xs font-bold transition-colors cursor-pointer ${
                          isActive ? 'text-cyan-700 hover:text-cyan-800' : 'text-slate-700'
                        }`}
                      >
                        Request Treatment Slot
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        aria-label={`Select ${service.title}`}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors cursor-pointer ${
                          isActive 
                            ? 'bg-slate-900 text-white hover:bg-cyan-600' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Pagination & Indicator Controls */}
        <div className="mt-6 flex items-center justify-center">
          {/* Interactive Dot Indicators */}
          <div className="flex items-center space-x-2">
            {services.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Jump to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
