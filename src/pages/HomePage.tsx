import { Suspense } from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Stats } from '../components/sections/Stats';
import { FeaturedColleges } from '../components/sections/FeaturedColleges';
import { HowItWorks } from '../components/sections/HowItWorks';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTABanner } from '../components/sections/CTABanner';
import { FAQ } from '../components/sections/FAQ';
import { Blog } from '../components/sections/Blog';
import { Newsletter } from '../components/sections/Newsletter';
// Skeleton loader for lazy sections
function SectionSkeleton() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded-full w-24 mx-auto" />
          <div className="h-10 bg-gray-200 rounded-xl w-2/3 mx-auto" />
          <div className="h-5 bg-gray-200 rounded-lg w-1/2 mx-auto" />
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Critical sections - loaded immediately */}
      <Hero />
      <About />
      <Services />
      <Stats />

      {/* Secondary sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedColleges />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <CTABanner />

      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      <Newsletter />
    </>
  );
}

export default HomePage;
