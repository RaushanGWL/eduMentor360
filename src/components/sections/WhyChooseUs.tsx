import { motion } from 'framer-motion';
import { ShieldCheck, Users, HandHeart, Headphones, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import { useModal } from '../../context/ModalContext';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Users, HandHeart, Headphones,
};

const TRUST_SIGNALS = [
  { value: '350+', label: 'Partner Colleges' },
  { value: '8,500+', label: 'Students Placed' },
  { value: '12+', label: 'Years Experience' },
  { value: '97%', label: 'Success Rate' },
];

export function WhyChooseUs() {
  const { openEnquiryModal } = useModal();
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              badge="Why Choose Us"
              title={
                <>
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">B-tech Direct Admission?</span>
                </>
              }
              subtitle="We combine deep expertise with a genuine passion for student success to deliver outcomes that matter."
              centered={false}
            />

            <div className="mt-8 space-y-5" role="list" aria-label="Reasons to choose us">
              {WHY_CHOOSE_US.map((feature, index) => {
                const Icon = ICON_MAP[feature.icon] ?? ShieldCheck;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    role="listitem"
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8"
            >
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-md hover:shadow-glow"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Replace with: happy students with counselors celebrating admission */}
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Students celebrating successful college admissions with B-tech Direct Admission counselors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" aria-hidden="true" />
            </div>

            {/* Trust signals grid */}
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {TRUST_SIGNALS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl shadow-lg p-3 text-center border border-gray-100"
                  aria-label={`${value} ${label}`}
                >
                  <p className="font-heading font-bold text-xl text-primary-600">{value}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
