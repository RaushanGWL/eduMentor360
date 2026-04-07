// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

// Phone validation (Indian format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[6-9][0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ''));
}

// Form validation helper
export function validateContactForm(formData: FormData): Record<string, string> {
  const errors: Record<string, string> = {};

  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const phone = (formData.get('phone') as string)?.trim();
  const course = (formData.get('course') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || name.length < 2) {
    errors['name'] = 'Please enter your full name (at least 2 characters).';
  }

  if (!email) {
    errors['email'] = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors['email'] = 'Please enter a valid email address.';
  }

  if (!phone) {
    errors['phone'] = 'Phone number is required.';
  } else if (!isValidPhone(phone)) {
    errors['phone'] = 'Please enter a valid 10-digit Indian mobile number.';
  }

  if (!course) {
    errors['course'] = 'Please select a course or program of interest.';
  }

  if (!message || message.length < 10) {
    errors['message'] = 'Please enter a message (at least 10 characters).';
  }

  return errors;
}

// Newsletter validation
export function validateEmail(email: string): string | null {
  if (!email?.trim()) return 'Email address is required.';
  if (!isValidEmail(email)) return 'Please enter a valid email address.';
  return null;
}

// Smooth scroll to element
export function scrollToSection(href: string): void {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toLocaleString('en-IN');
}

// Get star array for ratings
export function getStarArray(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < rating);
}

// Clamp value between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Course options for contact form
export const COURSE_OPTIONS = [
  { value: '', label: 'Select Course / Program' },
  { value: 'btech', label: 'B.Tech / B.E. Engineering' },
  { value: 'mbbs', label: 'MBBS / Medical' },
  { value: 'bba', label: 'BBA / Business Administration' },
  { value: 'bsc', label: 'B.Sc / Science Programs' },
  { value: 'mba', label: 'MBA / Management' },
  { value: 'mtech', label: 'M.Tech / M.E.' },
  { value: 'ms-abroad', label: 'MS Abroad (USA/UK/Canada)' },
  { value: 'law', label: 'LLB / Law Programs' },
  { value: 'design', label: 'B.Des / Design Programs' },
  { value: 'other', label: 'Other Program' },
];
