import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SmileTransformationSlider } from './components/SmileTransformationSlider.tsx';
import { ServicesGrid } from './components/ServicesGrid.tsx';
import { TechnologyExperience } from './components/TechnologyExperience.tsx';
import { FamilyCare } from './components/FamilyCare.tsx';
import { DoctorTrust } from './components/DoctorTrust.tsx';
import { BeFeatured } from './components/BeFeatured.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProcedure, setBookingProcedure] = useState('Routine Cleaning & Exam');

  const handleOpenBooking = (procedure?: string) => {
    if (procedure) setBookingProcedure(procedure);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-cyan-500 selection:text-white font-sans">
      {/* 1. Frosted Glass Modern Header & Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Experience Stream */}
      <main className="flex-1">
        {/* 2. Hero with interactive quick booking bar & floating badges */}
        <Hero
          onOpenBooking={(proc) => handleOpenBooking(proc)}
        />

        {/* 3. Interactive Before & After Smile Transformation Drag Slider */}
        <SmileTransformationSlider
          onOpenBooking={(treatment) => handleOpenBooking(treatment || 'Smile Transformation')}
        />

        {/* 4. Treatments & Clinical Services Suite with category filters */}
        <ServicesGrid onSelectService={(service) => handleOpenBooking(service)} />

        {/* 5. Next-Gen Painless Dental Technology & Boutique Sensory Experience */}
        <TechnologyExperience onOpenBooking={() => handleOpenBooking('Technology Consultation')} />

        {/* 6. Comprehensive Multi-Generational Family Care */}
        <FamilyCare onOpenBooking={() => handleOpenBooking('Family Dental Checkup')} />

        {/* 7. Clinical Board & Doctor Credential Showcase */}
        <DoctorTrust onOpenBooking={() => handleOpenBooking('Consultation with Dr. Vance')} />

        {/* 8. Verified Patient Smile Wall & Community Stories */}
        <BeFeatured onOpenBooking={() => handleOpenBooking('Cosmetic Smile Assessment')} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* 9. Comprehensive Modern Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Appointment Modal with Step Wizard */}
      <BookingModal
        isOpen={isBookingOpen}
        initialProcedure={bookingProcedure}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
