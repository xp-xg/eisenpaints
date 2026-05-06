'use client';

import React from 'react';
import Image from 'next/image';
import BrandBadge from '@/components/BrandBadge';

export default function AboutPage() {
  return (
    <div className="pt-20 selection:bg-life-cyan selection:text-white">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/carousel/corousel-aboutus.png"
          alt="About Eisen Paints"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <BrandBadge className="mx-auto mb-12 animate-fade-in-up" />
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter animate-fade-in-up delay-100 font-display">
            More than just <span className="text-life-cyan">Paint</span>.
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200 leading-relaxed">
            Eisen Paints is the most trusted, innovative, and painter-empowering brand in Africa – delivering precision German engineering in every stroke.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="inline-block px-6 py-2 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                Our Legacy
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-brand-navy mb-10 leading-[1.1] font-display">
                Powered by Trusted <br />
                <span className="text-life-cyan">German Polymer Tech</span>
              </h2>
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  At <span className="font-black text-brand-navy uppercase tracking-tighter">Eisen Paints</span>, our mission is simple – to bring life and color into every space with unmatched durability.
                </p>
                <p>
                  We create high-performance coatings, powered by trusted <span className="font-bold text-brand-navy underline decoration-life-cyan decoration-4 underline-offset-4">GERMAN TECHNOLOGY</span>, designed specifically to withstand the harsh African climate.
                </p>
                <p>
                  We walk with painters, support every project with technical precision, and go the extra mile for our customers. With every bucket, we&apos;re building dreams and a more vibrant world.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-[3/4] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
                    <Image src="/images/projects/Eisen_completed_project1.jpeg" alt="Quality Paint" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-square bg-life-cyan rounded-[2.5rem] flex items-center justify-center p-10 text-brand-navy shadow-xl transform -rotate-3">
                    <p className="text-2xl font-black text-center leading-tight">
                      &quot;Because at EISEN, life is Colorful.&quot;
                    </p>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="aspect-square bg-brand-navy rounded-[2.5rem] flex flex-col justify-center p-10 text-white shadow-xl transform rotate-3">
                    <span className="text-6xl mb-4">🇩🇪</span>
                    <p className="font-black uppercase tracking-[0.2em] text-xs text-life-cyan">German Standards</p>
                    <p className="font-bold text-sm text-gray-300 mt-2">ISO Certified Quality Control</p>
                  </div>
                  <div className="aspect-[3/4] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
                    <Image src="/images/projects/Eisen_completed_project2.jpeg" alt="Paint Application" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy font-display mb-4 uppercase tracking-tighter">Our Core Values</h2>
            <div className="w-24 h-1 bg-life-cyan mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Beauty",
                desc: "Bringing vibrant, rich colors that transform any environment into a living masterpiece.",
                icon: "✨",
                color: "bg-life-cyan"
              },
              {
                title: "Protection",
                desc: "High-performance coatings designed to withstand UV, moisture, and time.",
                icon: "🛡️",
                color: "bg-brand-navy"
              },
              {
                title: "Purpose",
                desc: "Empowering painters and supporting every project with unmatched care and quality.",
                icon: "🤝",
                color: "bg-brand-gold"
              }
            ].map((value, idx) => (
              <div key={idx} className="group bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 ${value.color} ${value.color === 'bg-brand-navy' ? 'text-white' : 'text-brand-navy'} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {value.icon}
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-6 font-display tracking-tight">{value.title}</h3>
                <p className="text-gray-500 font-bold leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
