'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PaintRollerButton from './PaintRollerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
  ];

  const toolLinks = [
    { name: 'Paint Calculator', href: '/calculator', icon: '📐' },
    { name: 'Color Visualizer', href: '/visualizer', icon: '🎨' },
    { name: 'Resources', href: '/resources', icon: '📚' },
  ];

  // Navbar is absolute to float over the hero image, but it scrolls away with the page
  const navbarClasses = "absolute top-0 left-0 w-full z-50 bg-transparent py-2 transition-all duration-300";

  return (
    <nav className={navbarClasses}>
      {/* SVG Filters for brushstroke effects */}
      <svg width="0" height="0" className="absolute">
        <filter id="brush-effect">
          <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start pt-4">
          {/* Logo & Award */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/logos/logo.png"
                  alt="Eisen Paints Logo"
                  width={400}
                  height={400}
                  className="h-48 md:h-72 w-auto transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Brushstroke links floating on the image */}
          <div className="hidden lg:flex items-center space-x-2 font-black text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-10 py-5 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div 
                  className="absolute inset-0 bg-white shadow-xl transition-all duration-500 group-hover:bg-life-cyan" 
                  style={{ filter: 'url(#brush-effect)' }}
                ></div>
                <span className="relative z-10 text-brand-navy group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}

            <div className="relative group/tools" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
              <button className="relative px-10 py-5 flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover/tools:scale-110">
                <div 
                  className="absolute inset-0 bg-white shadow-xl transition-all duration-500 group-hover/tools:bg-life-cyan" 
                  style={{ filter: 'url(#brush-effect)' }}
                ></div>
                <span className="relative z-10 text-brand-navy flex items-center space-x-2 group-hover/tools:text-white transition-colors">
                  <span>TOOLS</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isToolsOpen && (
                <div className="absolute top-full left-0 w-72 bg-transparent animate-in fade-in slide-in-from-top-2 duration-300 z-50 p-6 space-y-2">
                  {toolLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative group/item px-8 py-4 flex items-center space-x-4 transition-all duration-300 hover:scale-105"
                    >
                      <div 
                        className="absolute inset-0 bg-white shadow-md transition-all duration-500 group-hover/item:bg-life-cyan" 
                        style={{ filter: 'url(#brush-effect)' }}
                      ></div>
                      <span className="relative z-10 text-2xl group-hover/item:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <div className="relative z-10 text-brand-navy font-black text-[10px] uppercase tracking-widest group-hover/item:text-white transition-colors">
                        {link.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/find-a-dealer"
              className="relative group px-10 py-5 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <div 
                className="absolute inset-0 bg-white shadow-xl transition-all duration-500 group-hover:bg-life-cyan" 
                style={{ filter: 'url(#brush-effect)' }}
              ></div>
              <span className="relative z-10 text-brand-navy group-hover:text-white transition-colors">
                DEALERS
              </span>
            </Link>

            <div className="ml-4">
               <PaintRollerButton isScrolled={false} />
            </div>
          </div>
          
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white bg-brand-navy/30 backdrop-blur-md hover:bg-brand-navy focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 h-screen overflow-y-auto animate-in slide-in-from-right duration-500">
          <div className="px-6 pt-10 pb-32 space-y-4">
            {[...navLinks, ...toolLinks, { name: 'Find a Dealer', href: '/find-a-dealer' }].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-8 py-5 text-brand-navy font-black text-xl uppercase tracking-tighter hover:bg-gray-50 rounded-[2rem] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
