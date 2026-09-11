import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ShieldCheck, HeartPulse, CheckCircle2, ArrowRight, Smile, Phone } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (procedure?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 via-teal-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Top Grid: Headline & Interactive Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Content & Quick Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-slate-900 leading-[1.1] tracking-tight font-heading">
                Gentle, unhurried dental care{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">
                  designed around you.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                We know the dentist isn’t most people’s favorite place. That’s why Dr. Vance and our team built Lumina around your comfort: gentle computerized numbing, ceiling screens with noise-canceling headphones, and zero judgment — whether it’s been six months or six years.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-sm tracking-wide transition-colors cursor-pointer flex items-center justify-center space-x-2.5 group"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-200" />
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-semibold text-sm tracking-wide border border-slate-300 hover:border-slate-400 transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>View Treatments</span>
                <span className="text-slate-400">↓</span>
              </motion.a>

              <a
                href="tel:5627891935"
                className="hidden xl:inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-cyan-700 px-3 py-2 transition-colors ml-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-600" />
                <span>(562) 789-1935</span>
              </a>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 border-t border-slate-150">
              {/* Rating without star icons */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>4.9 / 5.0</span>
                </div>
                <span className="font-semibold text-slate-800">Uptown Whittier</span>
                <span className="text-slate-400 font-normal">(1,400+ local patients)</span>
              </div>

              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Most PPO Insurances Welcome</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span className="font-medium text-slate-700">We Actually Run on Time</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column (5 cols): Dynamic Image Showcase with Floating Modern Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/20 via-teal-400/20 to-sky-300/20 rounded-[32px] blur-xl transform -rotate-1 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-white/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)] aspect-[4/5] bg-slate-100 group">
                <img
                  src="/images/hero-woman-smile.jpg"
                  alt="Radiant, natural smile created at Lumina Dental Studio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>

        {/* 3 Core Experience Pillars below hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-16 sm:pt-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => onOpenBooking('Preventative & Hygiene')}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Aesthetic Smile Design</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Hand-crafted porcelain veneers, laser teeth whitening, and precision alignment tailored to your unique facial contours.
            </p>
            <div className="mt-4 text-xs font-bold text-cyan-600 flex items-center space-x-1">
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => onOpenBooking('Family Dental Checkup')}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Comprehensive Family Care</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              From pediatric checkups to adult wellness cleanings. Preventative dentistry that keeps your natural teeth strong for life.
            </p>
            <div className="mt-4 text-xs font-bold text-teal-600 flex items-center space-x-1">
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            onClick={() => onOpenBooking('Painless Dentistry / Anxiety Consultation')}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Anxiety-Free Dentistry</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Feel completely at ease with computer-assisted anesthesia, ceiling Netflix entertainment, and empathetic clinicians.
            </p>
            <div className="mt-4 text-xs font-bold text-emerald-600 flex items-center space-x-1">
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
