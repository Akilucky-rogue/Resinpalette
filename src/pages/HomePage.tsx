import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'LuminResin | Handcrafted Resin Art & Home Decor';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;