'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setScrolled(scrollY > 100);
      setAtBottom(scrollY + windowHeight >= docHeight - 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const scrollToBottom = () => {
    const height = document.documentElement.scrollHeight;
    document.documentElement.scrollTop = height;
    document.body.scrollTop = height;
  };

  if (!scrolled) return null;

  return (
    <>
      {/* SVG brush filter — defined once, outside buttons */}
      <svg width="0" height="0" className="fixed" aria-hidden="true">
        <defs>
          <filter id="scrollBrushUp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="scrollBrushDown" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="fixed bottom-28 right-8 z-[110] flex flex-col items-center space-y-2">
        {/* Scroll Up */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative w-12 h-12 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
        >
          {/* Brushstroke background — pointer-events-none so clicks reach the button */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <rect
              x="2" y="2" width="44" height="44" rx="8"
              className="fill-brand-gold group-hover:fill-life-cyan transition-colors duration-300"
              style={{ filter: 'url(#scrollBrushUp)' }}
            />
          </svg>
          <svg className="w-5 h-5 text-brand-navy relative z-10 pointer-events-none group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Scroll Down — hidden when at bottom */}
        {!atBottom && (
          <button
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            className="group relative w-12 h-12 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <rect
                x="2" y="2" width="44" height="44" rx="8"
                className="fill-brand-gold group-hover:fill-life-cyan transition-colors duration-300"
                style={{ filter: 'url(#scrollBrushDown)' }}
              />
            </svg>
            <svg className="w-5 h-5 text-brand-navy relative z-10 pointer-events-none group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
