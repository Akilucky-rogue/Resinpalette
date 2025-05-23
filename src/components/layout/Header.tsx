import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Search, Menu, X, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-medium tracking-tight flex items-center gap-2">
            <Palette className="text-amber-500" />
            ResinPalette
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Shop</Link>
            <Link to="/custom" className="nav-link">Custom Design</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/cart" 
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button 
              className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-neutral-200 animate-slideDown">
            <div className="container mx-auto">
              <form className="flex">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full p-2 border border-neutral-300 focus:border-neutral-500 rounded-l outline-none"
                  autoFocus
                />
                <button 
                  type="submit" 
                  className="bg-neutral-800 text-white px-4 rounded-r hover:bg-neutral-700 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md border-t border-neutral-200 md:hidden animate-slideDown">
            <nav className="container mx-auto py-4">
              <ul className="space-y-4 px-4">
                <li><Link to="/" className="block py-2 hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link to="/products" className="block py-2 hover:text-amber-500 transition-colors">Shop</Link></li>
                <li><Link to="/custom" className="block py-2 hover:text-amber-500 transition-colors">Custom Design</Link></li>
                <li><Link to="/about" className="block py-2 hover:text-amber-500 transition-colors">About</Link></li>
                <li><Link to="/contact" className="block py-2 hover:text-amber-500 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;