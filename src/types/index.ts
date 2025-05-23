// Product Types
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  features?: string[];
  options?: string[];
}