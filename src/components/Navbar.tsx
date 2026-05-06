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

      {/* Top Banner */}
      <div className="bg-brand-gold text-brand-navy text-[10px] md:text-xs py-2 font-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 items-center">
            <span className="flex items-center space-x-2">
              <span className="text-sm">📍</span> <span>Nakuru/Eldoret</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-sm">📞</span> <span>+254 758 094 985</span>
            </span>
            <span className="flex items-center space-x-2 hidden sm:flex">
              <span className="text-sm">✉️</span> <a href="mailto:info@eisenpaints.com" className="hover:text-white transition-colors">info@eisenpaints.com</a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="uppercase tracking-[0.2em] text-[9px] opacity-80">Follow Us</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image
                  src="/logos/logo-small.png"
                  alt="Eisen Paints Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto transition-transform group-hover:scale-110"
                />
              </div>
              <span className="font-black text-xl tracking-tighter hidden sm:block text-white font-display drop-shadow-md">
                EISEN <span className="text-life-cyan">PAINTS</span>
              </span>
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
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-[2rem] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 mt-4 z-50 p-2">
                  {toolLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-4 p-4 hover:bg-life-cyan/10 rounded-2xl transition-all duration-300 group/item"
                    >
                      <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">{link.icon}</span>
                      <div className="text-brand-navy font-black text-[10px] uppercase tracking-widest">{link.name}</div>
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
