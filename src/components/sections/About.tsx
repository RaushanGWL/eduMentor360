import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { scrollToSection } from '../../utils/helpers';

const HIGHLIGHTS = [
  { icon: Award, text: '12+ years of dedicated educational mentoring expertise' },
  { icon: Users, text: "Personalized approach for every student's unique journey" },
  { icon: TrendingUp, text: '97% admission success rate across all partner institutions' },
  { icon: CheckCircle, text: 'Transparent guidance with no hidden fees or false promises' },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Replace with: counselor meeting with students in a modern office */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Edu Mentor 360 counselors working with students"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating card - Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-100"
              aria-label="12+ Years of Experience"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold font-heading text-gray-900">12+</p>
                <p className="text-sm text-gray-500 font-medium">Years of Excellence</p>
              </div>
            </motion.div>

            {/* Floating card - Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -top-5 -left-5 bg-primary-600 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              aria-label="97% Success Rate"
            >
              <TrendingUp className="w-6 h-6" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold font-heading">97%</p>
                <p className="text-xs text-primary-200">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary-100 text-primary-700 mb-4">
              About Edu Mentor 360
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Why Choose{' '}
              <span className="text-gradient">Edu Mentor 360?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2012, Edu Mentor 360 is India's most trusted educational mentoring platform. 
              We don't just help students get admission—we help them discover the right academic path 
              aligned with their passions, strengths, and long-term career goals.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of 50+ seasoned counselors brings specialized expertise across engineering, 
              medicine, management, law, design, and international education. From your first 
              consultation to enrollment day, we're with you every step of the way.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10" aria-label="Key highlights">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-primary-600" aria-hidden="true" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
