'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PaintRollerButtonProps {
  isScrolled: boolean;
  className?: string;
}

const PaintRollerButton: React.FC<PaintRollerButtonProps> = ({ isScrolled, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 150, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Colors
  const initialColor = '#E30613'; // Magenta/Red from brand
  const transitionColor = '#00AEEF'; // Cyan
  const finalColor = '#0D3182'; // Navy

  return (
    <Link 
      href="/contact"
      className={`relative group flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative overflow-hidden transition-all duration-500 flex items-center px-10 py-3.5 font-black uppercase tracking-widest text-xs group-hover:scale-105 active:scale-95 ${
          isScrolled ? 'text-white' : 'text-white'
        }`}
      >
        {/* SVG Filters for local use */}
        <svg width="0" height="0" className="absolute">
          <filter id="buttonBrush-fine">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="buttonBrush-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        {/* Scrolled/Final State Background (Navy with Brushstroke) */}
        {isScrolled && (
          <div 
            className="absolute inset-0 z-0 bg-brand-navy shadow-lg"
            style={{ filter: 'url(#buttonBrush-rough)' }}
          ></div>
        )}

        {/* Initial Paint Stroke (Red/Magenta) */}
        {!isScrolled && (
          <div 
            className="absolute inset-0 z-0 transition-all duration-700 ease-out origin-left"
            style={{ 
              backgroundColor: initialColor,
              transform: `scaleX(${1 - scrollProgress})`,
              filter: 'url(#buttonBrush-fine)',
              opacity: 1 - scrollProgress
            }}
          ></div>
        )}

        {/* Transition Paint Stroke (Cyan) - appears as you scroll */}
        {!isScrolled && scrollProgress > 0 && (
          <div 
            className="absolute inset-0 z-0 transition-all duration-300 ease-out origin-left"
            style={{ 
              backgroundColor: transitionColor,
              transform: `scaleX(${scrollProgress})`,
              filter: 'url(#buttonBrush-rough)',
              opacity: scrollProgress < 1 ? 1 : 0
            }}
          ></div>
        )}
        
        {/* The Roller Handle & Icon (Only visible at top) */}
        {!isScrolled && (
          <div 
            className="absolute z-20 transition-all duration-300 pointer-events-none"
            style={{ 
              right: '2px',
              top: '50%',
              transform: `translateY(-50%) translateX(${isHovered ? '8px' : '0px'})`,
              opacity: 1 - scrollProgress
            }}
          >
             <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Roller Sleeve */}
                <div 
                  className="w-3.5 h-9 rounded-sm shadow-xl"
                  style={{ backgroundColor: initialColor, border: '1px solid rgba(255,255,255,0.4)' }}
                ></div>
                {/* Roller Handle */}
                <div className="absolute left-1/2 top-1/2 w-7 h-7 border-t-[3px] border-r-[3px] border-gray-400 rounded-tr-xl transform -translate-x-1/2 -translate-y-1/2 translate-x-3 -translate-y-4"></div>
                <div className="absolute left-1/2 top-1/2 w-2 h-5 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 translate-x-7 shadow-lg"></div>
             </div>
          </div>
        )}

        <span className="relative z-10">Get a Quote</span>
      </div>
    </Link>
  );
};

export default PaintRollerButton;
