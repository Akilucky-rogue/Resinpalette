import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Artisan working with resin"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 right-6 w-56 h-56 bg-neutral-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5708094/pexels-photo-5708094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Close-up of resin work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:pl-10">
            <h2 className="text-3xl font-medium text-neutral-900">Handcrafted with Care</h2>
            <p className="mt-6 text-lg text-neutral-600">
              At LuminResin, we believe in the beauty of handcrafted art. Each piece is carefully created by our artisans, combining traditional techniques with modern design.
            </p>
            <p className="mt-4 text-neutral-600">
              Our resin pieces are designed to bring light, color, and joy to your space. We use only the highest quality materials and environmentally responsible practices.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-neutral-900">Sustainably Sourced</h3>
                  <p className="mt-1 text-sm text-neutral-600">We use eco-friendly materials whenever possible.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-neutral-900">Unique Designs</h3>
                  <p className="mt-1 text-sm text-neutral-600">No two pieces are exactly the same.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-neutral-900">Expert Craftsmanship</h3>
                  <p className="mt-1 text-sm text-neutral-600">Created by skilled artisans with years of experience.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;