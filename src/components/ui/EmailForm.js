import { useState, useEffect } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    if (email && !validateEmail(email)) {
      setValidationError('Invalid email address');
    } else {
      setValidationError('');
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!email || !validateEmail(email)) {
      setStatus({ type: 'error', message: 'Invalid email address' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({ type: 'error', message: data.error });
      } else {
        setStatus({ type: 'success', message: data.message });
        setEmail('');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to subscribe. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full"> {/* Wrapper div */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1 min-w-[240px]">
  <input
    type="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full h-12 px-4 text-base rounded-lg border border-gray-200 focus:border-[#4F7EF7] focus:ring-1 focus:ring-[#4F7EF7] outline-none transition-colors"
    aria-invalid={validationError ? 'true' : 'false'}
  />
</div>
        
        <button
          type="submit"
          disabled={isSubmitting || validationError}
          className="h-12 px-8 text-base font-medium rounded-lg text-white bg-[#10B981] hover:bg-[#10B981]/90 transition-colors disabled:opacity-50 whitespace-nowrap flex items-center justify-center min-w-[120px]"
          tabIndex={0}
        >
          {isSubmitting ? 'Joining...' : 'Join Now'}
        </button>
      </form>

      {/* Messages container */}
      <div className="h-6 mt-2">
        {(status.type === 'error' || validationError) && (
          <p data-testid="error-message" className="text-sm text-red-500">
            {status.type === 'error' ? status.message : validationError}
          </p>
        )}
        {status.type === 'success' && (
          <p data-testid="success-message" className="text-sm text-green-500">
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}
