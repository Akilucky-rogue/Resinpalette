import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Ocean Waves Resin Coaster Set',
    description: 'A set of four elegant coasters inspired by ocean waves. Each coaster features swirls of blue, teal, and white, reminiscent of the sea. Perfect for protecting your surfaces while adding a touch of coastal beauty to your home.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/5708064/pexels-photo-5708064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708067/pexels-photo-5708067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708079/pexels-photo-5708079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'coasters',
    rating: 4.8,
    reviewCount: 124,
    stock: 15,
    isNew: true,
    isFeatured: true,
    features: [
      'Set of 4 handcrafted coasters',
      'Approx. 4 inches (10 cm) in diameter',
      'Cork backing to protect surfaces',
      'Heat-resistant and waterproof',
      'Each piece is unique with slight variations'
    ]
  },
  {
    id: 2,
    name: 'Geode Inspired Serving Tray',
    description: 'This stunning serving tray is inspired by natural geode formations. The beautiful blend of purples, blues, and metallic gold creates an eye-catching centerpiece for your table. Perfect for serving drinks or displaying decorative items.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/5708080/pexels-photo-5708080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708070/pexels-photo-5708070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708073/pexels-photo-5708073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'trays',
    rating: 4.9,
    reviewCount: 86,
    stock: 8,
    isFeatured: true,
    features: [
      'Handcrafted resin serving tray',
      'Approx. 12 x 18 inches (30 x 45 cm)',
      'Ergonomic handles for easy carrying',
      'Food-safe resin finish',
      'Wipe clean with damp cloth'
    ]
  },
  {
    id: 3,
    name: 'Abstract Resin Wall Art',
    description: 'Make a statement with this large abstract resin wall art. The flowing patterns and vibrant colors create a mesmerizing focal point for any room. Each piece is handcrafted and truly one-of-a-kind.',
    price: 249.99,
    images: [
      'https://images.pexels.com/photos/7005695/pexels-photo-7005695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708071/pexels-photo-5708071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708084/pexels-photo-5708084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'art',
    rating: 5.0,
    reviewCount: 42,
    stock: 3,
    isFeatured: true,
    discount: 15,
    features: [
      'Handcrafted resin wall art',
      'Approx. 24 x 36 inches (60 x 90 cm)',
      'Arrives ready to hang',
      'UV-resistant resin for lasting color',
      'Signed by the artist'
    ]
  },
  {
    id: 4,
    name: 'Agate Inspired Trinket Dish',
    description: 'Keep your small treasures organized with this beautiful agate-inspired trinket dish. Perfect for holding jewelry, keys, or small accessories, this dish adds a touch of elegance to your vanity or entryway.',
    price: 29.99,
    images: [
      'https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708085/pexels-photo-5708085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708066/pexels-photo-5708066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.7,
    reviewCount: 156,
    stock: 22,
    isFeatured: true,
    features: [
      'Handcrafted resin trinket dish',
      'Approx. 5 inches (12.5 cm) in diameter',
      'Non-slip base',
      'Multiple color options available',
      'Perfect for jewelry, keys, or small items'
    ]
  },
  {
    id: 5,
    name: 'Marble Effect Resin Bookends',
    description: 'These sophisticated bookends feature a stunning marble effect in neutral tones. The perfect blend of function and style, they\'ll keep your books organized while enhancing your decor.',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/5708090/pexels-photo-5708090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708093/pexels-photo-5708093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708095/pexels-photo-5708095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.6,
    reviewCount: 78,
    stock: 10,
    isNew: true,
    features: [
      'Set of 2 handcrafted bookends',
      'Each approx. 6 x 4 x 3 inches (15 x 10 x 7.5 cm)',
      'Weighted for stability',
      'Non-scratch base',
      'Available in multiple color variations'
    ]
  },
  {
    id: 6,
    name: 'Galaxy Inspired Resin Clock',
    description: 'This stunning wall clock features swirling galaxy-inspired patterns in deep blues, purples, and metallic accents. A functional piece of art that tells time while adding a cosmic touch to your decor.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/5708089/pexels-photo-5708089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708082/pexels-photo-5708082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708086/pexels-photo-5708086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.8,
    reviewCount: 63,
    stock: 7,
    discount: 10,
    features: [
      'Handcrafted resin wall clock',
      '12 inches (30 cm) in diameter',
      'Silent quartz movement',
      'Requires 1 AA battery (included)',
      'Arrives ready to hang'
    ]
  },
  {
    id: 7,
    name: 'Mountain Landscape Resin Painting',
    description: 'Bring the majesty of the mountains into your home with this three-dimensional resin painting. Layers of resin create depth and texture, making the mountain landscape appear to come alive.',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/6695443/pexels-photo-6695443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708076/pexels-photo-5708076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708087/pexels-photo-5708087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'art',
    rating: 4.9,
    reviewCount: 37,
    stock: 4,
    features: [
      'Handcrafted three-dimensional resin painting',
      'Approx. 18 x 24 inches (45 x 60 cm)',
      'Multiple layers create depth and texture',
      'UV-resistant resin for lasting color',
      'Arrives ready to hang'
    ]
  },
  {
    id: 8,
    name: 'Sunset Glow Resin Lamp',
    description: 'This unique table lamp features layers of amber, orange, and gold resin that create a warm, sunset-like glow when illuminated. A perfect accent piece that provides both light and ambiance.',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/5708068/pexels-photo-5708068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708075/pexels-photo-5708075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708088/pexels-photo-5708088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.7,
    reviewCount: 52,
    stock: 9,
    isNew: true,
    features: [
      'Handcrafted resin table lamp',
      'Approx. 12 inches (30 cm) tall',
      'LED light with warm white glow',
      'USB rechargeable (cable included)',
      'Touch-sensitive dimmer switch'
    ]
  },
  {
    id: 9,
    name: 'Botanical Resin Coaster Set',
    description: 'Bring a touch of nature to your table with these beautiful botanical resin coasters. Each coaster features real pressed flowers and leaves preserved in crystal-clear resin, creating a delicate and elegant look.',
    price: 44.99,
    images: [
      'https://images.pexels.com/photos/5702405/pexels-photo-5702405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708065/pexels-photo-5708065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708077/pexels-photo-5708077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'coasters',
    rating: 4.8,
    reviewCount: 92,
    stock: 18,
    features: [
      'Set of 4 handcrafted botanical coasters',
      'Approx. 4 inches (10 cm) in diameter',
      'Features real pressed flowers and leaves',
      'Cork backing to protect surfaces',
      'Each piece is unique with natural variations'
    ]
  },
  {
    id: 10,
    name: 'Abstract Resin Cheese Board',
    description: 'Elevate your entertaining with this stunning abstract resin cheese board. The swirling patterns of blue, white, and gold create a beautiful backdrop for your favorite cheeses and appetizers.',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/5702326/pexels-photo-5702326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708074/pexels-photo-5708074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708081/pexels-photo-5708081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'trays',
    rating: 4.7,
    reviewCount: 68,
    stock: 12,
    discount: 15,
    features: [
      'Handcrafted resin cheese board',
      'Approx. 12 x 8 inches (30 x 20 cm)',
      'Food-safe resin finish',
      'Wipe clean with damp cloth',
      'Includes jute hanging cord for display'
    ]
  },
  {
    id: 11,
    name: 'Crystal Geode Inspired Wall Hooks',
    description: 'These beautiful wall hooks are inspired by crystal geode formations. Each hook features a different color palette and pattern, making them functional pieces of art for your entryway, bathroom, or bedroom.',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708078/pexels-photo-5708078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708083/pexels-photo-5708083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.6,
    reviewCount: 105,
    stock: 20,
    features: [
      'Set of 3 handcrafted wall hooks',
      'Each approx. 3 inches (7.5 cm) in diameter',
      'Sturdy metal hooks with mounting hardware included',
      'Can hold up to 5 lbs (2.2 kg) each',
      'Available in multiple color options'
    ]
  },
  {
    id: 12,
    name: 'Minimalist Resin Desk Organizer',
    description: 'Keep your workspace tidy with this sleek minimalist desk organizer. Featuring compartments for pens, paper clips, and other small office supplies, this organizer combines function with beautiful resin craftsmanship.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/5708091/pexels-photo-5708091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708092/pexels-photo-5708092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5708094/pexels-photo-5708094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'decor',
    rating: 4.5,
    reviewCount: 83,
    stock: 14,
    isNew: true,
    features: [
      'Handcrafted resin desk organizer',
      'Approx. 8 x 4 x 2 inches (20 x 10 x 5 cm)',
      'Multiple compartments for office supplies',
      'Non-slip base',
      'Available in multiple color options'
    ]
  }
];

export default products;