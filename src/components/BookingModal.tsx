import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  CalendarDays, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Check, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Headphones, 
  Tv, 
  HeartPulse, 
  Smile, 
  Zap, 
  MapPin, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { AppointmentBooking } from '../types.ts';

interface BookingModalProps {
  isOpen: boolean;
  initialProcedure?: string;
  onClose: () => void;
}

interface ProcedureOption {
  id: string;
  name: string;
  duration: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCEDURES: ProcedureOption[] = [
  {
    id: 'cleaning',
    name: 'Routine Cleaning & Exam',
    duration: '45 mins',
    badge: 'Most Popular',
    description: 'Ultrasonic wellness cleaning, comprehensive digital X-rays, and dentist examination.',
    icon: Smile,
  },
  {
    id: 'whitening',
    name: 'Laser Teeth Whitening',
    duration: '60 mins',
    badge: 'Same-Day Result',
    description: 'In-office clinical laser brightening with desensitizing enamel shield.',
    icon: Zap,
  },
  {
    id: 'veneers',
    name: 'Cosmetic Veneers & Smile Design',
    duration: '60 mins',
    badge: 'Free 3D Scan',
    description: 'Custom porcelain veneers, digital smile simulation, and aesthetic consultation.',
    icon: Smile,
  },
  {
    id: 'painless',
    name: 'Painless Dentistry / Gentle Care',
    duration: '45 mins',
    badge: 'Anxiety-Free',
    description: 'Computer-assisted zero-pain local anesthesia and gentle compassionate approach.',
    icon: HeartPulse,
  },
  {
    id: 'implants',
    name: 'Oral Surgery & Dental Implants',
    duration: '45 mins',
    badge: 'Board Certified',
    description: 'Permanent titanium implant restoration, 3D bone scan, and surgical evaluation.',
    icon: ShieldCheck,
  },
  {
    id: 'emergency',
    name: 'Emergency Toothache Relief',
    duration: 'Immediate',
    badge: 'Priority Slot',
    description: 'Same-day urgent relief for acute toothache, broken restoration, or swelling.',
    icon: Clock,
  },
];

const COMFORT_OPTIONS = [
  { id: 'headphones', label: 'Noise-Cancelling Audio', icon: Headphones },
  { id: 'ceiling_tv', label: 'Ceiling Streaming (Netflix/HBO)', icon: Tv },
  { id: 'gentle_numbing', label: 'Computerized Zero-Sting Numbing', icon: HeartPulse },
  { id: 'doctor_discussion', label: 'Brief Step-by-Step Explanation', icon: CheckCircle2 },
];

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  initialProcedure = 'Routine Cleaning & Exam', 
  onClose 
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<AppointmentBooking>({
    name: '',
    email: '',
    phone: '',
    procedure: initialProcedure,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '10:15 AM',
    isNewPatient: true,
    comfortOptions: ['headphones', 'ceiling_tv'],
    notes: '',
  });
  
