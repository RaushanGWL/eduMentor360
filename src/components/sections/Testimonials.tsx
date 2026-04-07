import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import type { Testimonial } from '../../types';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md border border-gray-100 p-6 mx-3 hover:shadow-lg transition-shadow duration-300 cursor-default"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Rating */}
      <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`} role="img">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-600 text-sm leading-relaxed mb-5">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${testimonial.avatarBg} rounded-full flex items-center justify-center flex-shrink-0`}
          aria-hidden="true"
        >
          <span className="text-white text-xs font-bold">{testimonial.avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role} · {testimonial.college}</p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  // Duplicate for seamless loop
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section-padding bg-section-alt overflow-hidden" aria-label="Student testimonials">
      <div className="container-custom mb-12 lg:mb-16">
        <SectionHeader
          badge="Student Stories"
          title={
            <>
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">Students Say</span>
            </>
          }
          subtitle="Real stories from real students. See how Edu Mentor 360 transformed their educational journeys."
        />
      </div>

      {/* Row 1: Marquee Left */}
      <div
        className="relative mb-6 group"
        aria-label="Testimonials scrolling row"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div
          className="flex animate-marquee group-hover:pause-animation"
          role="list"
          aria-label="Student testimonials"
        >
          {row1.map((testimonial, index) => (
            <div key={`r1-${testimonial.id}-${index}`} role="listitem">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="container-custom mt-10 text-center">
        <p className="text-gray-500 text-sm">
          Rated <strong className="text-gray-700">4.9/5</strong> based on{' '}
          <strong className="text-gray-700">2,400+</strong> verified student reviews
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
