import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useProducts } from '../hooks/useProducts';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'coasters', name: 'Coasters' },
  { id: 'trays', name: 'Serving Trays' },
  { id: 'art', name: 'Wall Art' },
  { id: 'decor', name: 'Home Decor' },
];

const sortOptions = [
  { value: 'latest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'latest';
  
  const { products, loading, error } = useProducts({ 
    category: categoryParam !== 'all' ? categoryParam : undefined,
    sort: sortParam
  });
  
  useEffect(() => {
    // Update page title
    document.title = 'Shop All Products | LuminResin';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleCategoryChange = (categoryId: string) => {
    searchParams.set('category', categoryId);
    setSearchParams(searchParams);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  };
  
  return (
    <div className="pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="py-16 text-center">
          <Heading 
            title="Our Collection" 
            subtitle="Explore our unique handcrafted resin pieces, each designed to bring beauty and function to your home."
            centered
          />
        </div>
        
        {/* Mobile filter dialog */}
        <div className="block lg:hidden mb-6">
          <Button
            variant="outline"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
          </Button>
          
          {filtersOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-25 flex items-end">
              <div className="bg-white w-full rounded-t-xl p-6 animate-slideUp">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <button 
                    onClick={() => setFiltersOpen(false)}
                    className="p-2 hover:bg-neutral-100 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setFiltersOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          categoryParam === category.id
                            ? 'bg-neutral-900 text-white'
                            : 'hover:bg-neutral-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Sort By</h4>
                  <select
                    value={sortParam}
                    onChange={handleSortChange}
                    className="w-full p-2 border border-neutral-300 rounded-md"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="primary" 
                    fullWidth
                    onClick={() => setFiltersOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop sidebar filters */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md ${
                      categoryParam === category.id
                        ? 'bg-neutral-900 text-white'
                        : 'hover:bg-neutral-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <h3 className="text-lg font-medium mb-4">Sort By</h3>
              <select
                value={sortParam}
                onChange={handleSortChange}
                className="w-full p-2 border border-neutral-300 rounded-md"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-h-1 aspect-w-1 bg-neutral-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Error loading products. Please try again later.</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-neutral-600">
                    Showing {products.length} products
                  </p>
                  
                  {/* Mobile sort selector */}
                  <div className="lg:hidden">
                    <select
                      value={sortParam}
                      onChange={handleSortChange}
                      className="p-2 border border-neutral-300 rounded-md text-sm"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <ProductGrid products={products} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;