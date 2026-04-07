import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Award } from 'lucide-react';
import { STATS } from '../../utils/constants';
import { useCountUp } from '../../hooks/useCountUp';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Building2, TrendingUp, Award,
};

interface StatCardProps {
  stat: typeof STATS[number];
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const { count, ref } = useCountUp({ end: stat.value, duration: 2200 });
  const Icon = ICON_MAP[stat.icon] ?? Award;

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 lg:p-8 relative"
    >
      {/* Divider for desktop */}
      {index > 0 && (
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" aria-hidden="true" />
      )}

      {/* Icon */}
      <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm" aria-hidden="true">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Counter */}
      <p className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2" aria-live="polite">
        {count.toLocaleString('en-IN')}
        <span className="text-secondary-400">{stat.suffix}</span>
      </p>

      {/* Label */}
      <p className="text-purple-200 text-sm sm:text-base font-medium">{stat.label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      aria-label="Statistics section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(249,115,22,0.6) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(6,182,212,0.4) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-custom">
        {/* Section text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Over a decade of transforming student journeys across India and beyond.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl"
          role="list"
          aria-label="Key statistics"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} role="listitem">
              <StatCard stat={stat} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
