import { useEffect } from 'react';

import FAQ from '../components/sections/FAQ';
import { Newsletter } from '../components/sections/Newsletter';

import faqBanner from '../assets/faq-banner.jpg';

export function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Page Header with Banner Image */}
      <section className="w-full relative pt-16 lg:pt-20 bg-gray-50">
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px]">
          <img 
            src={faqBanner} 
            alt="FAQ Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-white/50 sm:bg-black/10 pl-8 sm:pl-16 md:pl-24 lg:pl-32">
            <h1 className="font-heading font-bold text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] text-[#111827] leading-[1.05] text-left drop-shadow-sm tracking-tight">
              Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#c026d3]">Asked</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e81cff] via-[#fb7185] to-[#f97316]">Questions</span>
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ Section handles its own container-custom and padding */}
      <div className="-mt-16 sm:-mt-0">
        <FAQ />
      </div>

      <Newsletter />
    </div>
  );
}

export default FAQPage;
