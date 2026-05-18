'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const rooms = [
  { 
    id: 'living', 
    name: 'Living Room', 
    image: '/images/interior-showcase.png' // Using existing image
  }
];

const colors = [
  { name: 'Pure White', hex: '#FFFFFF', description: 'Clean and bright.' },
  { name: 'Eisen Navy', hex: '#0D3182', description: 'Our signature bold blue.' },
  { name: 'Savannah Gold', hex: '#FDB913', description: 'Warm and energetic.' },
  { name: 'Rift Valley Green', hex: '#8DC63F', description: 'Fresh and organic.' },
  { name: 'Cool Mist', hex: '#E1E8ED', description: 'Modern and airy.' },
  { name: 'Terracotta', hex: '#C0392B', description: 'Earthy and traditional.' },
  { name: 'Morning Sky', hex: '#00AEEF', description: 'Calm and serene.' },
  { name: 'Shadow Gray', hex: '#2C3E50', description: 'Sophisticated and deep.' }
];

export default function VisualizerPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [intensity, setIntensity] = useState(0.4);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Header with Carousel Image */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/eisen-splash.png"
          alt="Color Visualizer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Color <span className="text-life-cyan">Visualizer</span></h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experiment with different shades and see how they transform your space instantly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Visualizer Area */}
          <div className="flex-1 space-y-6">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black group">
              {/* The Room Image */}
              <Image 
                src={selectedRoom.image} 
                alt={selectedRoom.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* The Color Overlay */}
              <div 
                className="absolute inset-0 transition-colors duration-500 pointer-events-none"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  mixBlendMode: 'multiply',
                  opacity: intensity 
                }}
              />
              
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm">
                Viewing: {selectedRoom.name}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Color Intensity</h3>
                <p className="text-sm text-gray-400">Adjust the saturation of the preview</p>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="0.8" 
                step="0.05" 
                value={intensity}
                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                className="w-full md:w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-life-cyan"
              />
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
                    onClick={() => setSelectedColor(color)}
                    className={`aspect-square rounded-2xl transition-all border-4 ${
                      selectedColor.hex === color.hex 
                      ? 'border-brand-navy scale-110 shadow-lg' 
                      : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                <h4 className="font-bold text-brand-navy mb-1">{selectedColor.name}</h4>
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
