import { motion } from 'framer-motion';
import { Star, ArrowRight, Bookmark, GraduationCap } from 'lucide-react';
import { FEATURED_COLLEGES } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import { scrollToSection } from '../../utils/helpers';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function FeaturedColleges() {
  return (
    <section id="colleges" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            badge="Partner Institutions"
            title={
              <>
                Top Colleges We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">Recommend</span>
              </>
            }
            subtitle="We partner with India's finest institutions to secure your dream admission through verified direct and management quota pathways."
          />
        </div>

        {/* Colleges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Featured colleges"
        >
          {FEATURED_COLLEGES.map((college) => (
            <motion.article
              key={college.id}
              variants={cardVariants}
              role="listitem"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-4 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-3">
                <img
                  src={college.image}
                  alt={`${college.name} campus`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Image Source */}
              {college.imageSource && (
                <p className="text-[11px] text-gray-500 italic mb-4">
                  {college.imageSource}
                </p>
              )}

              {/* Stars & Bookmark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-[#ff9800] fill-[#ff9800]" aria-hidden="true" />
                  ))}
                </div>
                <button className="text-gray-600 hover:text-gray-900 focus:outline-none transition-colors" aria-label="Bookmark college">
                  <Bookmark className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 leading-snug">
                  {college.name}
                </h3>

                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">
                  {college.description}
                </p>

                {/* Footer details row */}
                <div className="flex items-center justify-between mt-auto flex-wrap gap-4 pt-4">
                  {/* Avatar section */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#5f498c] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <GraduationCap className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Direct Admission <span className="font-normal text-gray-500">By</span> Edu Mentor 360
                    </p>
                  </div>
                  
                  {/* Button */}
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded border border-gray-100 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 group whitespace-nowrap"
                    aria-label={`Get direct admission to ${college.name}`}
                  >
                    Get Direct Admission ?
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">We partner with 350+ institutions across India and globally.</p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
          >
            Explore All Partner Institutions
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedColleges;
