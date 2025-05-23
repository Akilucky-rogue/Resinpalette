import { useState, useEffect } from 'react';
import products from '../data/products';
import { Product } from '../types';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      try {
        const foundProduct = products.find(p => p.id === id) || null;
        
        if (foundProduct) {
          setProduct(foundProduct);
          setLoading(false);
        } else {
          setError('Product not found');
          setLoading(false);
        }
      } catch (err) {
        setError('Error fetching product');
        setLoading(false);
      }
    }, 800); // Simulate loading delay
    
    return () => clearTimeout(timer);
  }, [id]);
  
  return {
    product,
    loading,
    error
  };
};