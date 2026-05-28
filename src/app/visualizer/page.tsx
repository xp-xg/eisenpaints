'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';

const rooms = [
  {
    id: 'living',
    name: 'Living Room',
    image: '/images/interior-showcase.png' // Using existing image
  }
];

const colors = [
  { name: 'Pure White', hex: '#FFFFFF', description: 'Clean and bright.', image: '/images/visualizer/Eisen-white.png' },
  { name: 'Eisen Navy', hex: '#0D3182', description: 'Our signature bold blue.', image: '/images/visualizer/Eisen-navy.png' },
  { name: 'Savannah Gold', hex: '#FDB913', description: 'Warm and energetic.', image: '/images/visualizer/Eisen-savannah-gold.png' },
  { name: 'Rift Valley Green', hex: '#8DC63F', description: 'Fresh and organic.', image: '/images/visualizer/Eisen-riftvalleygreen.png' },
  { name: 'Cool Mist', hex: '#E1E8ED', description: 'Modern and airy.', image: '/images/visualizer/Eisen-coolmist.png' },
  { name: 'Terracotta', hex: '#C0392B', description: 'Earthy and traditional.', image: '/images/visualizer/Eisen-terracotta.png' },
  { name: 'Morning Sky', hex: '#00AEEF', description: 'Calm and serene.', image: '/images/visualizer/Eisen-morningsky.png' },
  { name: 'Shadow Gray', hex: '#2C3E50', description: 'Sophisticated and deep.', image: '/images/visualizer/Eisen-shadowgray.png' }
];

export default function VisualizerPage() {
  const [selectedRoom] = useState(rooms[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleColorSelect = (color: typeof colors[0]) => {
    if (color.name === selectedColor.name) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedColor(color);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header with Carousel Image */}
      <Hero imageSrc="/images/hero/Eisen-calculator--nav-1920w.webp" altText="Color Visualizer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Visualizer Area */}
          <div className="flex-1 space-y-6">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black group">
              {/* The Room / Color Scene Image */}
              <Image
                src={selectedColor.image}
                alt={`${selectedColor.name} room preview`}
                fill
                className={`object-cover transition-all duration-700 group-hover:scale-105 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                priority
              />

              {/* Color badge overlay */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span
                  className="w-4 h-4 rounded-full border-2 border-white/60 shadow-sm flex-shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <span className="text-white font-semibold text-sm">{selectedColor.name}</span>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm">
                Viewing: {selectedRoom.name}
              </div>
            </div>

            {/* Selected color info bar */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
              <div
                className="w-14 h-14 rounded-2xl flex-shrink-0 shadow-md border border-gray-200"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-navy">{selectedColor.name}</h3>
                <p className="text-sm text-gray-400">{selectedColor.description}</p>
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">{selectedColor.hex}</div>
            </div>
          </div>

          {/* Controls Area */}
          <aside className="w-full lg:w-96 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-brand-navy mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-sm mr-3">1</span>
                Select Color
              </h2>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color)}
                    className={`aspect-square rounded-2xl transition-all border-4 ${selectedColor.name === color.name
                        ? 'border-brand-navy scale-110 shadow-lg'
                        : 'border-transparent hover:scale-105 hover:shadow-md'
                      }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <h4 className="font-bold text-brand-navy">{selectedColor.name}</h4>
                </div>
                <p className="text-sm text-gray-500">{selectedColor.description}</p>
                <div className="mt-4 text-[10px] font-mono text-gray-400 uppercase tracking-widest">{selectedColor.hex}</div>
              </div>

              <h2 className="text-2xl font-black text-brand-navy mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-life-cyan flex items-center justify-center text-sm mr-3 text-white">2</span>
                Get This Color
              </h2>

              <div className="space-y-3">
                <button
                  className="w-full py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-life-cyan transition-all duration-300 shadow-xl shadow-brand-navy/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request a Quote
                </button>
                <button
                  className="w-full py-4 border-2 border-gray-100 text-brand-navy font-bold rounded-2xl hover:bg-gray-50 transition-all"
                  onClick={() => window.location.href = '/products'}
                >
                  View in Catalog
                </button>
              </div>
            </div>

            <div className="bg-life-lime/10 p-8 rounded-[2.5rem] border border-life-lime/20">
              <h4 className="font-bold text-brand-navy mb-4 flex items-center">
                <span className="mr-2">💡</span> Pro Tip
              </h4>
              <p className="text-sm text-brand-navy/70 leading-relaxed">
                Colors look different in different lighting. We recommend viewing your favorite shades in both natural daylight and artificial night lighting before making a final decision.
              </p>
            </div>
          </aside>
        </div>
      </div>

    </main>
  );
}
