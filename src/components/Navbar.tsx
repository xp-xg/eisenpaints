'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
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
              <span className="text-brand-navy font-black text-xl tracking-tighter hidden sm:block">
                EISEN <span className="text-life-cyan">PAINTS</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8 font-bold text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`transition-colors ${pathname === link.href ? 'text-life-cyan' : 'text-brand-navy hover:text-life-cyan'}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Tools Dropdown */}
              <div className="relative group" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
                <button className="flex items-center space-x-1 text-brand-navy hover:text-life-cyan transition-colors py-8">
                  <span>Tools</span>
                  <svg className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isToolsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {toolLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                        >
                          <span className="text-xl group-hover:scale-125 transition-transform">{link.icon}</span>
                          <div>
                            <div className="text-brand-navy font-bold text-xs">{link.name}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/find-a-dealer" 
                className={`transition-colors ${pathname === '/find-a-dealer' ? 'text-life-cyan' : 'text-brand-navy hover:text-life-cyan'}`}
              >
                Dealers
              </Link>

              <Link 
                href="/contact" 
                className="bg-brand-navy text-white px-8 py-3 rounded-full hover:bg-life-cyan hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-navy/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-life-cyan focus:outline-none"
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
        <div className="lg:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto">
          <div className="px-4 pt-6 pb-20 space-y-2">
            {[...navLinks, ...toolLinks, { name: 'Dealers', href: '/find-a-dealer' }, { name: 'Contact', href: '/contact' }].map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block px-4 py-4 text-brand-navy font-bold text-lg hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8">
              <Link 
                href="/contact" 
                className="block w-full text-center bg-brand-navy text-white px-6 py-5 rounded-2xl font-bold text-xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
