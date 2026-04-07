import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Button from '../common/Button';
import { scrollToSection } from '../../utils/helpers';

export function CTABanner() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-500/20 border border-secondary-400/30 text-secondary-300 text-sm font-semibold mb-6 tracking-wide">
            🎓 Start Your Journey Today
          </span>

          {/* Heading */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Your Dream College Is Just
            <span className="text-gradient-light"> One Step Away</span>
          </h2>

          {/* Subtext */}
          <p className="text-purple-200 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Join 8,500+ students who have successfully secured their dream colleges with Edu Mentor 360. 
            Our expert counselors are ready to guide you to your perfect academic destination.
          </p>

          <p className="text-purple-300 text-base mb-10">
            Free consultation · No obligations · Expert guidance from Day 1
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="secondary"
              size="xl"
              onClick={() => scrollToSection('#contact')}
              rightIcon={<ArrowRight className="w-6 h-6" />}
            >
              Book Free Counseling Session
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('#contact')}
              className="border-white/40 text-white hover:bg-white/10 hover:border-white hover:text-white focus:ring-white"
            >
              Learn More
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-300">
            <a
              href="tel:+918001234567"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <Phone className="w-4 h-4 text-secondary-400" aria-hidden="true" />
              <span className="text-sm font-medium">+91 800 123 4567</span>
            </a>
            <span className="hidden sm:block text-purple-600" aria-hidden="true">|</span>
            <a
              href="mailto:hello@edumentor360.in"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <Mail className="w-4 h-4 text-secondary-400" aria-hidden="true" />
              <span className="text-sm font-medium">hello@edumentor360.in</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;
