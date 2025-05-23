import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Palette } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-medium tracking-tight flex items-center gap-2">
              <Palette className="text-amber-500" />
              ResinPalette
            </Link>
            <p className="mt-4 text-neutral-600 max-w-xs">
              Custom and handcrafted resin art pieces for the modern home. Bringing your vision to life with color and creativity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-neutral-600 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-neutral-600 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-600 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-neutral-600 hover:text-amber-500 transition-colors">All Products</Link></li>
              <li><Link to="/custom" className="text-neutral-600 hover:text-amber-500 transition-colors">Custom Design</Link></li>
              <li><Link to="/products?category=coasters" className="text-neutral-600 hover:text-amber-500 transition-colors">Coasters</Link></li>
              <li><Link to="/products?category=trays" className="text-neutral-600 hover:text-amber-500 transition-colors">Trays</Link></li>
              <li><Link to="/products?category=art" className="text-neutral-600 hover:text-amber-500 transition-colors">Wall Art</Link></li>
              <li><Link to="/products?category=decor" className="text-neutral-600 hover:text-amber-500 transition-colors">Home Decor</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-600 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-600 hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-neutral-600 hover:text-amber-500 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-neutral-600 hover:text-amber-500 transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-neutral-600 hover:text-amber-500 transition-colors">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-600 mb-4">
              Subscribe to our newsletter for new products, custom design tips, and inspiration.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © {currentYear} ResinPalette. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-neutral-500 hover:text-amber-500 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-neutral-500 hover:text-amber-500 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;