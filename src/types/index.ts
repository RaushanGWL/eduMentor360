// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Services
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

// Stats
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Featured Colleges
export interface College {
  id: number;
  name: string;
  shortName: string;
  image: string;
  description: string;
  programs: string[];
  ranking: string;
  location: string;
  badge: string;
  imageSource?: string;
  established: number;
}

// Process Steps
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Why Choose Us
export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

// Testimonials
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  college: string;
  avatar: string;
  avatarBg: string;
  rating: number;
  quote: string;
}

// FAQ
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Blog
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  categoryColor: string;
}

// Form types
export interface FormState {
  success: boolean;
  message: string;
  errors: Record<string, string>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export interface NewsletterFormState {
  success: boolean;
  message: string;
  email: string;
}

// Animated counter props
export interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

// Component prop types
export interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
