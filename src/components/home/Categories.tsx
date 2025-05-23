import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'coasters',
    name: 'Coasters',
    description: 'Elegant coaster sets for your home',
    image: 'https://images.pexels.com/photos/5702405/pexels-photo-5702405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'trays',
    name: 'Serving Trays',
    description: 'Beautiful trays for serving and display',
    image: 'https://images.pexels.com/photos/5702326/pexels-photo-5702326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'art',
    name: 'Wall Art',
    description: 'Statement pieces for your walls',
    image: 'https://images.pexels.com/photos/7005695/pexels-photo-7005695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'decor',
    name: 'Home Decor',
    description: 'Accent pieces to elevate your space',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-neutral-900">Shop by Category</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Explore our handcrafted resin collections designed to bring beauty and function to your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group block overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 bg-neutral-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-medium">{category.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;