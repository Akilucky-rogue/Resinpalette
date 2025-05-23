import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();
  
  useEffect(() => {
    // Update page title
    document.title = 'Your Cart | LuminResin';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <ShoppingBag size={48} className="mx-auto text-neutral-400 mb-4" />
            <h2 className="text-xl font-medium text-neutral-900 mb-2">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button variant="primary" size="lg">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-neutral-200">
                  {items.map((item) => (
                    <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 bg-neutral-100 rounded overflow-hidden shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-neutral-900">
                          <Link 
                            to={`/products/${item.product.id}`}
                            className="hover:text-amber-600"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">{item.product.category}</p>
                        
                        <div className="mt-2 flex flex-wrap items-center gap-4 justify-between">
                          <div className="flex items-center gap-4">
                            <QuantitySelector
                              quantity={item.quantity}
                              onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                              onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                              min={1}
                              max={10}
                            />
                            
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-neutral-400 hover:text-red-600 transition-colors p-2"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-base font-medium text-neutral-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-neutral-500">
                              ${item.product.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" size="lg">
                  <Link to="/products" className="flex items-center gap-2">
                    <ShoppingBag size={18} />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-medium text-neutral-900 mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>{total >= 100 ? 'Free' : '$10.00'}</span>
                  </div>
                  
                  <div className="flex justify-between text-neutral-600">
                    <span>Tax (estimated)</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-4 mt-4">
                    <div className="flex justify-between font-medium text-neutral-900">
                      <span>Total</span>
                      <span>${(total + (total < 100 ? 10 : 0) + (total * 0.08)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="primary" size="lg" fullWidth>
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="flex-grow px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
                
                {/* Accepted Payment Methods */}
                <div className="mt-6">
                  <p className="text-sm text-neutral-500 mb-2">We accept:</p>
                  <div className="flex space-x-2">
                    {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                      <div 
                        key={method} 
                        className="px-2 py-1 bg-neutral-100 rounded text-xs text-neutral-600"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;