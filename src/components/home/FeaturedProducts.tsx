import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../product/ProductGrid';
import Button from '../ui/Button';
import { useProducts } from '../../hooks/useProducts';

const FeaturedProducts: React.FC = () => {
  const { products, loading, error } = useProducts({ featured: true, limit: 4 });
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="animate-pulse h-8 w-64 bg-neutral-200 rounded mx-auto mb-4"></div>
          <div className="animate-pulse h-4 w-96 bg-neutral-200 rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-h-1 aspect-w-1 bg-neutral-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500">Failed to load featured products.</p>
      </div>
    );
  }
  
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <ProductGrid 
          products={products} 
          title="Featured Collection"
          subtitle="Discover our most popular handcrafted resin pieces, each one unique and made with care."
        />
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;