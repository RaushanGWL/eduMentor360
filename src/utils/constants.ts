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
  { id: 1, name: 'Arjun Patel', role: 'B.Tech CSE Student', college: 'BITS Pilani', avatar: 'AP', avatarBg: 'bg-primary-600', rating: 5, quote: 'B-tech Direct Admission completely transformed my college admission journey. Their expert counselors helped me identify my strengths and guided me to the perfect engineering program. I\'m now pursuing my dream course!' },
  { id: 2, name: 'Priya Sharma', role: 'MBA Student', college: 'IIM Ahmedabad', avatar: 'PS', avatarBg: 'bg-blue-600', rating: 5, quote: 'The team at B-tech Direct Admission is exceptional. They provided step-by-step guidance through every stage of the CAT preparation and IIM application process. Their mentorship was invaluable.' },
  { id: 3, name: 'Rahul Verma', role: 'MS Computer Science', college: 'Georgia Tech, USA', avatar: 'RV', avatarBg: 'bg-green-600', rating: 5, quote: 'Dreaming of studying abroad seemed impossible until I connected with B-tech Direct Admission. They helped me craft a stellar SOP, prepare for GRE, and shortlist the best universities for my profile.' },
  { id: 4, name: 'Sneha Kapoor', role: 'MBBS Student', college: 'Manipal Medical College', avatar: 'SK', avatarBg: 'bg-pink-600', rating: 5, quote: 'Getting into medical college through management quota seemed daunting. B-tech Direct Admission made the entire process transparent, straightforward, and stress-free. Truly life-changing guidance!' },
  { id: 5, name: 'Aditya Nair', role: 'B.Tech ECE Student', college: 'NIT Trichy', avatar: 'AN', avatarBg: 'bg-secondary-500', rating: 5, quote: 'I was confused about which college to choose after JEE results. The counselors at B-tech Direct Admission did a thorough analysis of my profile and helped me make the best decision for my career.' },
  { id: 6, name: 'Kavya Reddy', role: 'BBA Student', college: 'Symbiosis Pune', avatar: 'KR', avatarBg: 'bg-teal-600', rating: 5, quote: 'B-tech Direct Admission helped me discover that management was my true calling. Their comprehensive career assessment and guidance helped me secure admission in one of the top BBA programs in India.' },
  { id: 7, name: 'Rohan Gupta', role: 'B.Arch Student', college: 'SPA Delhi', avatar: 'RG', avatarBg: 'bg-purple-700', rating: 5, quote: 'The scholarship guidance from B-tech Direct Admission saved my family over 2 lakhs in fees. They identified scholarships I never knew existed and helped me with every part of the application.' },
  { id: 8, name: 'Ananya Menon', role: 'B.Sc Data Science', college: 'IIT Hyderabad', avatar: 'AM', avatarBg: 'bg-indigo-600', rating: 5, quote: 'From profile building to final admission, B-tech Direct Admission was by my side at every step. Their 24/7 support and expertise made a complex process feel effortless. Highly recommended!' },
];

