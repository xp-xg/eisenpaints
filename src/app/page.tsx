import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import UsecaseCarousel from "@/components/UsecaseCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = [
    {
      name: "Vinyl Silk Emulsion",
      category: "Interior",
      description: "A premium quality, water-based paint with a smooth silky finish. Highly durable and easy to clean.",
      image: "/images/products/usecase/interior-pr.png"
    },
    {
      name: "Exterio",
      category: "Exterior",
      description: "Silicon-based all-weather protection designed to withstand the harsh African climate while maintaining color brilliance.",
      image: "/images/products/usecase/allweatherprotection-pr.png"
    },
    {
      name: "Tuff Tex",
      category: "Exterior",
      description: "High-performance rough textured coating that provides superior protection and a unique aesthetic appeal.",
      image: "/images/products/usecase/exterior-pr.png"
    },
    {
      name: "Skimfiller",
      category: "Specialty",
      description: "White cement-based putty for correcting unevenness on interior and exterior walls.",
      image: "/images/products/usecase/skimfiller-pr.png"
    },
    {
      name: "Water Repellent",
      category: "Specialty",
      description: "Invisible primer for mineral substrates that prevents water penetration.",
      image: "/images/products/usecase/waterrepellent-pr.png"
    }
  ];

  const usecaseImages = [
    "/images/products/usecase/interior-pr.png",
    "/images/products/usecase/allweatherprotection-pr.png",
    "/images/products/usecase/exterior-pr.png",
    "/images/products/usecase/skimfiller-pr.png",
    "/images/products/usecase/waterrepellent-pr.png"
  ];

  return (
    <div className="flex flex-col w-full selection:bg-life-cyan selection:text-white">
      <Hero />
      
      {/* Value Proposition - Why Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            {/* Image Side */}
            <div className="flex-1 relative w-full group">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white w-full">
                <Image
                  src="/images/why-us/why-us-wu.png"
                  alt="Why Choose Eisen Paints"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Award Badge - Floating */}
              <div className="absolute -bottom-8 -right-8 z-20 w-32 h-32 md:w-40 md:h-40 group/award cursor-help">
                <div className="relative w-full h-full transition-transform duration-500 group-hover/award:scale-110 animate-bounce-slow">
                  <Image 
                    src="/images/wim-excellence-award.png" 
                    alt="WIM Excellence Award 2026" 
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                  {/* Glowing effect behind badge */}
                  <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
                  
                  {/* Premium Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-brand-navy border-2 border-brand-gold p-4 rounded-2xl shadow-2xl opacity-0 group-hover/award:opacity-100 transition-all duration-300 pointer-events-none z-[100] transform translate-y-2 group-hover/award:translate-y-0">
                    <div className="text-white text-sm font-bold leading-tight">
                      Eisen Paints: Proud Winner of WIM Excellence Awards 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-life-cyan/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl z-0"></div>
            </div>

            {/* Content Side */}
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-life-cyan text-brand-navy text-xs font-bold rounded-full mb-6 tracking-wider uppercase tracking-widest">
                WHY EISEN PAINTS?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 leading-tight font-display tracking-tight">
                Crafted for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-life-cyan to-life-lime">Lasting Excellence</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Combining German precision with Kenyan pride, Eisen Paints delivers coating solutions built for Africa&apos;s climate, culture, and ambition — from silky interior finishes to all-weather exterior protection.
                </p>
                <p>
                  Every batch is quality-tested to ensure rich colour consistency, superior coverage, and finishes that leave a lasting impression.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: "Best Quality", icon: "🏆" },
                  { label: "Colour Consistency", icon: "🎨" },
                  { label: "High Coverage /Sqm", icon: "📐" },
                  { label: "Customization", icon: "⚙️" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-brand-navy text-sm uppercase tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-10 py-5 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-life-cyan hover:text-brand-navy transition-all shadow-xl"
              >
                Learn Our Story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products / Premium Range */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            <div className="flex-1 relative w-full">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white w-full">
                <UsecaseCarousel images={usecaseImages} />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-life-cyan/20 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-brand-gold text-brand-navy text-xs font-bold rounded-full mb-6 tracking-wider uppercase tracking-widest">
                PREMIUM COLLECTION
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 leading-tight font-display tracking-tight">
                Transform Your Space with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-life-cyan to-life-lime">Eisen Paints</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Discover our curated selection of high-performance paints designed for both durability and aesthetic excellence. Whether you are protecting an exterior facade against the harsh African climate or creating a silky, luxurious interior finish, Eisen Paints has the perfect coating for you.
                </p>
                <p>
                  We blend advanced German engineering with Kenyan pride to create architectural paints that offer unmatched color retention, superior coverage, and lasting protection.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: "Weather Resistant", icon: "🌦️" },
                  { label: "Rich Pigments", icon: "🎨" },
                  { label: "High Coverage", icon: "📏" },
                  { label: "Eco-Friendly", icon: "🌱" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-brand-navy text-sm uppercase tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/products" 
                className="inline-flex items-center px-10 py-5 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-life-cyan hover:text-brand-navy transition-all shadow-xl"
              >
                View Full Catalog
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership - Updated back to image */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src="/images/stategic-partnership.jpg" 
                  alt="Eisen Paints Strategic Partnership" 
                  width={800} 
                  height={800} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-navy/5 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-life-cyan/10 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-brand-navy text-white text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                STRATEGIC PARTNERSHIP
              </div>
              <h2 className="text-4xl font-black text-brand-navy mb-8 leading-tight font-display tracking-tight">
                Our Crafting Journey with <span className="text-life-cyan">COVESTRO</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Our journey began with <span className="font-bold text-brand-navy">COVESTRO</span>, one of the world&apos;s top German chemical manufacturers, where we gained deep exposure to production precision, innovation, and the power of premium raw materials.
                </p>
                <p>
                  This collaboration has transformed our production processes, instilling a culture of quality and product excellence that defines every bucket of Eisen Paint.
                </p>
                <p className="font-black text-brand-navy italic border-l-4 border-life-cyan pl-6 py-2">
                  &quot;Excellence is no longer a goal; it&apos;s our DNA.&quot;
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: "Precision", icon: "🎯" },
                  { label: "Innovation", icon: "💡" },
                  { label: "German Tech", icon: "🇩🇪" },
                  { label: "Kenyan Pride", icon: "🇰🇪" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-brand-navy text-sm uppercase tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-24 bg-life-cyan/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 font-display tracking-tight">
                Bring <span className="text-life-cyan">life</span> to your space
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                Eisen Paints aspires to be the most trusted, innovative, and painter-empowering paint brand in Africa – delivering beauty, protection, and purpose in every coat.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-life-cyan hover:text-brand-navy transition-all duration-300 shadow-xl"
              >
                Learn Our Story
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-2 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                   <Image src="/images/projects/Eisen_completed_project3.jpeg" alt="Project" width={300} height={400} className="rounded-xl" />
                </div>
                <div className="bg-white p-2 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500 mt-12">
                   <Image src="/images/projects/Eisen_completed_project4.jpeg" alt="Project" width={300} height={400} className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </div>
  );
}
