import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrandBadge from './BrandBadge';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 selection:bg-life-cyan selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand Column - Centered as per "First Image" alignment */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-10">
               <BrandBadge light={false} align="center" className="scale-110 md:scale-100 md:-ml-4" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              Engineering the future of African architecture with precision German technology and vibrant, long-lasting color solutions.
            </p>
            <div className="flex space-x-4 mb-8">
              {/* Social Media Icons */}
              <a href="https://web.facebook.com/eisenpaints" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-life-cyan hover:text-brand-navy hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>

            {/* Award Badge in Footer */}
            <div className="relative w-28 h-28 group/award cursor-help">
              <Image 
                src="/images/wim-excellence-award.png" 
                alt="WIM Excellence Award 2026" 
                fill 
                className="object-contain transition-opacity duration-500"
              />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-brand-navy border border-brand-gold p-3 rounded-lg shadow-2xl opacity-0 group-hover/award:opacity-100 transition-all duration-300 pointer-events-none z-[100] transform translate-y-2 group-hover/award:translate-y-0">
                <div className="text-white text-[10px] font-bold leading-tight">
                  WIM Excellence Awards 2026 Winner
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h3 className="text-lg font-black uppercase tracking-widest text-life-cyan mb-8">Navigation</h3>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><Link href="/" className="hover:text-life-cyan transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-life-cyan transition-colors">Product Catalog</Link></li>
              <li><Link href="/projects" className="hover:text-life-cyan transition-colors">Projects & Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-life-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-life-cyan mb-8">Tools</h3>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><Link href="/calculator" className="hover:text-life-cyan transition-colors">Paint Calculator</Link></li>
              <li><Link href="/visualizer" className="hover:text-life-cyan transition-colors">Color Visualizer</Link></li>
              <li><Link href="/find-a-dealer" className="hover:text-life-cyan transition-colors">Find a Dealer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-life-cyan mb-8">Offices</h3>
            <ul className="space-y-6 text-gray-400 text-sm font-bold">
              <li>
                <div className="text-white uppercase tracking-tighter text-[10px] mb-1">Nakuru HQ</div>
                Printing Press Road, Industrial Area<br />
                +254 758 094 985
              </li>
              <li>
                <div className="text-white uppercase tracking-tighter text-[10px] mb-1">Eldoret Branch</div>
                Nairobi Road, Pioneer<br />
                +254 113 713 285
              </li>
              <li>
                <div className="text-white uppercase tracking-tighter text-[10px] mb-1">Direct Email</div>
                <a href="mailto:info@eisenpaints.com" className="text-life-cyan hover:underline">info@eisenpaints.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} Eisen Paints Ltd. All rights reserved.</p>
          <div className="flex items-center mt-6 md:mt-0 space-x-6">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              <span>German Technology</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-life-cyan rounded-full"></span>
              <span>KEBS Certified</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
