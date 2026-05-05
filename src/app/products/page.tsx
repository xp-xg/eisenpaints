'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  {
    name: "Vinyl Silk Emulsion",
    category: "Interior",
    finish: "Silk",
    surface: "Walls",
    description: "Smooth silky finish, highly washable and durable. Perfect for high-traffic areas.",
    image: "/images/products/vinyl silk emulsion interior finish.png"
  },
  {
    name: "Vinyl Matt Emulsion",
    category: "Interior",
    finish: "Matt",
    surface: "Walls",
    description: "Elegant non-reflective finish that hides surface imperfections beautifully.",
    image: "/images/products/vinyl matt interior exterior.png"
  },
  {
    name: "Wall Cover Matt Emulsion",
    category: "Interior",
    finish: "Matt",
    surface: "Walls",
    description: "High-opacity matt finish for a clean and professional look.",
    image: "/images/products/wall cover matt interior.png"
  },
  {
    name: "Exterio",
    category: "Exterior",
    finish: "Silicon-based",
    surface: "Walls",
    description: "Silicon-based all-weather protection. Repels water while allowing walls to breathe.",
    image: "/images/products/exterio exterior.png"
  },
  {
    name: "Tuff Tex",
    category: "Exterior",
    finish: "Textured",
    surface: "Walls",
    description: "Hard-wearing rough textured coating for a modern, rugged architectural look.",
    image: "/images/products/tuff tex exterior.png"
  },
  {
    name: "Skimfiller",
    category: "Specialty",
    finish: "Smooth",
    surface: "Concrete",
    description: "White cement-based putty for correcting unevenness on interior and exterior walls.",
    image: "/images/products/skimfiller.jpg"
  },
  {
    name: "Water Repellent",
    category: "Specialty",
    finish: "Invisible",
    surface: "Concrete",
    description: "Invisible primer for mineral substrates that prevents water penetration.",
    image: "/images/products/water repellant.jpg"
  },
  {
    name: "Super Gloss",
    category: "Specialty",
    finish: "Gloss",
    surface: "Wood/Metal",
    description: "Oil-based extra glossy finish for wood and metal surfaces.",
    image: "/images/products/super gloss interior exterior.png"
  }
];

const filters = {
  categories: ["All", "Interior", "Exterior", "Specialty"],
  finishes: ["All", "Matt", "Silk", "Gloss", "Textured", "Smooth"],
  surfaces: ["All", "Walls", "Wood/Metal", "Concrete"]
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFinish, setActiveFinish] = useState("All");
  const [activeSurface, setActiveSurface] = useState("All");

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchCat = activeCategory === "All" || product.category === activeCategory;
      const matchFinish = activeFinish === "All" || product.finish === activeFinish;
      const matchSurface = activeSurface === "All" || product.surface === activeSurface;
      return matchCat && matchFinish && matchSurface;
    });
  }, [activeCategory, activeFinish, activeSurface]);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Header with Carousel Image */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/carousel/corousel- ourproducts.png"
          alt="Our Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Product Catalog</h1>
          <p className="text-life-cyan text-xl font-medium tracking-widest uppercase">
            Precision Engineering • Lasting Impressions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-brand-navy font-bold uppercase tracking-wider text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-life-cyan mr-3"></span>
                  Category
                </h3>
                <div className="space-y-2">
                  {filters.categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                        activeCategory === cat 
                        ? 'bg-brand-navy text-white font-bold shadow-lg' 
                        : 'text-gray-600 hover:bg-white hover:text-brand-navy'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-brand-navy font-bold uppercase tracking-wider text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-brand-gold mr-3"></span>
                  Surface
                </h3>
                <div className="space-y-2">
                  {filters.surfaces.map(surface => (
                    <button
                      key={surface}
                      onClick={() => setActiveSurface(surface)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                        activeSurface === surface 
                        ? 'bg-brand-gold text-brand-navy font-bold shadow-lg' 
                        : 'text-gray-600 hover:bg-white hover:text-brand-navy'
                      }`}
                    >
                      {surface}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-brand-navy font-bold uppercase tracking-wider text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-life-red mr-3"></span>
                  Finish
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filters.finishes.map(finish => (
                    <button
                      key={finish}
                      onClick={() => setActiveFinish(finish)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                        activeFinish === finish 
                        ? 'bg-life-red border-life-red text-white shadow-md' 
                        : 'border-gray-200 text-gray-500 hover:border-life-red hover:text-life-red'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setActiveCategory("All");
                  setActiveFinish("All");
                  setActiveSurface("All");
                }}
                className="w-full mt-4 text-xs text-gray-400 hover:text-life-red transition-colors underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500 font-medium">
                Showing <span className="text-brand-navy font-bold">{filteredProducts.length}</span> products
              </p>
              <div className="hidden md:flex items-center text-sm text-gray-400 space-x-2">
                <span className="w-2 h-2 rounded-full bg-life-lime"></span>
                <span>All products are KEBS certified</span>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={idx} {...product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center border border-gray-100 shadow-inner">
                <div className="text-6xl mb-6">🔎</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">No products found</h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Try adjusting your filters or search criteria to find what you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveFinish("All");
                    setActiveSurface("All");
                  }}
                  className="mt-8 px-8 py-3 bg-brand-navy text-white rounded-full font-bold hover:bg-life-cyan transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Finder CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
               {/* Background pattern could go here */}
            </div>
            <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need help choosing the right paint?</h2>
                <p className="text-white/70 text-lg">
                  Answer a few questions about your project and our AI-guided finder will recommend the perfect products for you.
                </p>
              </div>
              <button className="px-10 py-5 bg-life-cyan text-brand-navy font-black rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-life-cyan/20">
                Launch Product Finder
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
