import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';
import type { FormState } from '../../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { submitLeadToGoogleSheet } from '../../services/googleSheetService';
import { isValidEmail, isValidPhone } from '../../utils/helpers';

const initialState: FormState = { success: false, message: '', errors: {} };

async function enquiryAction(_prevState: FormState, formData: FormData): Promise<FormState> {
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
    source: 'Enquiry Modal'
  });

  if (!success) {
    return { success: false, message: 'Submission failed. Please try again or contact us directly.', errors: {} };
  }

  return { success: true, message: 'Thank you! Our counselor will contact you within 24 hours.', errors: {} };
}

function ModalSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 mt-8 py-4 bg-gradient-to-r from-gray-900 to-purple-500 hover:from-gray-800 hover:to-purple-400 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 focus:outline-none"
    >
      {pending ? (
        <><svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Submitting...</>
      ) : (
        <span className="tracking-widest flex items-center gap-2 text-[15px]">SUBMIT <ArrowRight className="w-5 h-5" /></span>
      )}
    </button>
  );
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [state, formAction] = useActionState(enquiryAction, initialState);

  const minimalInputClass = "w-full border-0 border-b border-gray-200 px-1 py-3 text-gray-700 bg-transparent placeholder-gray-500 focus:ring-0 focus:border-purple-500 transition-colors text-[15px] outline-none";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {state.success ? (
        <div className="flex flex-col items-center text-center py-6">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" aria-hidden="true" />
          <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Enquiry Submitted!</h3>
          <p className="text-gray-500 text-sm mb-6">{state.message}</p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="px-2 pb-2">
          {/* Modal Header */}
          <div className="text-center mb-8 mt-2">
            <h2 className="font-heading font-extrabold text-[28px] leading-tight text-[#1b2538] mb-4">
              Apply Now for <span className="text-purple-500">Expert</span> Admission<br />Guidance !
            </h2>
            <p className="text-[#3b4353] text-[15px] leading-relaxed max-w-sm mx-auto">
              Our experienced counselors will connect with you within <strong className="font-bold">24 hours</strong> to guide you through the admission process.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
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
                {state.errors?.name && <p className="text-[10px] text-red-500 mt-0.5 ml-1">{state.errors.name}</p>}
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
                {state.errors?.email && <p className="text-[10px] text-red-500 mt-0.5 ml-1">{state.errors.email}</p>}
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
                {state.errors?.phone && <p className="text-[10px] text-red-500 mt-0.5 ml-1">{state.errors.phone}</p>}
              </div>
              <div>
                <input
                  name="city"
                  type="text"
                  required
                  placeholder="City *"
                  className={minimalInputClass}
                />
                {state.errors?.city && <p className="text-[10px] text-red-500 mt-0.5 ml-1">{state.errors.city}</p>}
              </div>
              <div>
                <input
                  name="message"
                  type="text"
                  required
                  placeholder="Message *"
                  className={minimalInputClass}
                />
                {state.errors?.message && <p className="text-[10px] text-red-500 mt-0.5 ml-1">{state.errors.message}</p>}
              </div>

              <ModalSubmitButton />
            </form>
          </div>

          <p className="text-center text-sm text-gray-500 italic mt-6 px-4">
            By submitting this form, you agree to be contacted by our team for admission guidance.
          </p>
        </div>
      )}
    </Modal>
  );
}

export default EnquiryModal;
