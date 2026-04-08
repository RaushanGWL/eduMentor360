import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Headphones, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import type { FormState } from '../../types';

import { submitLeadToGoogleSheet } from '../../services/googleSheetService';
import { isValidEmail, isValidPhone } from '../../utils/helpers';

const initialState: FormState = { success: false, message: '', errors: {} };

async function contactAction(_prevState: FormState, formData: FormData): Promise<FormState> {
  const errors: Record<string, string> = {};
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const phone = (formData.get('phone') as string)?.trim();
  const city = (formData.get('city') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name) errors.name = 'Name is required';
  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!phone) {
    errors.phone = 'Mobile is required';
  } else if (!isValidPhone(phone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number';
  }

  if (!city) errors.city = 'City is required';
  if (!message) errors.message = 'Message is required';
  
  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please fix the errors below.', errors };
  }

  // Submit to Google Sheets
  const success = await submitLeadToGoogleSheet({
    name,
    email,
    phone,
    city,
    message,
    source: 'Contact Page'
  });

  if (!success) {
    return { success: false, message: 'Submission failed. Please try again or contact us directly.', errors: {} };
  }

  return { success: true, message: 'Thank you! Our counselor will contact you within 24 hours.', errors: {} };
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 mt-8 py-4 bg-[#6b47c0] hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 focus:outline-none shadow-md"
    >
      {pending ? (
        <><svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Submitting...</>
      ) : (
        <span className="tracking-widest flex items-center gap-2 text-[14px]">SUBMIT <ArrowRight className="w-4 h-4 ml-1" /></span>
      )}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(contactAction, initialState);

  const minimalInputClass = "w-full border-0 border-b border-gray-200 px-1 py-4 text-gray-700 bg-transparent placeholder-[#6b7280] focus:ring-0 focus:border-[#6b47c0] transition-colors text-[15px] outline-none";

  return (
    <div className="bg-gradient-to-b from-[#f9f7ff] to-white pb-24">
      {/* Header Section */}
      <div className="text-center pt-16 pb-12 px-4">
        <span className="inline-block px-4 py-1 bg-[#f0eaff] text-[#8b5cf6] text-xs font-bold rounded-full mb-6 tracking-wide">
          CONTACT US
        </span>
        <h2 className="text-[34px] md:text-5xl font-extrabold text-[#111827] tracking-tight">
          Talk to us — your future awaits !
        </h2>
      </div>

      <div className="max-w-[70rem] mx-auto px-4">
        {/* Contact info cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center gap-6">
            <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
              <Headphones className="w-7 h-7 text-[#1f2937]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[19px] text-[#111827] mb-1.5">Contact Phone Number</h3>
              <p className="text-gray-500 font-medium">+91-7323020613</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center gap-6">
            <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
              <Mail className="w-7 h-7 text-[#1f2937]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[19px] text-[#111827] mb-1.5">Our Email Address</h3>
              <p className="text-gray-500 font-medium">help@edumentor360.in</p>
            </div>
          </div>
        </div>

        {/* Hero Form Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Brand Image/Graphic */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[650px] rounded-3xl overflow-hidden bg-purple-50 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
              alt="Education Counselor" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-gray-50/80">
            {state.success ? (
              <div className="flex flex-col items-center justify-center text-center py-20 min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-green-500 mb-6" aria-hidden="true" />
                <h3 className="font-heading font-extrabold text-[28px] text-gray-900 mb-4">Enquiry Submitted!</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">{state.message}</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-extrabold text-[32px] text-[#111827] leading-[1.2] mb-10 pr-4 tracking-tight">
                  Let's connect and make your admission journey easier !
                </h3>

                <form action={formAction} noValidate className="space-y-1">
                  <div>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Name *"
                      className={minimalInputClass}
                      autoComplete="name"
                    />
                    {state.errors?.name && <p className="text-[11px] text-red-500 mt-0.5 ml-1">{state.errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email *"
                      className={minimalInputClass}
                      autoComplete="email"
                    />
                    {state.errors?.email && <p className="text-[11px] text-red-500 mt-0.5 ml-1">{state.errors.email}</p>}
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Mobile *"
                      className={minimalInputClass}
                      autoComplete="tel"
                    />
                    {state.errors?.phone && <p className="text-[11px] text-red-500 mt-0.5 ml-1">{state.errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      name="city"
                      type="text"
                      required
                      placeholder="City *"
                      className={minimalInputClass}
                    />
                    {state.errors?.city && <p className="text-[11px] text-red-500 mt-0.5 ml-1">{state.errors.city}</p>}
                  </div>
                  <div>
                    <input
                      name="message"
                      type="text"
                      required
                      placeholder="Message *"
                      className={minimalInputClass}
                    />
                    {state.errors?.message && <p className="text-[11px] text-red-500 mt-0.5 ml-1">{state.errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <SubmitButton />
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
