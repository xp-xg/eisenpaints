'use client';

import React, { useState, useEffect } from 'react';

const PaintCalculator = () => {
  const [length, setLength] = useState<number>(4);
  const [width, setWidth] = useState<number>(4);
  const [height, setHeight] = useState<number>(2.5);
  const [doors, setDoors] = useState<number>(1);
  const [windows, setWindows] = useState<number>(1);
  const [coats, setCoats] = useState<number>(2);
  const [includeCeiling, setIncludeCeiling] = useState<boolean>(false);
  const [coverage, setCoverage] = useState<number>(12); // sqm per liter
  const [result, setResult] = useState<{ area: number; liters: number }>({ area: 0, liters: 0 });

  const calculate = () => {
    // Wall area: 2 * (L + W) * H
    const wallArea = 2 * (Number(length) + Number(width)) * Number(height);
    
    // Ceiling area: L * W
    const ceilingArea = includeCeiling ? Number(length) * Number(width) : 0;
    
    // Total gross area
    let totalArea = wallArea + ceilingArea;
    
    // Subtract doors and windows
    // Average door: 2sqm, Average window: 1.5sqm
    const deductions = (Number(doors) * 2) + (Number(windows) * 1.5);
    
    totalArea = Math.max(0, totalArea - deductions);
    
    const litersNeeded = (totalArea / coverage) * Number(coats);
    
    setResult({
      area: parseFloat(totalArea.toFixed(2)),
      liters: parseFloat(litersNeeded.toFixed(1))
    });
  };

  useEffect(() => {
    calculate();
  }, [length, width, height, doors, windows, coats, includeCeiling, coverage]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
      <div className="bg-brand-navy p-8 text-white">
        <h2 className="text-3xl font-bold">Paint Calculator</h2>
        <p className="text-white/80 mt-2">Estimate how much paint you'll need for your project.</p>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Length (m)</label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Width (m)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Height (m)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
              min="0"
              step="0.1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Doors</label>
              <input
                type="number"
                value={doors}
                onChange={(e) => setDoors(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Windows</label>
              <input
                type="number"
                value={windows}
                onChange={(e) => setWindows(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                min="0"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              id="ceiling"
              checked={includeCeiling}
              onChange={(e) => setIncludeCeiling(e.target.checked)}
              className="w-5 h-5 text-brand-navy rounded border-gray-300 focus:ring-brand-navy cursor-pointer"
            />
            <label htmlFor="ceiling" className="text-gray-700 font-medium cursor-pointer select-none">
              Include Ceiling in calculation
            </label>
          </div>

          <div className="pt-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Coats</label>
            <div className="flex space-x-4">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setCoats(num)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    coats === num
                      ? 'bg-brand-gold text-brand-navy shadow-md ring-2 ring-brand-gold ring-offset-2'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {num} {num === 1 ? 'Coat' : 'Coats'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Total Area to Paint</span>
            <div className="text-5xl font-black text-brand-navy mt-1">
              {result.area} <span className="text-xl font-normal text-gray-400">m²</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8"></div>

          <div className="mb-10">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Estimated Paint Needed</span>
            <div className="text-7xl font-black text-life-cyan mt-1 flex items-baseline justify-center">
              {result.liters}
              <span className="text-2xl font-normal text-gray-400 ml-2 italic">Liters</span>
            </div>
            <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto">
              Based on an average coverage of 12m² per liter. Results may vary depending on surface porosity.
            </p>
          </div>

          <button 
            className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-life-cyan hover:text-brand-navy transition-all duration-300 shadow-lg hover:shadow-life-cyan/20 transform hover:-translate-y-1"
            onClick={() => window.location.href = '/products'}
          >
            Browse Products
          </button>
        </div>
      </div>

      <div className="p-8 bg-gray-100 border-t border-gray-200 flex flex-wrap gap-8 justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-navy font-bold">1</div>
          <p className="text-sm text-gray-600 font-medium leading-tight">Enter your room<br/>dimensions</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-navy font-bold">2</div>
          <p className="text-sm text-gray-600 font-medium leading-tight">Subtract doors<br/>and windows</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-navy font-bold">3</div>
          <p className="text-sm text-gray-600 font-medium leading-tight">Get your instant<br/>estimation</p>
        </div>
      </div>
    </div>
  );
};

export default PaintCalculator;
