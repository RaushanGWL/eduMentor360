import { useEffect } from 'react';
import { motion } from 'framer-motion';
import FeaturedColleges from '../components/sections/FeaturedColleges';
import { Newsletter } from '../components/sections/Newsletter';

export function CollegesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-200">Colleges</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Find the right college with expert guidance and easy admissions.
          </motion.p>
        </div>
      </section>

      {/* Colleges Grid */}
      <div className="-mt-16 sm:-mt-0">
        <FeaturedColleges />
      </div>

      <Newsletter />
    </div>
  );
}

export default CollegesPage;
