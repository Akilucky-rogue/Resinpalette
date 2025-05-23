import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-neutral-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10 flex items-center justify-center">
            <div className="translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <button
                onClick={handleAddToCart}
                className="bg-white rounded-full p-3 mx-2 shadow-md hover:bg-amber-500 hover:text-white transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart size={18} />
              </button>
              <button
                className="bg-white rounded-full p-3 mx-2 shadow-md hover:bg-rose-500 hover:text-white transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>
          </div>
        </Link>
      </div>
      
      {product.isNew && (
        <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
          New
        </div>
      )}
      
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 bg-rose-500 text-white text-xs px-2 py-1 rounded">
          {product.discount}% Off
        </div>
      )}
      
      <div className="mt-4">
        <h3 className="text-sm font-medium text-neutral-900">
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
        <div className="mt-2 flex items-center">
          {product.discount > 0 ? (
            <>
              <span className="text-sm font-medium text-neutral-900">
                ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
              </span>
              <span className="ml-2 text-sm font-medium text-neutral-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium text-neutral-900">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;