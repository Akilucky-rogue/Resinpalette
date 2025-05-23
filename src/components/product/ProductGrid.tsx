import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title, 
  subtitle 
}) => {
  return (
    <div className="py-8">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-2xl md:text-3xl font-medium text-neutral-900">{title}</h2>}
          {subtitle && <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;