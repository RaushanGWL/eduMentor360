import { motion } from 'framer-motion';
import {
  GraduationCap, Building2, Award, Globe, BookOpen, TrendingUp, ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import { scrollToSection } from '../../utils/helpers';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Building2, Award, Globe, BookOpen, TrendingUp,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            badge="What We Offer"
            title={
              <>
                Comprehensive Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">Services</span>
              </>
            }
            subtitle="From career counseling to university admissions, we provide end-to-end support for every step of your educational journey."
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? GraduationCap;
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                role="listitem"
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Learn More */}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Not sure which service is right for you?</p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 active:bg-primary-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-md hover:shadow-glow"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
