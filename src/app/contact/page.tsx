'use client';

import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="pt-20 pb-24 bg-white selection:bg-life-cyan selection:text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/eisen-splash.png"
          alt="Eisen Paints Contact"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <div className="max-w-2xl">
            <span className="text-life-cyan font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in-up">Get a Professional Quote</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter animate-fade-in-up delay-100">
              Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-life-cyan to-life-lime">Life</span> to Your Space.
            </h1>
            <p className="text-gray-200 text-xl font-medium max-w-lg animate-fade-in-up delay-200">
              Whether it's a residential project or a large-scale industrial coating, our German technology ensures perfection.
            </p>
          </div>
        </div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-life-cyan/20 to-transparent blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Card */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/20">
            <h2 className="text-4xl font-black text-brand-navy mb-2">Request a Quote</h2>
            <p className="text-gray-500 mb-10 font-medium">Fill out the form below and our technical team will contact you within 24 hours.</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60 px-1">Full Name</label>
                  <input type="text" className="w-full bg-gray-50/50 border-0 border-b-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-life-cyan focus:bg-white transition-all text-brand-navy font-bold shadow-inner" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60 px-1">Email Address</label>
                  <input type="email" className="w-full bg-gray-50/50 border-0 border-b-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-life-cyan focus:bg-white transition-all text-brand-navy font-bold shadow-inner" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60 px-1">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50/50 border-0 border-b-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-life-cyan focus:bg-white transition-all text-brand-navy font-bold shadow-inner" placeholder="+254 --- --- ---" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60 px-1">Project Type</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50/50 border-0 border-b-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-life-cyan focus:bg-white transition-all text-brand-navy font-bold shadow-inner appearance-none">
                      <option>Residential Interior</option>
                      <option>Residential Exterior</option>
                      <option>Commercial/Office</option>
                      <option>Industrial Coating</option>
                      <option>Infrastructure/Public</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-navy">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60 px-1">Project Details & Requirements</label>
                <textarea rows={5} className="w-full bg-gray-50/50 border-0 border-b-2 border-gray-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:ring-0 focus:border-life-cyan focus:bg-white transition-all text-brand-navy font-bold shadow-inner" placeholder="Tell us about the surface area, current condition, and your desired finish..."></textarea>
              </div>

              <div className="flex items-center space-x-2 px-1">
                <input type="checkbox" id="terms" className="w-5 h-5 rounded border-gray-300 text-brand-navy focus:ring-life-cyan" />
                <label htmlFor="terms" className="text-sm text-gray-500 font-medium">I agree to the terms and privacy policy</label>
              </div>

              <button className="w-full group relative overflow-hidden bg-brand-navy text-white font-black uppercase tracking-[0.2em] py-6 rounded-[2rem] transition-all duration-500 shadow-2xl hover:shadow-life-cyan/20">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Submit Quote Request</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </form>
          </div>

          {/* Info Side Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-brand-navy p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-life-cyan/20 transition-colors duration-700"></div>
              <h3 className="text-2xl font-black mb-8 relative z-10">Direct Contact</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-life-cyan">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-white/50 tracking-widest mb-1">Call Us</div>
                    <div className="font-bold text-lg">+254 758 094 985</div>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-life-cyan">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-white/50 tracking-widest mb-1">Email Us</div>
                    <div className="font-bold text-lg break-all">info@eisenpaints.com</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="text-xs font-black uppercase text-white/50 tracking-widest mb-4">Our Locations</div>
                <div className="space-y-4 font-bold text-sm">
                  <p className="flex items-center space-x-2">
                    <span className="text-life-cyan">📍</span>
                    <span>Industrial Area, Nakuru HQ</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-life-cyan">📍</span>
                    <span>Pioneer, Eldoret Branch</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold p-10 rounded-[3rem] text-brand-navy shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
               <h3 className="text-2xl font-black mb-4">Why Eisen?</h3>
               <ul className="space-y-4 font-bold text-sm">
                 <li className="flex items-center space-x-3">
                   <span className="text-brand-navy">✓</span>
                   <span>German Polymer Technology</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <span className="text-brand-navy">✓</span>
                   <span>10+ Years Durability</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <span className="text-brand-navy">✓</span>
                   <span>Eco-Friendly Formulations</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <span className="text-brand-navy">✓</span>
                   <span>Extreme Weather Resistance</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.771452636718!2d36.0544243!3d-0.2854342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTcnMDcuNiJTIDM2wrAwMycyNS4yIkU!5e0!3m2!1sen!2ske!4v1714896123456!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
