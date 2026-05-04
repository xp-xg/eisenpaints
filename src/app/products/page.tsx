import React from 'react';
import ProductCard from '@/components/ProductCard';

const categories = [
  {
    title: "Interior Paints",
    description: "Premium finishes for your indoor spaces, combining beauty with durability.",
    products: [
      {
        name: "Vinyl Silk Emulsion",
        category: "Interior",
        description: "Smooth silky finish, highly washable and durable. Perfect for high-traffic areas.",
        image: "/images/products/vinyl silk emulsion interior finish.png"
      },
      {
        name: "Vinyl Matt Emulsion",
        category: "Interior",
        description: "Elegant non-reflective finish that hides surface imperfections beautifully.",
        image: "/images/products/vinyl matt interior exterior.png"
      },
      {
        name: "Wall Cover Matt Emulsion",
        category: "Interior",
        description: "High-opacity matt finish for a clean and professional look.",
        image: "/images/products/wall cover matt interior.png"
      }
    ]
  },
  {
    title: "Exterior Paints",
    description: "Maximum protection against the elements with long-lasting color.",
    products: [
      {
        name: "Exterio",
        category: "Exterior",
        description: "Silicon-based all-weather protection. Repels water while allowing walls to breathe.",
        image: "/images/products/exterio exterior.png"
      },
      {
        name: "Tuff Tex",
        category: "Exterior",
        description: "Hard-wearing rough textured coating for a modern, rugged architectural look.",
        image: "/images/products/tuff tex exterior.png"
      }
    ]
  },
  {
    title: "Specialty & Preparation",
    description: "Essential products for surface correction and specialized finishes.",
    products: [
      {
        name: "Skimfiller",
        category: "Surface Prep",
        description: "White cement-based putty for correcting unevenness on interior and exterior walls.",
        image: "/images/products/skimfiller.jpg"
      },
      {
        name: "Water Repellent",
        category: "Specialty",
        description: "Invisible primer for mineral substrates that prevents water penetration.",
        image: "/images/products/water repellant.jpg"
      },
      {
        name: "Super Gloss",
        category: "Specialty",
        description: "Oil-based extra glossy finish for wood and metal surfaces.",
        image: "/images/products/super gloss interior exterior.png"
      }
    ]
  }
];

const ProductsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="bg-brand-navy py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Product Catalog</h1>
          <p className="text-life-cyan text-xl font-medium tracking-wide uppercase">
            German Technology • Kenyan Pride • African Excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((cat, index) => (
          <div key={index} className="mb-24 last:mb-0">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">{cat.title}</h2>
              <p className="text-gray-600 max-w-2xl">{cat.description}</p>
              <div className="w-20 h-1 bg-life-cyan mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cat.products.map((product, pIndex) => (
                <ProductCard key={pIndex} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge Section */}
      <section className="mt-24 py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-12 opacity-70">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🇩🇪</div>
              <span className="font-bold text-brand-navy">German Technology</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🇰🇪</div>
              <span className="font-bold text-brand-navy">Proudly Kenyan</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <span className="font-bold text-brand-navy">KEBS Certified</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🌿</div>
              <span className="font-bold text-brand-navy">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
