import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Interior Designer',
    content: 'These resin pieces have transformed my clients\' spaces. The quality and craftsmanship are exceptional, and the colors are even more vibrant in person.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Home Owner',
    content: 'I purchased a set of coasters and they\'re not only functional but also conversation starters. The unique patterns make each piece special.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Art Collector',
    content: 'The wall art I ordered is absolutely stunning. The way it catches the light throughout the day creates a dynamic focal point in my living room.',
    rating: 4,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-neutral-900">What Our Customers Say</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-neutral-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'}
                  />
                ))}
              </div>
              
              <p className="text-neutral-700 italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;