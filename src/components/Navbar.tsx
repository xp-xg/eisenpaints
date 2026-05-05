'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Determine if we should use light or dark text based on scroll and page
  const isHomePage = pathname === '/';
  const isTransparentPage = ['/', '/about', '/products', '/contact'].includes(pathname);

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ${isScrolled
    ? 'bg-white shadow-xl py-2'
    : isTransparentPage
      ? 'bg-transparent py-4'
      : 'bg-white shadow-sm py-2'
    }`;

  const linkClasses = (href: string) => {
    const isActive = pathname === href;
    if (isScrolled || !isTransparentPage) {
      return isActive ? 'text-life-cyan' : 'text-brand-navy hover:text-life-cyan';
    }
    return isActive ? 'text-life-cyan' : 'text-white hover:text-life-cyan';
  };

  const logoTextClasses = isScrolled || !isTransparentPage ? 'text-brand-navy' : 'text-white';

  return (
    <nav className={navbarClasses}>
      {/* Top Banner */}
      <div className="bg-brand-gold text-brand-navy text-[10px] md:text-xs py-1 md:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center font-bold gap-1 md:gap-0">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 items-center text-center">
            <span className="flex items-center space-x-1">
              <span>📍</span> <span>Nakuru/Eldoret</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>📞</span> <span>+254 758 094 985</span>
            </span>
            <span className="flex items-center space-x-1 hidden sm:flex">
              <span>✉️</span> <a href="mailto:info@eisenpaints.com" className="hover:text-white transition-colors">info@eisenpaints.com</a>
            </span>
          </div>
          <div className="flex items-center space-x-3 mt-1 md:mt-0">
            <span className="font-medium hidden sm:block">Follow Us:</span>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
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
              <span className={`font-black text-xl tracking-tighter hidden sm:block transition-colors duration-500 ${logoTextClasses}`}>
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
                  className={`transition-colors duration-500 ${linkClasses(link.href)}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Tools Dropdown */}
              <div className="relative group" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
                <button className={`flex items-center space-x-1 transition-colors duration-500 py-8 ${isScrolled || !isTransparentPage ? 'text-brand-navy' : 'text-white'} hover:text-life-cyan`}>
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
                className={`transition-colors duration-500 ${linkClasses('/find-a-dealer')}`}
              >
                Dealers
              </Link>

              <Link
                href="/contact"
                className={`${isScrolled || !isTransparentPage
                  ? 'bg-brand-navy text-white hover:bg-life-cyan hover:text-brand-navy'
                  : 'bg-white text-brand-navy hover:bg-life-cyan'
                  } px-8 py-3 rounded-full transition-all duration-300 shadow-lg font-bold`}
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-500 ${isScrolled || !isTransparentPage ? 'text-brand-navy' : 'text-white'} hover:text-life-cyan focus:outline-none`}
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
