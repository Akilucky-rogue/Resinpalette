import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-neutral-50 overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-tight">
              Handcrafted <span className="font-medium">Resin Art</span> for Your Space
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-lg">
              Discover our collection of elegant, one-of-a-kind resin pieces that bring light, color, and beauty to your home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => {}}
                className="shadow-sm"
              >
                <Link to="/products">Shop Collection</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {}}
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-4 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5702385/pexels-photo-5702385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Colorful resin artwork"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-200 blur-3xl opacity-30"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-200 blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;