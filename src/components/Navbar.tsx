'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logos/logo-small.png" 
                alt="Eisen Paints Logo" 
                width={50} 
                height={50} 
                className="h-12 w-auto"
              />
              <span className="text-brand-navy font-bold text-xl tracking-tight hidden sm:block">
                EISEN PAINTS
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-medium">
              <Link href="/" className="text-brand-navy hover:text-life-cyan transition-colors">Home</Link>
              <Link href="/about" className="text-brand-navy hover:text-life-cyan transition-colors">About</Link>
              <Link href="/products" className="text-brand-navy hover:text-life-cyan transition-colors">Products</Link>
              <Link href="/projects" className="text-brand-navy hover:text-life-cyan transition-colors">Projects</Link>
              <Link href="/contact" className="text-brand-navy hover:text-life-cyan transition-colors">Contact</Link>
              <Link 
                href="/contact" 
                className="bg-brand-navy text-white px-6 py-2 rounded-full hover:bg-life-cyan hover:text-brand-navy transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-life-cyan focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
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
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 text-brand-navy hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-brand-navy hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className="block px-3 py-2 text-brand-navy hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 text-brand-navy hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-brand-navy hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 px-3">
              <Link 
                href="/contact" 
                className="block w-full text-center bg-brand-navy text-white px-6 py-3 rounded-lg"
                onClick={() => setIsOpen(false)}
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
