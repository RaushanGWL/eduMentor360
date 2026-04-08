import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Search, FileText, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { useModal } from '../../context/ModalContext';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneCall, ClipboardList, Search, FileText, CheckCircle,
};

export function HowItWorks() {
  const { openEnquiryModal } = useModal();

  return (
    <section id="how-it-works" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            badge="Our Process"
            title={
              <>
                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">B-tech Direct Admission Works</span>
              </>
            }
            subtitle="A simple, structured process designed to take you from uncertainty to your dream college admission in just 5 steps."
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 z-0"
            style={{ top: '2.5rem' }}
            aria-hidden="true"
          />

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
            aria-label="Our 5-step process"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? CheckCircle;
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step indicator */}
                  <div className="relative mb-5">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                        isLast
                          ? 'bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-glow-orange'
                          : 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-glow'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    {/* Step number badge */}
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md ${
                        isLast ? 'bg-secondary-500' : 'bg-primary-600'
                      }`}
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-base text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={openEnquiryModal}
            >
              Start Your Journey Today
            </Button>
            <span className="text-gray-400 text-sm">
              Join 8,500+ students who've transformed their future with us
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
