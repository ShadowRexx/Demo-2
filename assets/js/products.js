// ============================================
// PRIME SHOE JERSEY HUB — Product Data v2
// ============================================

const PRODUCTS = [
  // ---- JERSEYS ----
  {
    id: 1, name: 'Real Madrid Home Kit 2025', slug: 'real-madrid-home-2025',
    category: 'jersey', brand: 'Adidas', price: 1299, originalPrice: 1799, stock: 5,
    rating: 4.9, reviews: 312, badge: 'bestseller', featured: true,
    images: ['assets/images/product1.jpg','assets/images/product1(2).jpg','assets/images/product1(3).jpg'],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Gear up in the legendary white of Real Madrid. Crafted with Adidas AeroReady technology for breathability and comfort. Official 2025/26 home kit with authentic badge and sponsor detailing.',
    features: ['AeroReady breathable fabric','Authentic club badge','Regular fit','Moisture-wicking','Machine washable'],
    specs: { Club:'Real Madrid', Season:'2025/26', Type:'Home Kit', Material:'Polyester', Fit:'Regular' },
  },
  {
    id: 2, name: 'Barcelona Away Jersey 2025', slug: 'barcelona-away-2025',
    category: 'jersey', brand: 'Nike', price: 1199, originalPrice: 1599, stock: 12,
    rating: 4.7, reviews: 187, badge: 'new', featured: true,
    images: ['assets/images/product2.jpg','assets/images/product2(2).jpg','assets/images/product2(3).jpg'],
    sizes: ['S','M','L','XL'],
    description: "Show your Barça pride with the stunning 2025 away jersey. Nike Dri-FIT technology keeps you cool. The iconic Blaugrana crest printed with precision.",
    features: ['Nike Dri-FIT','Slim athletic fit','Quick-dry fabric','Authentic crest','Official 2025/26'],
    specs: { Club:'FC Barcelona', Season:'2025/26', Type:'Away Kit', Material:'Dri-FIT', Fit:'Slim' },
  },
  {
    id: 3, name: 'PSG Black Edition Kit', slug: 'psg-black-edition',
    category: 'jersey', brand: 'Jordan', price: 1499, originalPrice: 1999, stock: 8,
    rating: 4.9, reviews: 246, badge: 'bestseller', featured: true,
    images: ['assets/images/product3.jpg','assets/images/product3(2).jpg','assets/images/product3(3).jpg'],
    sizes: ['S','M','L','XL','XXL'],
    description: "Paris Saint-Germain's stunning black edition — where fashion meets football. Jordan x PSG collaboration with premium fabric.",
    features: ['Jordan x PSG collab','Eiffel Tower logo','Premium fabric','Limited edition',"Collector's item"],
    specs: { Club:'PSG', Season:'2024/25', Type:'Special Edition', Material:'Jordan Dri-FIT', Fit:'Regular' },
  },
  {
    id: 4, name: 'Brazil National Team Jersey', slug: 'brazil-national-2025',
    category: 'jersey', brand: 'Nike', price: 1099, originalPrice: 1499, stock: 20,
    rating: 4.6, reviews: 128, badge: 'new', featured: false,
    images: ['assets/images/product4.jpg','assets/images/product4(2).jpg','assets/images/product4(3).jpg'],
    sizes: ['S','M','L','XL'],
    description: "The iconic Canary Yellow of Brazil. Wear the colours of Pelé, Ronaldo and Neymar. Premium polyester with moisture-wicking finish.",
    features: ['Iconic Canary Yellow','Authentic CBF crest','Dri-FIT technology','Moisture-wicking','Perfect for Indian summer'],
    specs: { Team:'Brazil National', Season:'2025/26', Type:'Home Kit', Material:'Dri-FIT', Fit:'Regular' },
  },
  {
    id: 5, name: 'Arsenal Red Home Kit 2025', slug: 'arsenal-red-2025',
    category: 'jersey', brand: 'Adidas', price: 1249, originalPrice: 1699, stock: 7,
    rating: 4.7, reviews: 156, badge: 'sale', featured: true,
    images: ['assets/images/product5.jpg','assets/images/product1.jpg'],
    sizes: ['S','M','L','XL','XXL'],
    description: "The Gunners' iconic red and white. Adidas ClimaCool keeps you cool. Featuring the iconic cannon badge on premium fabric.",
    features: ['ClimaCool fabric','Arsenal cannon badge','Red & white design','Regular fit','2025/26 home kit'],
    specs: { Club:'Arsenal FC', Season:'2025/26', Type:'Home Kit', Material:'ClimaCool', Fit:'Regular' },
  },
  {
    id: 6, name: 'Manchester City Blue Kit', slug: 'man-city-home-2025',
    category: 'jersey', brand: 'Mizuno', price: 1349, originalPrice: 1799, stock: 3,
    rating: 4.8, reviews: 94, badge: 'sale', featured: false,
    images: ['assets/images/product6.jpg','assets/images/product5.jpg'],
    sizes: ['S','M','L','XL'],
    description: "Sky blue iconic home kit. Mizuno DryCELL technology for moisture management. Crafted for champions.",
    features: ['DryCELL technology','Sky blue colour','Regular fit','Breathable mesh','2025/26 edition'],
    specs: { Club:'Manchester City', Season:'2025/26', Type:'Home Kit', Material:'DryCELL', Fit:'Regular' },
  },
  // ---- SHOES ----
  {
    id: 7, name: 'Nike Mercurial Vapor 15 FG', slug: 'nike-mercurial-vapor-15',
    category: 'shoes', brand: 'Nike', price: 3499, originalPrice: 4599, stock: 4,
    rating: 4.9, reviews: 203, badge: 'bestseller', featured: true,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85','https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=85'],
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10','UK 11'],
    description: "Built for speed. Vaporposite upper for a sock-like fit. Acc technology for All Conditions Control.",
    features: ['Vaporposite upper','Acc technology','Conical studs','Sock-like fit','Firm Ground'],
    specs: { Brand:'Nike', Model:'Mercurial Vapor 15', Surface:'FG', Upper:'Vaporposite', Weight:'180g' },
  },
  {
    id: 8, name: 'Adidas Predator Edge FG', slug: 'adidas-predator-edge',
    category: 'shoes', brand: 'Adidas', price: 3299, originalPrice: 4299, stock: 9,
    rating: 4.7, reviews: 156, badge: 'new', featured: true,
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85'],
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10'],
    description: "Control the game with Zone Skin technology for enhanced ball control. Strap system for locked-in feel.",
    features: ['Zone Skin','Control strap','Hybrid studs','Enhanced grip','Firm Ground'],
    specs: { Brand:'Adidas', Model:'Predator Edge', Surface:'FG', Upper:'Zone Skin', Weight:'220g' },
  },
  {
    id: 9, name: 'Mizuno Future Z 1.4 FG', slug: 'mizuno-future-z',
    category: 'shoes', brand: 'Mizuno', price: 2899, originalPrice: 3799, stock: 6,
    rating: 4.6, reviews: 89, badge: 'sale', featured: false,
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=800&q=85','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85'],
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10'],
    description: "Instinct meets innovation. FUZIONFIT+ bandage for adaptive support. Asymmetric lacing for wider strike zone.",
    features: ['FUZIONFIT+ bandage','Asymmetric lacing','GripControl studs','Adaptive support','Agile design'],
    specs: { Brand:'Mizuno', Model:'Future Z 1.4', Surface:'FG', Upper:'FUZIONFIT+', Weight:'195g' },
  },
  {
    id: 10, name: 'Nike Phantom GX FG', slug: 'nike-phantom-gx',
    category: 'shoes', brand: 'Nike', price: 3799, originalPrice: 4999, stock: 3,
    rating: 4.8, reviews: 178, badge: 'bestseller', featured: false,
    images: ['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=85','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85'],
    sizes: ['UK 7','UK 8','UK 9','UK 10','UK 11'],
    description: "The striker's weapon. Textured upper for enhanced first touch. Ghost Lace for uninterrupted strike zones.",
    features: ['Ghost Lace system','Textured upper','Bladed studs','Clinical finish','Firm Ground'],
    specs: { Brand:'Nike', Model:'Phantom GX', Surface:'FG', Upper:'Ghost Lace', Weight:'210g' },
  },
  {
    id: 11, name: 'Adidas Copa Mundial Classic', slug: 'adidas-copa-mundial',
    category: 'shoes', brand: 'Adidas', price: 2799, originalPrice: 3599, stock: 15,
    rating: 4.7, reviews: 112, badge: 'new', featured: false,
    images: ['https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=85','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85'],
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10','UK 11'],
    description: "A classic reborn. Premium leather upper for unmatched touch. Worn by legends across generations.",
    features: ['Premium leather','Timeless design','Conical studs','Classic comfort','Worn by legends'],
    specs: { Brand:'Adidas', Model:'Copa Mundial', Surface:'FG', Upper:'Premium Leather', Weight:'280g' },
  },
  // ---- ACCESSORIES ----
  {
    id: 12, name: 'Pro Goalkeeper Gloves', slug: 'pro-goalkeeper-gloves',
    category: 'accessories', brand: 'Mizuno', price: 699, originalPrice: 999, stock: 25,
    rating: 4.5, reviews: 67, badge: 'new', featured: false,
    images: ['https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=85','https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85'],
    sizes: ['Size 7','Size 8','Size 9','Size 10'],
    description: "Professional GK gloves. Negative cut for tight feel. Latex palm for superior grip in all conditions.",
    features: ['Negative cut','Flat latex palm','Foam padding','Adjustable wrist','Training/Match'],
    specs: { Type:'GK Gloves', Cut:'Negative', Palm:'Flat Latex', Use:'Training/Match' },
  },
  {
    id: 13, name: 'Premium Match Football', slug: 'premium-match-football',
    category: 'accessories', brand: 'Nike', price: 1499, originalPrice: 1999, stock: 18,
    rating: 4.8, reviews: 214, badge: 'bestseller', featured: false,
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85','https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=85'],
    sizes: ['Size 4','Size 5'],
    description: "Match-grade football. 32-panel thermally bonded. FIFA approved. Waterproof coating for all-weather performance.",
    features: ['32-panel bonded','FIFA inspected','Waterproof','Latex bladder','All conditions'],
    specs: { Type:'Match Football', Panels:'32', Size:'4 or 5', Approval:'FIFA Inspected' },
  },
  {
    id: 14, name: 'Pro Series Shin Guards', slug: 'pro-shin-guards',
    category: 'accessories', brand: 'Mizuno', price: 499, originalPrice: 699, stock: 30,
    rating: 4.4, reviews: 43, badge: 'sale', featured: false,
    images: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=85'],
    sizes: ['S','M','L','XL'],
    description: "High-density PE shell absorbs impact. EVA foam for comfort. Lightweight and low-profile.",
    features: ['High-density PE','EVA foam','Lightweight','Ankle straps','Low-profile'],
    specs: { Type:'Shin Guards', Shell:'PE', Backing:'EVA Foam', Weight:'120g/pair' },
  },
];

// ---- HELPERS ----
function getProductById(id) { return PRODUCTS.find(p => p.id === parseInt(id)); }
function getProductsByCategory(cat) { return cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat); }
function getFeaturedProducts() { return PRODUCTS.filter(p => p.featured); }
function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, limit);
}
function getDiscountPct(product) {
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}
function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }

const BADGE_CONFIG = {
  bestseller: { label: 'Best Seller', cls: 'badge-blue' },
  new:        { label: 'New',         cls: 'badge-white' },
  sale:       { label: 'Sale',        cls: 'badge-red' },
};

// Reviews stored in localStorage
function getReviews(productId) {
  try { return JSON.parse(localStorage.getItem(`reviews_${productId}`) || '[]'); }
  catch(e) { return []; }
}
function saveReview(productId, review) {
  const reviews = getReviews(productId);
  reviews.unshift(review);
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
}
