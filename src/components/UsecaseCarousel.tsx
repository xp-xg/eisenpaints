'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
}

const UsecaseCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-white rounded-3xl">
      {images.map((img, idx) => (
        <div 
          key={idx}
          className={`transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 absolute inset-0 z-10' : 'opacity-0 absolute inset-0 z-0'
          }`}
        >
          <Image 
            src={img} 
            alt={`Usecase ${idx + 1}`} 
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors shadow-sm ${
              idx === currentIndex ? 'bg-brand-navy' : 'bg-gray-300'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Prev/Next Buttons */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 flex w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow items-center justify-center text-brand-navy hover:text-life-cyan transition-colors z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 flex w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow items-center justify-center text-brand-navy hover:text-life-cyan transition-colors z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
};

export default UsecaseCarousel;
