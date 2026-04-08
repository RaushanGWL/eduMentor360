import { motion } from 'framer-motion';
import { MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { FAQS } from '../../utils/constants';
import Accordion from '../common/Accordion';
import SectionHeader from '../common/SectionHeader';
import { useModal } from '../../context/ModalContext';

export function FAQ() {
  const { openEnquiryModal } = useModal();
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: Header + Contact prompt */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <SectionHeader
                badge="FAQ's"
                title={
                  <>
                    Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">Asked Questions</span>
                  </>
                }
                subtitle="Find answers to the most common questions about our admission services."
                centered={false}
              />

              {/* Still have questions card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl text-white shadow-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircleQuestion className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Still Have Questions?</h3>
                <p className="text-primary-200 text-sm leading-relaxed mb-5">
                  Our expert counselors are available Monday–Saturday, 9 AM to 7 PM IST to help you with any admission queries.
                </p>
                <button
                  onClick={openEnquiryModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md"
                  aria-label="Contact our counselors"
                >
                  Ask Our Counselors
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Accordion items={FAQS} />

            {/* View all FAQs link */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              >
                Can't find your answer? Contact us
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
