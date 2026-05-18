import React from 'react';
import Image from 'next/image';

const resources = [
  {
    category: "Catalogs",
    description: "Full product brochures and color inspiration guides.",
    icon: "📚",
    path: "/documents/catalogs"
  },
  {
    category: "Technical Data Sheets (TDS)",
    description: "Detailed technical specifications for professional painters and contractors.",
    icon: "📄",
    path: "/documents/tds"
  },
  {
    category: "Safety Data Sheets (SDS)",
    description: "Material safety information and handling guidelines.",
    icon: "🛡️",
    path: "/documents/sds"
  }
];

export const metadata = {
  title: 'Resource & Support Center | Eisen Paints',
  description: 'Download technical data sheets, safety guidelines, and product catalogs for Eisen Paints.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Header with Carousel Image */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/eisen-splash.png"
          alt="Resources and Support"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
            Resource & <span className="text-life-cyan">Support Center</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-center">
            Access technical documentation, safety data, and our latest product catalogs.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-6">{resource.icon}</div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">{resource.category}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="mt-auto">
                <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center text-sm text-gray-500 mb-6">
                  Placeholder for PDF files
                </div>
                <button className="w-full py-3 px-6 bg-brand-navy text-white font-bold rounded-xl hover:bg-life-cyan hover:text-brand-navy transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Documents</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Need technical assistance?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our team of coating experts is available to help you with specific product recommendations or technical queries.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-life-cyan text-brand-navy font-bold rounded-full hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-lg"
          >
            Contact Technical Support
          </a>
        </div>
      </section>

    </main>
  );
}