  const [useCustomDate, setUseCustomDate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Synchronize when opened with a specific treatment
  useEffect(() => {
    if (initialProcedure) {
      // Find matching or fallback
      const match = PROCEDURES.find(p => 
        p.name.toLowerCase().includes(initialProcedure.toLowerCase()) ||
        initialProcedure.toLowerCase().includes(p.name.toLowerCase())
      );
      setFormData(prev => ({ 
        ...prev, 
        procedure: match ? match.name : initialProcedure 
      }));
    }
  }, [initialProcedure, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Generate the next 5 appointment days
  const upcomingDays = React.useMemo(() => {
    const days: { label: string; dateStr: string; sub: string; isToday?: boolean }[] = [];
    const now = new Date();
    
    // Check if afternoon or evening, start from tomorrow or today
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(now.getDate() + i);
      // skip Sunday (day 0) for dental office
      if (d.getDay() === 0) continue;
      
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const iso = d.toISOString().split('T')[0];
      
      days.push({
        label: i === 1 ? 'Tomorrow' : dayName,
        sub: monthDay,
        dateStr: iso,
      });
      if (days.length >= 4) break;
    }
    return days;
  }, []);

  const timeSlots = {
    morning: ['9:00 AM', '10:15 AM', '11:30 AM'],
    afternoon: ['1:15 PM', '2:30 PM', '3:45 PM', '5:00 PM'],
  };

  const handleToggleComfort = (id: string) => {
    setFormData(prev => {
      const current = prev.comfortOptions || [];
      const updated = current.includes(id) 
        ? current.filter(item => item !== id)
        : [...current, id];
      return { ...prev, comfortOptions: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  // Google Calendar URL Generator
  const getGoogleCalendarUrl = () => {
    const title = `Lumina Dental Appointment: ${formData.procedure}`;
    const details = `Appointment for ${formData.name} (${formData.phone}). Treatment: ${formData.procedure}. Location: Lumina Dental Studio, 13501 Whittier Blvd, Whittier, CA. Please arrive 10 minutes early.`;
    const location = '13501 Whittier Blvd, Whittier, CA 90605';
    
    // Simple start/end format
    const cleanDate = formData.date.replace(/-/g, '');
    const startIso = `${cleanDate}T170000Z`;
    const endIso = `${cleanDate}T180000Z`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200/90 relative my-auto z-10 overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-cyan-600/20">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Lumina Dental Studio</span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Online Booking</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {submitted ? 'Booking Confirmation' : 'Schedule Your Appointment'}
                  </h3>
                </div>
              </div>

              <button 
                onClick={onClose} 
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress Bar (when not submitted) */}
            {!submitted && (
              <div className="px-6 sm:px-8 py-3 bg-white border-b border-slate-100 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                      step === 1 ? 'text-cyan-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      step === 1 ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      1
                    </span>
                    <span>Service & Timing</span>
                  </button>

                  <span className="text-slate-300">/</span>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                      step === 2 ? 'text-cyan-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      step === 2 ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      2
                    </span>
                    <span>Patient Details</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 hidden sm:block">
                  Step {step} of 2
                </div>
              </div>
            )}

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {submitted ? (
                /* Confirmed Success State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 uppercase tracking-wider">
                      Appointment Request Confirmed
                    </span>
                    <h4 className="text-2xl font-extrabold text-slate-900 mt-2">
                      We Look Forward to Seeing You!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our patient concierge will send an SMS confirmation to <span className="font-bold text-slate-900">{formData.phone}</span> within 15 minutes.
                    </p>
                  </div>

                  {/* Summary Ticket Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left max-w-md mx-auto space-y-3.5 shadow-sm">
                    <div className="flex items-start justify-between border-b border-slate-200/70 pb-3">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Selected Treatment</div>
                        <div className="text-sm font-extrabold text-slate-900">{formData.procedure}</div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold">
                        Confirmed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs border-b border-slate-200/70 pb-3">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Date</div>
                        <div className="font-bold text-slate-800 flex items-center space-x-1 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{formData.date}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Preferred Time</div>
                        <div className="font-bold text-slate-800 flex items-center space-x-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{formData.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-xs text-slate-600">
                      <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800">Lumina Dental Studio</span>
                        <div className="text-slate-500 text-[11px]">13501 Whittier Blvd, Whittier, CA 90605</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Patient Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Add to Google Calendar</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    <a 
                      href={`https://wa.me/15627891935?text=${encodeURIComponent(`Hello Lumina Dental! I just booked an appointment online for ${formData.procedure} on ${formData.date} at ${formData.time} under the name ${formData.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button 
                      onClick={handleResetAndClose} 
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Multi-step Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      {/* 1. Treatment Selector */}
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            1. Select Treatment
                          </label>
                          <span className="text-[11px] text-cyan-700 font-semibold">
                            {formData.procedure}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {PROCEDURES.map((proc) => {
                            const isSelected = formData.procedure === proc.name;
                            const IconComponent = proc.icon;

                            return (
                              <div
                                key={proc.id}
                                onClick={() => setFormData({ ...formData, procedure: proc.name })}
                                className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between relative group ${
                                  isSelected 
                                    ? 'bg-cyan-50/70 border-cyan-500 ring-2 ring-cyan-500/20' 
                                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                                }`}
                              >
                                <div className="flex items-start justify-between mb-1.5">
                                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                    isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:text-cyan-700'
                                  }`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    isSelected 
                                      ? 'bg-cyan-200/80 text-cyan-900' 
                                      : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    {proc.badge}
                                  </span>
                                </div>

                                <div>
                                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                                    {proc.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                                    {proc.description}
                                  </div>
                                </div>

                                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                  <span className="text-slate-400 font-medium">Duration</span>
                                  <span className="font-bold text-slate-700">{proc.duration}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Date Selection */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                            <span>2. Preferred Date</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => setUseCustomDate(!useCustomDate)}
                            className="text-[11px] font-semibold text-cyan-700 hover:text-cyan-800 underline cursor-pointer"
                          >
                            {useCustomDate ? 'Show Quick Dates' : 'Pick Specific Calendar Date'}
                          </button>
                        </div>

                        {useCustomDate ? (
                          <div className="relative">
                            <input 
                              type="date" 
                              required 
                              min={new Date().toISOString().split('T')[0]}
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {upcomingDays.map((d) => {
                              const isSelected = formData.date === d.dateStr;
                              return (
                                <button
                                  key={d.dateStr}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, date: d.dateStr })}
                                  className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-cyan-600 text-white border-cyan-600'
                                      : 'bg-white border-slate-200 text-slate-800 hover:border-cyan-300 hover:bg-slate-50'
                                  }`}
                                >
                                  <div className="text-xs font-bold leading-tight">{d.label}</div>
                                  <div className={`text-[11px] ${isSelected ? 'text-cyan-100' : 'text-slate-500'}`}>
                                    {d.sub}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* 3. Time Selection */}
                      <div>
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-600" />
                          <span>3. Preferred Time Slot</span>
                        </label>

                        <div className="space-y-3">
                          {/* Morning */}
                          <div>
                            <div className="text-[11px] uppercase font-bold text-slate-400 mb-1.5">Morning</div>
                            <div className="flex flex-wrap gap-2">
                              {timeSlots.morning.map((t) => {
                                const isSelected = formData.time === t;
                                return (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, time: t })}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                                      isSelected
                                        ? 'bg-cyan-600 text-white border-cyan-600'
                                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                                  >
                                    {t}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Afternoon */}
                          <div>
                            <div className="text-[11px] uppercase font-bold text-slate-400 mb-1.5">Afternoon</div>
                            <div className="flex flex-wrap gap-2">
                              {timeSlots.afternoon.map((t) => {
                                const isSelected = formData.time === t;
                                return (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, time: t })}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                                      isSelected
                                        ? 'bg-cyan-600 text-white border-cyan-600'
                                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                                  >
                                    {t}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 1 CTA */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          Selected: <span className="font-bold text-slate-800">{formData.date} at {formData.time}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer group"
                        >
                          <span>Continue to Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-5"
                    >
                      {/* Summary Banner */}
                      <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-between">
                        <div className="text-xs">
                          <span className="font-bold text-slate-900">{formData.procedure}</span>
                          <div className="text-cyan-800 font-medium">{formData.date} • {formData.time}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-xs font-bold text-cyan-800 hover:text-cyan-950 underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>

                      {/* Patient Status Toggle */}
                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Are you a new patient?
                        </label>
                        <div className="grid grid-cols-2 gap-2 max-w-sm">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, isNewPatient: true })}
                            className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                              formData.isNewPatient 
                                ? 'bg-cyan-600 text-white border-cyan-600' 
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            ✓ Yes, First Visit
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, isNewPatient: false })}
                            className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                              !formData.isNewPatient 
                                ? 'bg-cyan-600 text-white border-cyan-600' 
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            Returning Patient
                          </button>
                        </div>
                      </div>

                      {/* Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Your Full Name *
                          </label>
                          <div className="relative">
                            <input 
                              type="text" 
                              required 
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Jennifer Lopez" 
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            />
                            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Mobile Phone (for SMS confirm) *
                          </label>
                          <div className="relative">
                            <input 
                              type="tel" 
                              required 
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="(562) 789-1935" 
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            />
                            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com" 
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        </div>
                      </div>

                      {/* Sensory Comfort Preferences */}
                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Personal Comfort Amenities (Optional)
                        </label>
                        <p className="text-[11px] text-slate-500 mb-2">Select complimentary comforts you’d like ready for your suite:</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {COMFORT_OPTIONS.map((opt) => {
                            const isChecked = formData.comfortOptions?.includes(opt.id);
                            const IconC = opt.icon;

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleToggleComfort(opt.id)}
                                className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-2 text-left transition-colors cursor-pointer ${
                                  isChecked
                                    ? 'bg-teal-50 text-teal-900 border-teal-500'
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${
                                  isChecked ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-400'
                                }`}>
                                  {isChecked ? '✓' : ''}
                                </div>
                                <IconC className={`w-3.5 h-3.5 shrink-0 ${isChecked ? 'text-teal-700' : 'text-slate-400'}`} />
                                <span className="truncate">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Optional Notes */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Notes / Specific Concerns (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes || ''}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="e.g. Sensitive lower molar, haven't been to dentist in 2 years, slight anxiety..."
                          className="w-full px-4 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        />
                      </div>

                      {/* Navigation & Submit Buttons */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
                        >
                          {loading ? (
                            <span>Reserving Your Slot...</span>
                          ) : (
                            <>
                              <Calendar className="w-4 h-4 text-cyan-300" />
                              <span>Confirm Appointment Request</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>HIPAA Compliant & Encrypted • No cancellation fees up to 24h prior</span>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
