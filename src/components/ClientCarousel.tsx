'use client';

import Image from 'next/image';

const clients = [
  { name: 'Jumbo Foam', logo: '/images/our clients/jumbofoam.png' },
  { name: 'Tuf Foam', logo: '/images/our clients/tuffoam.png' },
  { name: 'Vitafoam', logo: '/images/our clients/vitafoam.png' },
  { name: 'Nakuru County', logo: '/images/our clients/nakuru county.png' },
  { name: 'Prime Mattresses', logo: '/images/our clients/prime mattresses.png' },
  { name: 'Shiv Construction', logo: '/images/our clients/shiv construction c.o ltd.png' },
  { name: 'Soko Supermarket', logo: '/images/our clients/soko supermarket.png' },
  { name: 'The Queens Garden', logo: '/images/our clients/the queens garden.png' },
  { name: 'Zion Hotel', logo: '/images/our clients/zion hotel.png' },
  { name: 'PCEA', logo: '/images/our clients/pcea.png' },
];

const ClientCarousel = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-navy">Trusted by Industry Leaders</h2>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-24 bg-white rounded-xl shadow-sm border border-gray-100 px-8 transition-all duration-300"
            >
              <div className="relative w-full h-12">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
