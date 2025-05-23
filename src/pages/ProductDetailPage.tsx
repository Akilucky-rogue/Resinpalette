import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, ChevronRight, ShoppingCart } from 'lucide-react';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import ProductGrid from '../components/product/ProductGrid';
import { useCart } from '../context/CartContext';
import { useProduct } from '../hooks/useProduct';
import { useProducts } from '../hooks/useProducts';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const productId = parseInt(id || '0');
  const { product, loading, error } = useProduct(productId);
  const { products: relatedProducts } = useProducts({ 
    category: product?.category,
    exclude: [productId],
    limit: 4
  });
  
  useEffect(() => {
    // Update page title
    if (product) {
      document.title = `${product.name} | LuminResin`;
    }
    
    // Reset state when product changes
    setActiveImage(0);
    setQuantity(1);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [product]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // In a real app, you might show a toast notification or modal here
    }
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-w-1 aspect-h-1 bg-neutral-200 rounded-lg"></div>
            <div>
              <div className="h-8 bg-neutral-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-neutral-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-3/4 mb-8"></div>
              <div className="h-12 bg-neutral-200 rounded w-full mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-red-500">Product not found or error loading product details.</p>
        <div className="mt-8">
          <Button variant="outline">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Breadcrumbs */}
      <div className="bg-neutral-50 py-4 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-neutral-600 hover:text-neutral-900">Home</Link>
            <ChevronRight size={16} className="mx-2 text-neutral-400" />
            <Link to="/products" className="text-neutral-600 hover:text-neutral-900">Products</Link>
            <ChevronRight size={16} className="mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-w-1 aspect-h-1 bg-neutral-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-w-1 aspect-h-1 rounded overflow-hidden border-2 ${
                      i === activeImage ? 'border-amber-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${i + 1}`}
                      className="w-full h-full object-center object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-medium text-neutral-900">{product.name}</h1>
            
            {/* Price */}
            <div className="mt-4 flex items-center">
              {product.discount > 0 ? (
                <>
                  <span className="text-2xl font-medium text-neutral-900">
                    ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                  </span>
                  <span className="ml-3 text-lg font-medium text-neutral-400 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-rose-100 text-rose-800 text-sm px-2 py-0.5 rounded">
                    {product.discount}% Off
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium text-neutral-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-neutral-600">{product.reviewCount} reviews</span>
            </div>
            
            {/* Description */}
            <div className="mt-6">
              <p className="text-neutral-600">{product.description}</p>
            </div>
            
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-6">
                <h2 className="text-sm font-medium text-neutral-900">Features</h2>
                <ul className="mt-2 list-disc pl-5 text-neutral-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Available Options (if applicable) */}
            {product.options && product.options.length > 0 && (
              <div className="mt-6">
                <h2 className="text-sm font-medium text-neutral-900">Options</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.options.map((option, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 border border-neutral-300 rounded-md hover:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Add to Cart */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(prev => Math.min(prev + 1, 10))}
                  onDecrease={() => setQuantity(prev => Math.max(prev - 1, 1))}
                />
                
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </Button>
              </div>
            </div>
            
            {/* Shipping Info */}
            <div className="mt-8 p-4 bg-neutral-50 rounded-md">
              <h3 className="text-sm font-medium text-neutral-900">Shipping Information</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Free shipping on orders over $100. Standard delivery in 3-5 business days.
              </p>
            </div>
            
            {/* Social Sharing */}
            <div className="mt-8 flex items-center gap-4">
              <button className="flex items-center text-neutral-600 hover:text-neutral-900">
                <Heart size={18} className="mr-1" />
                <span className="text-sm">Save</span>
              </button>
              
              <button className="flex items-center text-neutral-600 hover:text-neutral-900">
                <Share2 size={18} className="mr-1" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-amber-500 py-4 px-1 text-sm font-medium text-amber-600">
                Product Details
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-neutral-600 hover:text-neutral-700 hover:border-neutral-300">
                Shipping & Returns
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-neutral-600 hover:text-neutral-700 hover:border-neutral-300">
                Reviews
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            <div className="prose prose-neutral max-w-none">
              <p>
                Our {product.name} is meticulously handcrafted using high-quality resin and thoughtfully selected materials. Each piece is unique, with slight variations in pattern and color that showcase its handmade nature.
              </p>
              <p>
                This versatile piece combines beauty and function, making it perfect for everyday use or special occasions. The smooth, polished finish enhances the intricate patterns and colors within the resin.
              </p>
              <h3>Care Instructions</h3>
              <ul>
                <li>Clean with a soft, damp cloth</li>
                <li>Avoid harsh chemicals or abrasive cleaners</li>
                <li>Keep away from direct sunlight for prolonged periods</li>
                <li>Handle with care to avoid scratching the surface</li>
              </ul>
              <p>
                Due to the handcrafted nature of this product, please allow for slight variations in color, pattern, and dimensions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <ProductGrid
              products={relatedProducts}
              title="You May Also Like"
              subtitle="Explore more handcrafted resin pieces from our collection."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;