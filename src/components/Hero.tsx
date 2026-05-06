'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image - Set back to object-cover to "fill the whole section" as requested */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carousel/hero-2.jpeg" 
          alt="Eisen Paints Hero Showcase"
          fill
          className="object-cover transition-all duration-700"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default Hero;
