import React from 'react';
import Image from 'next/image';
import PaintCalculator from '@/components/PaintCalculator';

export const metadata = {
  title: 'Paint Calculator | Eisen Paints',
  description: 'Easily calculate the amount of paint needed for your next project with our interactive paint calculator.',
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Header with Carousel Image */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/eisen-splash.png"
          alt="Paint Calculator"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Plan Your Project <span className="text-brand-gold">Precisely</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Avoid over-ordering or running out mid-project. Our calculator provides a reliable estimate based on your room dimensions.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <PaintCalculator />
      </section>

      {/* FAQ / Tips Section */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Estimation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Surface Texture</h3>
            <p className="text-gray-600">
              Rough or porous surfaces (like new plaster or brick) absorb more paint. We recommend adding 10-15% to your total estimate for these surfaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Color Change</h3>
            <p className="text-gray-600">
              If you are painting a light color over a very dark wall, you may need an extra coat or a dedicated primer to ensure full coverage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Measuring Walls</h3>
            <p className="text-gray-600">
              For accuracy, measure the width and height of each wall individually if they are not uniform. Use the average for a quick estimate.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Trim and Doors</h3>
            <p className="text-gray-600">
              Don't forget that doors and window frames often use different types of paint (e.g., Gloss or Satin). Calculate their areas separately.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
