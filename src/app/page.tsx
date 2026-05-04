import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = [
    {
      name: "Vinyl Silk Emulsion",
      category: "Interior",
      description: "A premium quality, water-based paint with a smooth silky finish. Highly durable and easy to clean.",
      image: "/images/products/vinyl silk emulsion interior finish.png"
    },
    {
      name: "Exterio",
      category: "Exterior",
      description: "Silicon-based all-weather protection designed to withstand the harsh African climate while maintaining color brilliance.",
      image: "/images/products/exterio exterior.png"
    },
    {
      name: "Tuff Tex",
      category: "Exterior",
      description: "High-performance rough textured coating that provides superior protection and a unique aesthetic appeal.",
      image: "/images/products/tuff tex exterior.png"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Why Eisen Paints?</h2>
            <div className="w-24 h-1 bg-life-cyan mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Combining German precision with Kenyan pride to deliver the best coating solutions for Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Best Quality", icon: "🏆", desc: "Formulated with premium raw materials for lasting protection." },
              { title: "Color Consistency", icon: "🎨", desc: "Perfect batch-to-batch color matching for large scale projects." },
              { title: "High Coverage", icon: "📐", desc: "Superior Sqm/Litre coverage for maximum efficiency and value." },
              { title: "Customization", icon: "⚙️", desc: "Tailored solutions to meet specific architectural requirements." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-gray-50 rounded-2xl hover:bg-brand-navy hover:text-white transition-all duration-500">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Premium Range</h2>
              <p className="text-gray-600 max-w-xl">
                Discover our curated selection of high-performance paints designed for durability and aesthetic excellence.
              </p>
            </div>
            <Link 
              href="/products" 
              className="text-brand-navy font-bold flex items-center hover:text-life-cyan transition-colors"
            >
              View Full Catalog
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/interior-showcase.png" 
                  alt="Production Precision" 
                  width={600} 
                  height={800} 
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-life-cyan/20 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-brand-navy text-white text-xs font-bold rounded-full mb-6">
                STRATEGIC PARTNERSHIP
              </div>
              <h2 className="text-4xl font-bold text-brand-navy mb-8 leading-tight">
                Crafting Excellence with <span className="text-life-cyan">COVESTRO</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our partnership with COVESTRO ensures that every drop of Eisen Paint is formulated with premium raw materials and production precision that meets global standards.
              </p>
              <div className="space-y-6">
                {[
                  "German technology integration in every batch",
                  "Rigorous quality control and testing",
                  "Sustainable and eco-friendly formulations",
                  "Optimized for the African climatic conditions"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-life-lime rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="font-medium text-brand-navy">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </div>
  );
}
