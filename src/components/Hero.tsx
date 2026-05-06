import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carousel/hero-2.jpeg"
          alt="Modern Painted Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-brand-black rounded-full"></div>
              <div className="w-3 h-3 bg-brand-red rounded-full"></div>
              <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">German Technology Paints for Africa</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bring <span className="text-life-cyan">life</span> to your space.
          </h1>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Experience premium quality and durability with Eisen Paints. Engineered with precision and crafted for the African environment.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/products"
              className="bg-life-cyan text-brand-navy px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-white/10 transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Paint Splash Decorative Element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-20 hidden lg:block">
        <div className="absolute inset-0 bg-life-red rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-life-cyan rounded-full blur-[80px] animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;
