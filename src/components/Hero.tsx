'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrandBadge from './BrandBadge';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carousel/hero-2.jpeg"
          alt="Modern Painted Interior"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl text-white">
          {/* Brand Badge from the provided design */}
          <BrandBadge className="w-fit mb-12 animate-fade-in-up" />

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter animate-fade-in-up delay-100 font-display">
            Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-life-cyan via-white to-life-lime">life</span> <br />
            to your space.
          </h1>

          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-lg animate-fade-in-up delay-200 font-medium">
            Experience the pinnacle of German engineering tailored for the African sun. Premium quality, extreme durability, and vibrant colors that last.
          </p>

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 animate-fade-in-up delay-300">
            {/* SVG Filter for Hero Buttons */}
            <svg width="0" height="0" className="absolute">
              <filter id="heroBrush">
                <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>

            <Link
              href="/products"
              className="group relative px-10 py-5 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 bg-life-cyan shadow-xl group-hover:bg-white transition-colors duration-500" 
                style={{ filter: 'url(#heroBrush)' }}
              ></div>
              <span className="relative z-10 text-brand-navy font-black uppercase tracking-[0.2em] text-sm">Explore Products</span>
            </Link>
            
            <Link
              href="/projects"
              className="group relative px-10 py-5 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500" 
                style={{ filter: 'url(#heroBrush)' }}
              ></div>
              <span className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-sm">View Our Projects</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative paint splashes */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-navy/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-life-cyan/20 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
