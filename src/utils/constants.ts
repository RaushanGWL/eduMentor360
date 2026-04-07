import type {
  NavLink, Service, Stat, College, ProcessStep,
  Feature, Testimonial, FAQ, BlogPost,
} from '../types';

import srmImg from '../assets/srm.png';
import vitImg from '../assets/vit.png';
import rvceImg from '../assets/rvce.png';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '/about' },
  { label: 'Top Colleges', href: '/colleges' },
  { label: 'Blog', href: '#blog' },
  { label: "FAQ's", href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export const SERVICES: Service[] = [
  { id: 1, icon: 'GraduationCap', title: 'Career Counseling', description: 'Personalized one-on-one sessions with expert counselors to map out your ideal career trajectory based on your aptitude, interests, and market trends.', color: 'text-primary-600', bgColor: 'bg-primary-50' },
  { id: 2, icon: 'Building2', title: 'University Admissions', description: 'End-to-end support for university applications—from shortlisting colleges to preparing your application package for maximum success rates.', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 3, icon: 'Award', title: 'Scholarship Guidance', description: 'Identify and apply for scholarships that match your academic profile, significantly reducing your financial burden for higher education.', color: 'text-green-600', bgColor: 'bg-green-50' },
  { id: 4, icon: 'Globe', title: 'Study Abroad', description: 'Explore international education pathways with expert guidance on universities in USA, UK, Canada, Australia, and Europe.', color: 'text-secondary-500', bgColor: 'bg-orange-50' },
  { id: 5, icon: 'BookOpen', title: 'Course Selection', description: 'Data-driven course recommendations aligned with your career goals, academic background, and future industry demands.', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { id: 6, icon: 'TrendingUp', title: 'Profile Building', description: 'Strengthen your academic profile with strategic extracurriculars, certifications, and projects to stand out from the competition.', color: 'text-teal-600', bgColor: 'bg-teal-50' },
];

export const STATS: Stat[] = [
  { value: 8500, suffix: '+', label: 'Students Guided', icon: 'Users' },
  { value: 350, suffix: '+', label: 'Partner Institutions', icon: 'Building2' },
  { value: 97, suffix: '%', label: 'Success Rate', icon: 'TrendingUp' },
  { value: 12, suffix: '+', label: 'Years Experience', icon: 'Award' },
];

export const FEATURED_COLLEGES: College[] = [
  { 
    id: 1, 
    name: 'SRM Institute of Science and Technology (SRMIST)', 
    shortName: 'SRMIST', 
    image: srmImg, 
    imageSource: 'Image Source : @ SRM Institute of Science and Technology Website',
    description: 'SRM Institute of Science and Technology offering a wide range of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences.', 
    programs: ['B.Tech', 'MBA', 'Medicine'], 
    ranking: 'Top Ranked', 
    location: 'Chennai', 
    badge: 'Direct Admission', 
    established: 1985 
  },
  { 
    id: 2, 
    name: 'Vellore Institute of Technology (VIT)', 
    shortName: 'VIT', 
    image: vitImg, 
    imageSource: 'Image Source : @ Vellore Institute of Technology (VIT) Website',
    description: 'VIT Group of Institutions offer 71 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research programmes and 2 M.Tech Industrial Programmes. In addition, full-time Ph.D. in Engineering and Management disciplines, Ph.D. in Science and Languages and Direct Ph.D. programmes in engineering disciplines are offered.', 
    programs: ['B.Tech', 'M.Tech', 'Ph.D'], 
    ranking: 'Top Ranked', 
    location: 'Vellore', 
    badge: 'Direct Admission', 
    established: 1984 
  },
  { 
    id: 3, 
    name: 'R. V. College of Engineering (RVCE)', 
    shortName: 'RVCE', 
    image: rvceImg, 
    imageSource: 'Image Source : @ R. V. College of Engineering Website',
    description: 'R.V. College of Engineering (RVCE) is a premier institute offering high-quality technical education. Established in 1963, it is known for its excellent infrastructure, highly qualified faculty, and strong placement records across various engineering disciplines.', 
    programs: ['B.E.', 'M.Tech', 'MCA'], 
    ranking: 'Top Ranked', 
    location: 'Bangalore', 
    badge: 'Direct Admission', 
    established: 1963 
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: 'Free Consultation', description: 'Book a no-obligation session with our expert counselors. Discuss your academic background, interests, and career aspirations.', icon: 'PhoneCall' },
  { step: 2, title: 'Profile Assessment', description: 'Our experts analyze your academic records, strengths, and goals to create a personalized roadmap for your educational journey.', icon: 'ClipboardList' },
  { step: 3, title: 'College Shortlisting', description: 'We curate a targeted list of universities and programs that perfectly match your profile, preferences, and career objectives.', icon: 'Search' },
  { step: 4, title: 'Application Support', description: 'Get hands-on help with application forms, essays, recommendation letters, and all documentation required for admission.', icon: 'FileText' },
  { step: 5, title: 'Admission Confirmed', description: 'We guide you through the final stages—fee payment, enrollment, and pre-arrival preparation for a smooth transition.', icon: 'CheckCircle' },
];

export const WHY_CHOOSE_US: Feature[] = [
  { id: 1, icon: 'ShieldCheck', title: 'Verified Admission Pathways', description: 'We maintain direct partnerships with 350+ universities to secure genuine, confirmed admission offers—no false promises, only results.', color: 'text-primary-600', bgColor: 'bg-primary-50' },
  { id: 2, icon: 'Users', title: 'Expert Counselor Team', description: 'Our counselors bring 10+ years of experience and deep domain expertise across engineering, medicine, management, and international education.', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 3, icon: 'HandHeart', title: 'Personalized Approach', description: 'No cookie-cutter solutions. We create custom admission strategies tailored to your unique academic profile and aspirations.', color: 'text-green-600', bgColor: 'bg-green-50' },
  { id: 4, icon: 'Headphones', title: '24/7 Admission Support', description: 'From your first consultation to enrollment day, we provide round-the-clock support for documentation, fees, and queries.', color: 'text-secondary-500', bgColor: 'bg-orange-50' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Arjun Patel', role: 'B.Tech CSE Student', college: 'BITS Pilani', avatar: 'AP', avatarBg: 'bg-primary-600', rating: 5, quote: 'Edu Mentor 360 completely transformed my college admission journey. Their expert counselors helped me identify my strengths and guided me to the perfect engineering program. I\'m now pursuing my dream course!' },
  { id: 2, name: 'Priya Sharma', role: 'MBA Student', college: 'IIM Ahmedabad', avatar: 'PS', avatarBg: 'bg-blue-600', rating: 5, quote: 'The team at Edu Mentor 360 is exceptional. They provided step-by-step guidance through every stage of the CAT preparation and IIM application process. Their mentorship was invaluable.' },
  { id: 3, name: 'Rahul Verma', role: 'MS Computer Science', college: 'Georgia Tech, USA', avatar: 'RV', avatarBg: 'bg-green-600', rating: 5, quote: 'Dreaming of studying abroad seemed impossible until I connected with Edu Mentor 360. They helped me craft a stellar SOP, prepare for GRE, and shortlist the best universities for my profile.' },
  { id: 4, name: 'Sneha Kapoor', role: 'MBBS Student', college: 'Manipal Medical College', avatar: 'SK', avatarBg: 'bg-pink-600', rating: 5, quote: 'Getting into medical college through management quota seemed daunting. Edu Mentor 360 made the entire process transparent, straightforward, and stress-free. Truly life-changing guidance!' },
  { id: 5, name: 'Aditya Nair', role: 'B.Tech ECE Student', college: 'NIT Trichy', avatar: 'AN', avatarBg: 'bg-secondary-500', rating: 5, quote: 'I was confused about which college to choose after JEE results. The counselors at Edu Mentor 360 did a thorough analysis of my profile and helped me make the best decision for my career.' },
  { id: 6, name: 'Kavya Reddy', role: 'BBA Student', college: 'Symbiosis Pune', avatar: 'KR', avatarBg: 'bg-teal-600', rating: 5, quote: 'Edu Mentor 360 helped me discover that management was my true calling. Their comprehensive career assessment and guidance helped me secure admission in one of the top BBA programs in India.' },
  { id: 7, name: 'Rohan Gupta', role: 'B.Arch Student', college: 'SPA Delhi', avatar: 'RG', avatarBg: 'bg-purple-700', rating: 5, quote: 'The scholarship guidance from Edu Mentor 360 saved my family over 2 lakhs in fees. They identified scholarships I never knew existed and helped me with every part of the application.' },
  { id: 8, name: 'Ananya Menon', role: 'B.Sc Data Science', college: 'IIT Hyderabad', avatar: 'AM', avatarBg: 'bg-indigo-600', rating: 5, quote: 'From profile building to final admission, Edu Mentor 360 was by my side at every step. Their 24/7 support and expertise made a complex process feel effortless. Highly recommended!' },
];

export const FAQS: FAQ[] = [
  { id: 1, question: 'What types of admissions does Edu Mentor 360 help with?', answer: 'We assist with undergraduate (B.Tech, MBBS, BBA, B.Sc), postgraduate (MBA, M.Tech, MS), and doctoral admissions across top Indian universities and international institutions in the USA, UK, Canada, Australia, and Europe. We handle both entrance-exam based and management quota admissions.' },
  { id: 2, question: 'Is the initial consultation really free?', answer: 'Absolutely! Our first counseling session is completely free with no obligations. We use this session to understand your academic background, career goals, and preferences, after which we create a personalized roadmap for your educational journey.' },
  { id: 3, question: 'How do you help students who did not qualify entrance exams?', answer: 'We specialize in management quota and NRI quota admissions for students who could not qualify or appear for entrance exams like JEE, NEET, or CAT. Through our direct partnerships with 350+ institutions, we can secure confirmed seats in top colleges based on your Class 12 or graduation marks.' },
  { id: 4, question: 'What documents are typically required for admission support?', answer: 'Standard documents include: 10th & 12th mark sheets, transfer certificate, character certificate, passport-size photographs, government ID proof (Aadhar/Passport), and category certificate if applicable. For international admissions, we also need your GRE/IELTS/TOEFL scores and a valid passport.' },
  { id: 5, question: 'How long does the entire admission process take?', answer: 'The timeline varies by program and institution. Domestic management quota admissions can be completed in 2–4 weeks after initial consultation. International admissions typically require 4–8 months, which is why we recommend starting the process early—ideally 1 year before your intended enrollment date.' },
  { id: 6, question: 'Do you provide scholarship assistance as part of your services?', answer: 'Yes! Scholarship guidance is one of our core services. We maintain an updated database of merit scholarships, need-based aid, government scholarships, and university-specific grants. We help you identify eligible scholarships and assist with the entire application process to maximize your funding.' },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'Top 10 Engineering Colleges in India for 2025: Rankings, Fees & Admission', excerpt: 'A comprehensive guide to India\'s best engineering institutions—from IITs to top private universities—with NIRF rankings, fee structures, and direct admission pathways for aspiring engineers.', category: 'Admissions', date: 'March 28, 2025', author: 'Dr. Meera Krishnan', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80', readTime: '8 min read', categoryColor: 'bg-primary-100 text-primary-700' },
  { id: 2, title: 'How to Choose the Right Career Path: A Complete Guide for Class 12 Students', excerpt: 'Confused about what to study after Class 12? This comprehensive guide walks you through career assessment frameworks, emerging fields, salary insights, and how to align your passion with prospects.', category: 'Career Guide', date: 'March 15, 2025', author: 'Rajesh Kumar', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', readTime: '12 min read', categoryColor: 'bg-green-100 text-green-700' },
  { id: 3, title: 'Studying Abroad in 2025: Universities, Costs, Scholarships & Application Tips', excerpt: 'Everything you need to know about international education—from selecting the right country and university to securing scholarships, obtaining student visas, and thriving in a new academic environment.', category: 'Study Abroad', date: 'March 5, 2025', author: 'Priya Mehta', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', readTime: '10 min read', categoryColor: 'bg-secondary-100 text-secondary-700' },
];
