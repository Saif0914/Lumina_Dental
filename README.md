# Lumina Dental Studio

![Lumina Dental Studio](./Lumina_Dental.png)

A modern, high-performance web application for **Lumina Dental Studio**, delivering a patient-first dental experience with interactive smile transformations, multi-step appointment scheduling, boutique sensory comfort amenities, and multi-channel concierge communication.

---

## 🌟 Key Features

### 1. Interactive Smile Transformation Slider
- **Split Comparison Drag Engine**: Allows patients to slide smoothly between pre-treatment and post-treatment clinical results.
- **Clinical Case Notes**: Highlights real restorative and cosmetic porcelain veneer case outcomes.

### 2. Streamlined Appointment Booking Wizard (`BookingModal`)
- **Step 1 — Treatment & Timing**:
  - Visual procedure picker with duration badges (Routine Cleaning, Laser Whitening, Cosmetic Veneers, Implants, Emergency Care).
  - Quick-date day selector chips ("Tomorrow", "Wed", etc.) or precise calendar date input.
  - Morning and afternoon time slot selection.
- **Step 2 — Patient Details & Sensory Comfort Preferences**:
  - First-time vs. returning patient toggle.
  - Contact inputs with SMS confirmation notice.
  - Complimentary sensory amenity preferences (Bose noise-cancelling headphones, ceiling Netflix/HBO streaming, computerized zero-sting numbing, gentle explanation mode).
- **Confirmation Ticket**:
  - Clean summary card of reserved treatment, preferred time, and clinic address.
  - One-click **Add to Google Calendar** integration.
  - Instant **Chat on WhatsApp** pre-populated booking message.

### 3. Comprehensive Treatment Suite (`ServicesGrid`)
- **Category-Based Filtering**: Easily switch between All Services, Preventive & Hygiene, Cosmetic Dentistry, Restorative, and Oral Surgery.
- **Transparent Details**: Procedure descriptions, expected appointment lengths, and insurance coverage badges.

### 4. Boutique Sensory & Painless Dental Tech (`TechnologyExperience`)
- **Modern Equipment**: Highlighting 3D intraoral digital impressions (no goop), computerized local anesthesia, and low-radiation digital radiography.
- **Dental Anxiety Management**: Spa-inspired amenities engineered to soothe nervous patients.

### 5. Multi-Generational Family Care (`FamilyCare`)
- Pediatric dentistry room with gentle gamified checkups.
- Adult cosmetic & preventive maintenance.
- Senior restorative implantology and periodontal therapy.

### 6. Clinical Board & Doctor Credential Showcase (`DoctorTrust`)
- Verified profiles for Dr. Marcus Vance, DDS (UCLA School of Dentistry), Dr. Elena Rostova, DDS, MS (Columbia University), and Dr. Sarah Chen, DDS.
- Board certifications, continuing education, and hospital affiliations.

### 7. Patient Stories & Verified Reviews (`BeFeatured`)
- Verified patient smile gallery and authentic Google/Yelp reviews with verified patient badges.
- Community smile story submission workflow.

### 8. Frequently Asked Questions (`FaqSection`)
- Accessible accordion answering patient inquiries about PPO dental insurance, anxiety management, dental emergencies, and 3D digital smile simulations.

### 9. Multi-Channel Patient Concierge (`ChatWidget`)
- Floating concierge supporting 4 quick communication channels:
  - **Live Studio Assistant**: Interactive Q&A chat.
  - **WhatsApp Direct**: Direct chat with the Whittier reception desk with custom template messages.
  - **Facebook Messenger**: Social consultation.
  - **Email Support**: Direct inbox inquiry form.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion (`motion/react`)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── index.html                  # HTML entry point with metadata & web fonts
├── metadata.json               # Applet metadata and permissions
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
│
├── public/                     # Static public assets
│   ├── favicon.ico             # Favicon
│   └── images/                 # Optimized clinic photography & SVG vectors
│
└── src/                        # Application source code
    ├── main.tsx                # React DOM entry point
    ├── App.tsx                 # Main layout and section orchestrator
    ├── index.css               # Global Tailwind CSS imports & theme rules
    ├── types.ts                # TypeScript interfaces and data types
    └── components/             # Reusable UI component modules
        ├── Header.tsx          # Frosted glass navbar & mobile drawer
        ├── Hero.tsx            # Studio introduction & primary CTAs
        ├── SmileTransformationSlider.tsx # Interactive before & after drag slider
        ├── ServicesGrid.tsx    # Filterable treatment cards
        ├── TechnologyExperience.tsx      # Sensory suite & painless technology
        ├── FamilyCare.tsx      # Pediatric, adult, and senior dental care
        ├── DoctorTrust.tsx     # Clinician credentials & certifications
        ├── BeFeatured.tsx      # Verified smile wall & patient reviews
        ├── FaqSection.tsx      # Expandable patient FAQ accordion
        ├── BookingModal.tsx    # 2-step appointment booking wizard
        ├── ChatWidget.tsx      # Multi-channel patient concierge
        ├── Footer.tsx          # Studio directory, hours, location & legal
        └── Logo.tsx            # SVG brand mark & typography
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📍 Clinic Information

- **Studio Name**: Lumina Dental Studio
- **Address**: 13501 Whittier Blvd, Whittier, CA 90605
- **Phone**: (562) 789-1935
- **Hours**: Monday – Saturday: 8:00 AM – 6:00 PM (Emergency slots available daily)
- **Specialties**: Cosmetic Dentistry, Painless Dentistry, Family Preventive Care, Dental Implants, Teeth Whitening
