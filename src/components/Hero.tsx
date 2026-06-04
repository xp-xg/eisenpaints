'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  imageSrc?: string;
  altText?: string;
}

const Hero = ({
  imageSrc = "/images/carousel/Eisen-hero--nav-1920w.webp",
  altText = "Eisen Paints Hero Showcase"
}: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-white flex justify-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={1920}
        height={1020}
        className="w-full h-auto object-contain"
        priority
        sizes="100vw"
      />
    </section>
  );
};

export default Hero;

