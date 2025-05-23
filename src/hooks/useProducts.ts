import { useState, useEffect } from 'react';
import products from '../data/products';
import { Product } from '../types';

interface UseProductsParams {
  category?: string;
  featured?: boolean;
  limit?: number;
  sort?: string;
  search?: string;
  exclude?: number[];
}

export const useProducts = ({
  category,
  featured,
  limit,
  sort = 'latest',
  search = '',
  exclude = [],
}: UseProductsParams = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      try {
        // Filter products
        let result = [...products];
        
        // Filter by category
        if (category) {
          result = result.filter(product => product.category === category);
        }
        
        // Filter by featured
        if (featured) {
          result = result.filter(product => product.isFeatured);
        }
        
        // Filter by search term
        if (search) {
          const searchLower = search.toLowerCase();
          result = result.filter(product => 
            product.name.toLowerCase().includes(searchLower) || 
            product.description.toLowerCase().includes(searchLower) ||
            product.category.toLowerCase().includes(searchLower)
          );
        }
        
        // Exclude specific products
        if (exclude.length > 0) {
          result = result.filter(product => !exclude.includes(product.id));
        }
        
        // Sort products
        switch (sort) {
          case 'price-low':
            result.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            result.sort((a, b) => b.price - a.price);
            break;
          case 'popular':
            result.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
          case 'rating':
            result.sort((a, b) => b.rating - a.rating);
            break;
          case 'latest':
          default:
            // Assume newer products have higher IDs
            result.sort((a, b) => b.id - a.id);
            break;
        }
        
        // Limit results
        if (limit && limit > 0) {
          result = result.slice(0, limit);
        }
        
        setFilteredProducts(result);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    }, 800); // Simulate loading delay
    
    return () => clearTimeout(timer);
  }, [category, featured, limit, sort, search, exclude]);
  
  return {
    products: filteredProducts,
    loading,
    error
  };
};