import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="inline-block bg-white p-3 rounded-xl shadow-lg mb-6">
              <Image 
                src="/logos/logo-small.png" 
                alt="Eisen Paints Logo" 
                width={120} 
                height={120} 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              German Technology Paints for Africa. Bringing life to your space with precision, durability, and vibrant colors.
            </p>
            <div className="flex space-x-4">
              {/* German Flag motif */}
              <div className="flex space-x-1 h-1">
                <div className="w-4 bg-brand-black"></div>
                <div className="w-4 bg-brand-red"></div>
                <div className="w-4 bg-brand-gold"></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/" className="hover:text-life-cyan transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-life-cyan transition-colors">Product Catalog</Link></li>
              <li><Link href="/projects" className="hover:text-life-cyan transition-colors">Projects & Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-life-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Interior Paints</li>
              <li>Exterior Paints</li>
              <li>Specialty Coatings</li>
              <li>Surface Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Offices</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <strong className="text-white">Nakuru:</strong><br />
                Nakuru County, Kenya
              </li>
              <li>
                <strong className="text-white">Eldoret:</strong><br />
                Eldoret Town, Kenya
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                info@eisenpaints.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Eisen Paints Ltd. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Powered by German Technology</span>
            <span className="mx-2">|</span>
            <span className="text-white font-medium">KEBS Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
