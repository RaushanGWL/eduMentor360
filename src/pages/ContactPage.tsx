import { useEffect } from 'react';
import { Contact } from '../components/sections/Contact';
import { Newsletter } from '../components/sections/Newsletter';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Render the core Contact block */}
      <Contact />
      <Newsletter />
    </div>
  );
}

export default ContactPage;
