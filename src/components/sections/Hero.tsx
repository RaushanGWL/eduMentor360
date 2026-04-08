import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

import heroBanner from '../../assets/Home-page-banner.jpg';

const HERO_BADGES = [
  { text: 'Personalized Help' },
  { text: 'Easy Admissions' },
  { text: '7+ Years Experience' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  const { openEnquiryModal } = useModal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      {/* Background Image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroBanner}
          alt="Students walking together"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* A simple, neutral darkening overlay just to keep white text readable, removing the heavy blue/purple cast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 lg:py-32">
        <div className="max-w-4xl mr-auto">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white shadow-sm mb-6">
                <div className="w-6 h-6 bg-primary-800 rounded-full flex items-center justify-center p-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </div>
                <span className="opacity-90">Your</span> <strong className="font-bold">Admissions Partner</strong>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold tracking-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] leading-[1.15] mb-6"
            >
              Looking for B.Tech Admission 2026 in Top Engineering College?
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-white/95 leading-snug mb-8 max-w-3xl">
              We provide expert counseling and direct admission assistance
              through Management/NRI quota in SRM College of Engineering,
              Chennai, VIT Vellore & R. V. College of Engineering (RVCE).
            </motion.p>

            {/* Feature Badges */}
            <motion.ul variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-3 mb-10" aria-label="Key features">
              {HERO_BADGES.map(({ text }) => (
                <li key={text} className="flex items-center gap-2.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-white">{text}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={openEnquiryModal}
                className="px-8 py-4 bg-gradient-to-r from-gray-900 to-purple-500 hover:from-gray-800 hover:to-purple-400 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl"
              >
                Book a Free Counseling
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
