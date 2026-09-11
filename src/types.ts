export interface DentalService {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  features: string[];
  buttonText: string;
  category: 'cosmetic' | 'restorative' | 'general' | 'surgical';
}

export interface Doctor {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  comment: string;
  initials: string;
  badgeColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppointmentBooking {
  name: string;
  email: string;
  phone: string;
  procedure: string;
  date: string;
  time: string;
  isNewPatient?: boolean;
  comfortOptions?: string[];
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
