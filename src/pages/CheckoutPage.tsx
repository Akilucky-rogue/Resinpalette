import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    // Update page title
    document.title = 'Checkout | LuminResin';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Redirect to cart if cart is empty
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    }
    
    if (currentStep === 2) {
      if (!formData.cardName) newErrors.cardName = 'Name on card is required';
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Card number is invalid';
      }
      if (!formData.expMonth) newErrors.expMonth = 'Expiration month is required';
      if (!formData.expYear) newErrors.expYear = 'Expiration year is required';
      if (!formData.cvv) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV is invalid';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      // In a real app, you would process the payment and create the order here
      
      // Simulate order placement
      setTimeout(() => {
        clearCart();
        navigate('/checkout/success');
      }, 1500);
    }
  };
  
  const shippingCost = total >= 100 ? 0 : 10;
  const tax = total * 0.08;
  const orderTotal = total + shippingCost + tax;
  
  return (
    <div className="pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-8">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 1 ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-500'
              }`}>
                1
              </div>
              <span className="text-sm text-neutral-600">Shipping</span>
            </div>
            
            <div className="flex-1 h-1 mx-2 bg-neutral-200">
              <div 
                className="h-full bg-amber-500 transition-all" 
                style={{ width: step >= 2 ? '100%' : '0%' }}
              />
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 2 ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-500'
              }`}>
                2
              </div>
              <span className="text-sm text-neutral-600">Payment</span>
            </div>
            
            <div className="flex-1 h-1 mx-2 bg-neutral-200">
              <div 
                className="h-full bg-amber-500 transition-all" 
                style={{ width: step >= 3 ? '100%' : '0%' }}
              />
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 3 ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-500'
              }`}>
                3
              </div>
              <span className="text-sm text-neutral-600">Review</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmitOrder}>
                {/* Step 1: Shipping Information */}
                {step === 1 && (
                  <div>
                    <h2 className="text-lg font-medium text-neutral-900 mb-4">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.firstName ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.lastName ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.address ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.city ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                          State/Province *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.state ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
                          ZIP/Postal Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.zipCode ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.zipCode && (
                          <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button
                        variant="primary"
                        onClick={handleNextStep}
                        className="flex items-center gap-2"
                      >
                        Continue to Payment
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Payment Information */}
                {step === 2 && (
                  <div>
                    <h2 className="text-lg font-medium text-neutral-900 mb-4">Payment Information</h2>
                    
                    <div className="mb-4 flex items-center border border-neutral-300 rounded-md p-3 bg-neutral-50">
                      <CreditCard size={20} className="text-neutral-600 mr-2" />
                      <span className="text-sm text-neutral-700">Secure Payment Processing</span>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.cardName ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.cardName && (
                        <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 mb-1">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.cardNumber ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <label htmlFor="expMonth" className="block text-sm font-medium text-neutral-700 mb-1">
                          Exp. Month *
                        </label>
                        <select
                          id="expMonth"
                          name="expMonth"
                          value={formData.expMonth}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.expMonth ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        >
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = i + 1;
                            return (
                              <option key={month} value={month.toString().padStart(2, '0')}>
                                {month.toString().padStart(2, '0')}
                              </option>
                            );
                          })}
                        </select>
                        {errors.expMonth && (
                          <p className="mt-1 text-sm text-red-500">{errors.expMonth}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="expYear" className="block text-sm font-medium text-neutral-700 mb-1">
                          Exp. Year *
                        </label>
                        <select
                          id="expYear"
                          name="expYear"
                          value={formData.expYear}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.expYear ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                        {errors.expYear && (
                          <p className="mt-1 text-sm text-red-500">{errors.expYear}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-neutral-700 mb-1">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="XXX"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.cvv ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.cvv && (
                          <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center p-3 bg-neutral-50 border border-neutral-300 rounded-md">
                      <Shield size={20} className="text-green-600 mr-2" />
                      <p className="text-sm text-neutral-700">
                        Your payment information is secure and encrypted
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                      >
                        Back to Shipping
                      </Button>
                      
                      <Button
                        variant="primary"
                        onClick={handleNextStep}
                        className="flex items-center gap-2"
                      >
                        Review Order
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Order Review */}
                {step === 3 && (
                  <div>
                    <h2 className="text-lg font-medium text-neutral-900 mb-4">Review Your Order</h2>
                    
                    <div className="border-b border-neutral-200 pb-6 mb-6">
                      <h3 className="text-sm font-medium text-neutral-900 mb-2">Shipping Information</h3>
                      <div className="text-sm text-neutral-600">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                        <p>{formData.email}</p>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="mt-2 text-sm text-amber-600 hover:text-amber-700"
                      >
                        Edit
                      </button>
                    </div>
                    
                    <div className="border-b border-neutral-200 pb-6 mb-6">
                      <h3 className="text-sm font-medium text-neutral-900 mb-2">Payment Method</h3>
                      <div className="text-sm text-neutral-600">
                        <p>{formData.cardName}</p>
                        <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                        <p>Expires {formData.expMonth}/{formData.expYear}</p>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="mt-2 text-sm text-amber-600 hover:text-amber-700"
                      >
                        Edit
                      </button>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900 mb-3">Order Items</h3>
                      
                      <div className="space-y-4 mb-4">
                        {items.map((item) => (
                          <div key={item.product.id} className="flex gap-4">
                            <div className="w-16 h-16 bg-neutral-100 rounded overflow-hidden shrink-0">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-neutral-900">
                                {item.product.name}
                              </h4>
                              <p className="text-sm text-neutral-500">
                                Quantity: {item.quantity}
                              </p>
                              <p className="text-sm font-medium text-neutral-900">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                      >
                        Back to Payment
                      </Button>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        className="flex items-center gap-2"
                      >
                        Place Order
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium text-neutral-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-neutral-100 rounded overflow-hidden shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-neutral-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    
                    <div className="text-sm font-medium text-neutral-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="text-neutral-900">${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="text-neutral-900">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax (8%)</span>
                  <span className="text-neutral-900">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-neutral-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-neutral-900">Total</span>
                    <span className="text-neutral-900">${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;