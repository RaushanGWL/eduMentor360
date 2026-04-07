import { motion } from 'framer-motion';
import type { SectionHeaderProps } from '../../types';

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      {badge && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${
            light
              ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
              : 'bg-primary-100 text-primary-700'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading font-bold leading-tight ${
          centered ? '' : ''
        } ${
          light
            ? 'text-white'
            : 'text-slate-900'
        } text-3xl sm:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${
            light
              ? 'text-purple-200'
              : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
