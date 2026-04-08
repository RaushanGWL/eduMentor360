import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Map, User } from 'lucide-react';
import { Newsletter } from '../components/sections/Newsletter';
import SectionHeader from '../components/common/SectionHeader';

const CORE_VALUES = [
  {
    id: 1,
    title: 'Transparency',
    description: 'We keep things clear and honest so you always know exactly what’s happening with your admission process.',
    icon: Eye,
    color: 'text-primary-600',
    bgColor: 'bg-primary-50'
  },
  {
    id: 2,
    title: 'Trust',
    description: 'We build long-term relationships based on reliability, clarity, and unwavering care for our students.',
    icon: ShieldCheck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    title: 'Guidance',
    description: 'From choosing the right course to securing your seat, we guide you like a trusted friend at every step.',
    icon: Map,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 4,
    title: 'Student-First Approach',
    description: 'Every decision we make starts with what’s absolutely best for you and your long-term career goals.',
    icon: User,
    color: 'text-secondary-500',
    bgColor: 'bg-orange-50'
  }
];

export function AboutPage() {
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-200">B-tech Direct Admission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Your trusted partner in college admissions, guiding you to the right seat for your future.
          </motion.p>
        </div>
      </section>

      {/* What is B-tech Direct Admission for you? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary-100 text-primary-700 mb-4">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                What is <span className="text-gradient">B-tech Direct Admission</span> For You?
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At B-tech Direct Admission, we’re here to make your college admission journey smooth, simple, and stress-free! With over 12+ years of experience and partnerships with 350+ universities across India and abroad, we’ve helped thousands of students find their dream college and course.
                </p>
                <p>
                  We understand that choosing the right college can feel overwhelming — but you don’t have to do it alone. Whether it’s direct admissions, management quota seats, or personalized counseling, our team is here to guide you every step of the way.
                </p>
                <p className="font-medium text-primary-700 bg-primary-50 p-4 rounded-xl border-l-4 border-primary-500">
                  At B-tech Direct Admission, it’s not just about getting a seat — it’s about finding the right seat for your future!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Counseling session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-heading font-bold text-4xl mb-1">8,500+</div>
                  <div className="text-white/80 font-medium">Students Successfully Placed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="Our Core Values"
            subtitle="At B-tech Direct Admission, our values define how we work and who we are."
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group"
              >
                <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default AboutPage;
