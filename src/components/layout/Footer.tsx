import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, ArrowRight, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';
import { useModal } from '../../context/ModalContext';

export function Footer() {
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for render before scrolling
        setTimeout(() => scrollToSection(href), 100);
      } else {
        scrollToSection(href);
      }
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <footer className="bg-white text-gray-600 border-t border-gray-100 pb-8 pt-16 lg:pt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Button */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <span className="font-heading font-extrabold text-[#3a206b] text-xl uppercase tracking-wide">
                  B-tech Direct Admission
                </span>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                At B-tech Direct Admission, it's not just about getting a seat – it's about finding the right seat for your future!
              </p>
              
              <button 
                onClick={openEnquiryModal}
                className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-primary-300 rounded-full" />
                <span className="relative flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-gray-800 group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                  Contact With Us <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Column 2: Useful Links */}
            <div className="lg:col-span-3 lg:px-8">
              <h3 className="font-heading font-bold text-gray-900 mb-6 text-lg tracking-tight">Useful Links</h3>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-500 hover:text-primary-600 text-[15px] font-medium transition-colors duration-200 focus:outline-none"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Newsletter */}
            <div className="lg:col-span-5">
              <h3 className="font-heading font-bold text-gray-900 mb-6 text-lg tracking-tight">Get Contact</h3>
              <div className="space-y-4 mb-8 text-[15px] text-gray-500 font-medium">
                <p>Phone: +91 7323020613</p>
                <p>E-mail: help@edumentor360.in</p>
              </div>

              <h4 className="font-heading font-bold text-gray-900 mb-3 text-[17px] tracking-tight">Newsletter</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
                2000+ Our students are subscribe Around the World.<br />Don't be shy introduce yourself!
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="max-w-md">
                <div className="relative mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Here" 
                    required
                    className="w-full border-0 border-b border-gray-300 py-3 pl-2 pr-10 text-[15px] text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-purple-500 bg-transparent transition-colors outline-none"
                  />
                  <Mail className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-gradient-to-r from-[#2e1065] to-purple-500 text-white text-[15px] font-semibold rounded-full hover:from-[#1b0841] hover:to-purple-600 transition-all shadow-md mt-2"
                >
                  Submit Now
                </button>
              </form>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-6 border-t border-gray-100 text-[14px] text-gray-500">
          <p className="mb-4 text-gray-500">
            <strong className="text-gray-700 font-bold tracking-tight">disclaimer:</strong> This site is for educational purposes only and is not affiliated with or endorsed by VIT Chennai or any other College/University.
          </p>
          <div className="h-[1px] bg-gray-100 w-full mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
            <p>Copyright © {new Date().getFullYear()} <span className="font-semibold text-gray-700">B-tech Direct Admission</span> All Rights Reserved</p>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-primary-600 transition-colors">Terms & Conditions</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons Panel */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <a 
          href="https://wa.me/917323020613" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 rounded-full border border-gray-400 bg-white text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default Footer;
