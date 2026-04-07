import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, Phone, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import EnquiryModal from '../sections/EnquiryModal';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isScrolled } = useScrollPosition(60);
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically open the modal when switching to a new page
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    // Open modal whenever the route changes
    setIsModalOpen(true);
  }, [location.pathname]);

  const forceSolidHeader = location.pathname === '/faq' || location.pathname === '/contact';
  const shouldShowSolid = isScrolled || forceSolidHeader;

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);

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

  const toggleMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          shouldShowSolid
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
              aria-label="Edu Mentor 360 - Go to homepage"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className={`font-heading font-bold text-xl tracking-tight ${shouldShowSolid ? 'text-gray-900' : 'text-white'}`}>
                Edu Mentor <span className="text-secondary-400">360</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    shouldShowSolid
                      ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
             
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden lg:flex group relative items-center justify-center p-[1.5px] rounded-full overflow-hidden font-heading font-bold transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-secondary-400" />
                <span className={`relative flex items-center gap-2 px-7 py-2.5 rounded-full transition-all duration-300 ${
                  shouldShowSolid 
                    ? 'bg-white text-[#1f2937] group-hover:bg-transparent group-hover:text-white' 
                    : 'bg-white/10 backdrop-blur-md text-white group-hover:bg-white group-hover:text-[#1f2937]'
                }`}>
                  Book Free Counseling <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  shouldShowSolid
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-80 max-w-full bg-white shadow-2xl lg:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-heading font-bold text-xl text-gray-900">
                    Edu Mentor <span className="text-secondary-500">360</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-5 py-3.5 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="p-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+918001234567"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 800 123 4567</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full group relative flex items-center justify-center p-[2px] rounded-full overflow-hidden font-heading font-bold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-secondary-400" />
                  <span className="relative flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-full text-[#1f2937]">
                    Book Free Counseling <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Header;
