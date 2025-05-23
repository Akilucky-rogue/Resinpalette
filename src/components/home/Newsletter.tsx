import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend service
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section className="bg-neutral-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-neutral-900">Join Our Community</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Subscribe to receive updates about new collections, special offers, and creative inspiration.
          </p>
          
          {isSubmitted ? (
            <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-md">
              <p>Thank you for subscribing! We've sent a confirmation email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="shrink-0"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                By subscribing, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;