export const FAQS: FAQ[] = [
  { 
    id: 1, 
    question: "Let’s start with the basics. What's the difference between BE and BTech?", 
    answer: "Engineering, at its core, is about solving problems using physics, math, and creativity. B.E. (Bachelor of Engineering) is slightly more theory-heavy and rooted in the traditional university model, focusing on the science and principles. B.Tech (Bachelor of Technology) is more application-focused, with more labs, hands-on work, and industry orientation. Practically, employers treat them as equivalent; what matters far more is your college's reputation, your grades, and what you've actually built or done." 
  },
  { 
    id: 2, 
    question: "Is there a difference when it comes to the practical life? While you’re searching for a job or switching your career?", 
    answer: "In reality, employers treat them as equivalent. When an HR person sees your resume, they're not going to say, 'Oh, B.E.? Sorry, we only take B.Tech.' What matters far more is your college's reputation, your grades, and what you've actually built or done. The distinction matters a little more if you're going into research or higher education — but for the job market, don't lose sleep over it." 
  },
  { 
    id: 3, 
    question: "How do you get into such good universities in Bangalore or anywhere in India?", 
    answer: "Bangalore’s Golden Duo: KCET + COMEDK – Plus Management Magic, Your Ticket to Top Colleges. KCET from KEA unlocks government quota seats (approx. Rs 60K/year). COMEDK is the private college gateway for 150+ colleges. Preparation for both overlaps with JEE (PCM). In short, KCET, COMEDK, and management quota are your full arsenal for colleges like PES, Ramaiah, Dayananda Sagar, RVCE, and BMS." 
  },
  { 
    id: 4, 
    question: "Why should I consider all three: KCET, COMEDK, and management quota?", 
    answer: "Ultimate flexibility! KCET for value, COMEDK for choices, and management for premium security—no rank gamble, direct top branch. The top families often choose management for certainty. This trio ensures you win by providing an empowering move for committed students." 
  },
  { 
    id: 5, 
    question: "What are the engineering branches available and which ones are the most in-demand?", 
    answer: "The core branches are Mechanical, Civil, ECE, and Chemical. However, Computer Science (CS) remains king, especially with AI, cloud, and cybersecurity. Electronics and VLSI are growing as India builds its chip ecosystem. Electrical engineers are in demand due to the EV revolution. Civil and Mechanical remain evergreen gems, while Biomedical and Aerospace offer niche but fascinating opportunities. CS and IT currently offer the fastest and widest job market access." 
  },
  { 
    id: 6, 
    question: "What’s the actual difference between CSE, AI, and IT?", 
    answer: "Computer Science Engineering (CSE) is the broadest and most foundational, covering everything from algorithms to operating systems. Information Technology (IT) is more focused on using technology (networking, systems management, software apps). AI/ML is the most specialized, diving deep into neural networks and intelligent systems, making it mathematically demanding." 
  },
  { 
    id: 7, 
    question: "Which branch should I choose? Interest or placements?", 
    answer: "If you have a genuine, burning interest in something, follow that interest. Passion is fuel. You'll study harder, learn more, and ultimately be better at your job. However, if your real goal is financial stability, there's no shame in being strategic. Pick the branch with better placement records and then build genuine interest over time. Interest is often a byproduct of getting good at something." 
  },
  { 
    id: 8, 
    question: "Is my career over if I don't get into an IIT/NIT/IIIT?", 
    answer: "Practically? No! There's a whole tier of colleges that are genuinely excellent and significantly more accessible. Especially in Bangalore, you're spoiled for choice. Nationally strong private institutes include BITS Pilani, VIT Vellore, MIT Manipal, and SRM. Bangalore-specific top options include RVCE, PES University, MS Ramaiah, BMS, and Dayananda Sagar." 
  },
  { 
    id: 9, 
    question: "Do you get a recognised degree from autonomous colleges in Bangalore?", 
    answer: "Yes! VTU (Visvesvaraya Technological University) is the university that affiliates most engineering colleges in Karnataka, including many in Bangalore. Even if a college is autonomous, the degree remains recognized and valuable." 
  },
  { 
    id: 10, 
    question: "Is VTU recognized for engineering?", 
    answer: "As a university system, VTU has a strong legacy and its degree is well-recognized across India. The curriculum has been modernized over the years. VTU provides the framework, and the individual college shapes your experience. Focus on picking the right college, and the VTU affiliation will take care of itself." 
  },
  { 
    id: 11, 
    question: "Why go for expensive institutions if both get the degree from VTU?", 
    answer: "The experience varies hugely depending on the college. RVCE, Ramaiah, and BMS are VTU-affiliated and excellent. A lesser-known VTU college in a smaller town might offer a very different experience. Better private colleges often have significantly better placement salaries, making them a smart investment." 
  },
  { 
    id: 12, 
    question: "Are expensive private colleges worth the higher fee?", 
    answer: "It depends on the ROI. A random private college charging high fees with average placements might be hard to justify. However, a better private college charging higher fees but providing average packages of 15-20 LPA is a smart investment that can be recovered within a few years of working." 
  },
  { 
    id: 13, 
    question: "What is the framework to evaluate the best college?", 
    answer: "Consider three questions: What is the average placement salary? What is the total 4-year cost (including fees and living expenses)? Can you realistically recover that investment within 2 to 3 years? If a college places students at 12-15 LPA after a 30 lakh investment, the math works." 
  },
  { 
    id: 14, 
    question: "What is the practical roadmap for engineering admissions?", 
    answer: "1. Nail the entrance exams (JEE Main, BITSAT, KCET, COMEDK). 2. Don't ignore board marks, as they are factored into KCET. 3. Apply under the right reservation categories for a legal advantage. 4. Research management quota carefully if you need a direct top branch. 5. Visit the campus to see infrastructure and talk to current students before paying fees." 
  },
  { 
    id: 15, 
    question: "Is engineering genuinely worth it?", 
    answer: "Engineering is genuinely worth it—but it rewards the intentional. Know why you're doing it, pick your college and branch thoughtfully, and then put in the work. The opportunities are very much there. We are happy to help you clear out any doubts!" 
  },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'Top 10 Engineering Colleges in India for 2025: Rankings, Fees & Admission', excerpt: 'A comprehensive guide to India\'s best engineering institutions—from IITs to top private universities—with NIRF rankings, fee structures, and direct admission pathways for aspiring engineers.', category: 'Admissions', date: 'March 28, 2025', author: 'Dr. Meera Krishnan', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80', readTime: '8 min read', categoryColor: 'bg-primary-100 text-primary-700' },
  { id: 2, title: 'How to Choose the Right Career Path: A Complete Guide for Class 12 Students', excerpt: 'Confused about what to study after Class 12? This comprehensive guide walks you through career assessment frameworks, emerging fields, salary insights, and how to align your passion with prospects.', category: 'Career Guide', date: 'March 15, 2025', author: 'Rajesh Kumar', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', readTime: '12 min read', categoryColor: 'bg-green-100 text-green-700' },
  { id: 3, title: 'Studying Abroad in 2025: Universities, Costs, Scholarships & Application Tips', excerpt: 'Everything you need to know about international education—from selecting the right country and university to securing scholarships, obtaining student visas, and thriving in a new academic environment.', category: 'Study Abroad', date: 'March 5, 2025', author: 'Priya Mehta', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', readTime: '10 min read', categoryColor: 'bg-secondary-100 text-secondary-700' },
];

// Lead Capture API Configuration
// Once you deploy your Google Apps Script, replace this placeholder with your Web App URL.
export const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbx8JiQQjc4H8DhXPRKiSk6ElRMVl3BJ4ZLba3P5SvPPkgkN86eP-CT1EKEfDmZsxErYxg/exec';
