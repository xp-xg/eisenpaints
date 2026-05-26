'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  imageSrc?: string;
  altText?: string;
}

const Hero = ({
  imageSrc = "/images/carousel/Eisen-hero-1920w (3).webp",
  altText = "Eisen Paints Hero Showcase"
}: HeroProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image - Set back to object-cover to "fill the whole section" as requested */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={altText}
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

