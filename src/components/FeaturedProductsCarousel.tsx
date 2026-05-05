'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
}

interface CarouselProps {
  products: Product[];
}

const FeaturedProductsCarousel = ({ products }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden relative rounded-2xl pb-12">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-brand-navy' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Optional: Prev/Next Buttons for Desktop */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))}
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden md:flex w-10 h-10 bg-white rounded-full shadow items-center justify-center text-brand-navy hover:text-life-cyan transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden md:flex w-10 h-10 bg-white rounded-full shadow items-center justify-center text-brand-navy hover:text-life-cyan transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
};

export default FeaturedProductsCarousel;
