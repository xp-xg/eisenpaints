import React from 'react';

const locations = [
  {
    city: "Eldoret",
    region: "Rift Valley",
    dealers: [
      {
        name: "Eisen Paints HQ & Main Depot",
        address: "Kimumu, Iten Road",
        contact: "+254 700 000 000",
        type: "Manufacturer Outlet",
        mapUrl: "https://maps.google.com"
      },
      {
        name: "Eldoret Town Center Branch",
        address: "Ronald Ngala Street",
        contact: "+254 711 000 000",
        type: "Retail Store",
        mapUrl: "https://maps.google.com"
      }
    ]
  },
  {
    city: "Nakuru",
    region: "Central Rift",
    dealers: [
      {
        name: "Nakuru Industrial Area Depot",
        address: "George Morara Road",
        contact: "+254 722 000 000",
        type: "Distribution Center",
        mapUrl: "https://maps.google.com"
      }
    ]
  },
  {
    city: "Nairobi",
    region: "Nairobi County",
    dealers: [
      {
        name: "Nairobi Sales Office",
        address: "Mombasa Road, Syokimau",
        contact: "+254 733 000 000",
        type: "Corporate Sales",
        mapUrl: "https://maps.google.com"
      }
    ]
  }
];

export const metadata = {
  title: 'Find a Dealer | Eisen Paints',
  description: 'Locate authorized Eisen Paints dealers and distribution centers across Kenya.',
};

export default function DealerLocatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-navy overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Find a <span className="text-brand-gold">Dealer</span></h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get professional advice and purchase Eisen Paints products at an authorized dealer near you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Quick Stats/Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-brand-navy mb-4">Store Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span className="font-bold text-brand-navy">8am - 5pm</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span className="font-bold text-brand-navy">8am - 1pm</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="font-gray-400">Closed</span></li>
              </ul>
            </div>
            
            <div className="bg-brand-gold p-6 rounded-3xl shadow-lg text-brand-navy">
              <h3 className="text-lg font-bold mb-2">Bulk Orders?</h3>
              <p className="text-sm opacity-80 mb-4 font-medium">Contact our corporate sales department for large-scale projects and contractor pricing.</p>
              <a href="/contact" className="inline-block px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-lg hover:bg-white hover:text-brand-navy transition-all">Contact Sales</a>
            </div>
          </div>

          {/* Locations List */}
          <div className="lg:col-span-3 space-y-12">
            {locations.map((region, idx) => (
              <div key={idx}>
                <div className="flex items-center space-x-4 mb-8">
                  <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight">{region.city}</h2>
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{region.region}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {region.dealers.map((dealer, dIdx) => (
                    <div key={dIdx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded-full uppercase tracking-wider group-hover:bg-brand-navy group-hover:text-white transition-colors">
                          {dealer.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-life-cyan transition-colors">{dealer.name}</h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-gray-600">
                        <div className="flex items-start space-x-3">
                          <span className="text-life-cyan">📍</span>
                          <span>{dealer.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-life-cyan">📞</span>
                          <span>{dealer.contact}</span>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a 
                          href={dealer.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-4 bg-gray-50 text-brand-navy text-xs font-bold rounded-xl text-center hover:bg-brand-navy hover:text-white transition-all"
                        >
                          View Map
                        </a>
                        <a 
                          href={`tel:${dealer.contact.replace(/\s/g, '')}`}
                          className="py-3 px-4 bg-life-cyan text-brand-navy text-xs font-bold rounded-xl hover:bg-brand-navy hover:text-white transition-all"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-24 bg-brand-navy text-center text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-life-cyan/5 -skew-y-3 transform scale-110"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Become an Authorized Partner</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Join the Eisen Paints family and bring premium coating solutions to your region. We offer competitive margins, technical training, and marketing support.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Apply for Dealership
          </a>
        </div>
      </section>

    </main>
  );
}
