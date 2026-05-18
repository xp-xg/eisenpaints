'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BrandBadge from '@/components/BrandBadge';

const awards = [
  {
    image: "/images/awards/valuable-brand-2025.png",
    subtitle: "South Rift Awards 2025",
    title: "Valuable Brand in",
    titleHighlight: "Paints & Paint Technology",
    description: "Awarded by Valuable Brands in recognition of our trusted German technology and obsession with quality in the paints industry."
  },
  {
    image: "/images/awards/wim-startup-trophy.png",
    subtitle: "KAM 60 Years",
    title: "WIM Startup of the Year",
    titleHighlight: "1st Runner Up",
    description: "Presented by Kenya Association of Manufacturers (KAM) to Naomi Thiru, celebrating women in manufacturing and our exceptional growth."
  },
  {
    image: "/images/awards/wim-startup-certificate.png",
    subtitle: "Certificate of Achievement",
    title: "Excellence in",
    titleHighlight: "Manufacturing",
    description: "Official recognition from KAM acknowledging the efforts and achievements of Eisen Industries Ltd in the WIM Excellence Awards."
  },
  {
    image: "/images/awards/valuable-brand-certificate.png",
    subtitle: "Valuable Brands Awards",
    title: "Certificate of",
    titleHighlight: "Achievement",
    description: "In recognition of outstanding leadership and impactful contribution to business growth, brand excellence, and market influence in the South Rift region."
  },
  {
    image: "/images/awards/nakuru-golf-club.png",
    subtitle: "Community Support",
    title: "Nakuru Golf Club",
    titleHighlight: "Ladies Open 2025",
    description: "Certificate of Appreciation awarded to EiSEN Paints for continued support and sponsoring the Ladies Open Tournament."
  }
];

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 6000); // Auto-advance every 6 seconds
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % awards.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center overflow-hidden bg-brand-navy">
      {/* Splash Image Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/eisen-splash.png" 
          alt="Eisen Splash Background" 
          fill 
          className="object-cover" 
          priority
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-white drop-shadow-md font-black uppercase tracking-[0.3em] text-xs">Milestones</span>
          <h2 className="text-5xl md:text-7xl font-black font-display mt-4 mb-4 uppercase tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Our Awards & Recognition
          </h2>
          <p className="text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-3xl mx-auto font-medium leading-relaxed">
            At EiSEN Paints, every milestone is a reflection of hard work, faith, quality, and the people who believe in our brand.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Slide Area */}
          <div className="relative h-[550px] w-full perspective-1000">
            {awards.map((award, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  idx === currentIndex 
                    ? 'opacity-100 translate-x-0 scale-100 z-20' 
                    : idx < currentIndex 
                      ? 'opacity-0 -translate-x-full scale-95 z-0'
                      : 'opacity-0 translate-x-full scale-95 z-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-8 md:p-12 h-full flex flex-col items-center text-center shadow-2xl">
                  <div className="relative h-48 w-full mb-8 rounded-[2rem] overflow-hidden bg-white/10 flex items-center justify-center p-6 shadow-inner">
                    <Image 
                      src={award.image} 
                      alt={award.subtitle} 
                      fill 
                      className="object-contain drop-shadow-2xl" 
                    />
                  </div>
                  <p className="text-brand-gold font-black uppercase tracking-[0.2em] text-sm mb-4 drop-shadow-md">{award.subtitle}</p>
                  <h3 className="text-3xl md:text-4xl font-black font-display mb-6 leading-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {award.title} <br/><span className="text-life-cyan">{award.titleHighlight}</span>
                  </h3>
                  <p className="text-gray-100 font-medium text-lg leading-relaxed max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-20 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-life-cyan hover:text-brand-navy hover:scale-110 transition-all z-30 shadow-2xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-20 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-life-cyan hover:text-brand-navy hover:scale-110 transition-all z-30 shadow-2xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-4 mt-12 z-30 relative">
            {awards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'w-10 h-3 bg-life-cyan shadow-[0_0_10px_rgba(0,174,239,0.5)]' 
                    : 'w-3 h-3 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <BrandBadge light={false} className="mx-auto mb-8 scale-[1.2] animate-pulse" />
          <p className="text-3xl md:text-5xl font-black font-display text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] italic tracking-tight">Life is Colorful.</p>
        </div>
      </div>
    </section>
  );
}
