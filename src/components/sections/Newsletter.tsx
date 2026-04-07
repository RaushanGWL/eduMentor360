import { useActionState, useOptimistic, useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Bell } from 'lucide-react';
import type { NewsletterFormState } from '../../types';
import { validateEmail } from '../../utils/helpers';

const initialState: NewsletterFormState = { success: false, message: '', email: '' };

async function subscribeAction(
  _prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const email = (formData.get('email') as string)?.trim();
  const error = validateEmail(email);
  if (error) return { success: false, message: error, email };

  // Simulate async subscription
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { success: true, message: `🎉 You're subscribed! Check ${email} for our welcome email.`, email };
}

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex-shrink-0 px-6 py-3.5 bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 shadow-md hover:shadow-glow-orange whitespace-nowrap"
      aria-label={pending ? 'Subscribing...' : 'Subscribe to newsletter'}
    >
      {pending ? (
        <>
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Subscribing...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" aria-hidden="true" />
          Subscribe
        </>
      )}
    </button>
  );
}

export function Newsletter() {
  const [state, formAction] = useActionState(subscribeAction, initialState);
  const [, startTransition] = useTransition();
  const [optimisticState, setOptimistic] = useOptimistic(
    state,
    (_current, _value: string) => ({ success: false, message: 'Subscribing you to our newsletter...', email: _value })
  );

  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email') as string;
    startTransition(() => {
      setOptimistic(email);
    });
    return formAction(formData);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden" aria-label="Newsletter signup">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Content */}
          <div className="text-white text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/90 mb-4">
              <Bell className="w-4 h-4 text-secondary-300" aria-hidden="true" />
              Stay Informed
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-200 text-base">
              Join 2,000+ students getting weekly insights on admissions, scholarships, and career guidance.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" aria-hidden="true" />
                <p className="font-medium text-sm">{state.message}</p>
              </motion.div>
            ) : (
              <>
                {optimisticState.message && !optimisticState.success && (
                  <div role="status" aria-live="polite" className="mb-3 text-sm text-primary-200 text-center lg:text-left">
                    {optimisticState.message}
                  </div>
                )}
                <form action={handleSubmit} noValidate>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                      <input
                        id="newsletter-email"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        aria-required="true"
                        aria-describedby={state.message && !state.success ? 'newsletter-error' : undefined}
                        defaultValue={state.email}
                        className="w-full px-4 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white placeholder:text-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                      />
                    </div>
                    <SubscribeButton />
                  </div>
                  {state.message && !state.success && (
                    <p id="newsletter-error" className="mt-2 text-sm text-red-300" role="alert">
                      {state.message}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-primary-300 text-center lg:text-left">
                    No spam, ever. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
