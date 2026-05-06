'use client';

import React from 'react';

interface BrandBadgeProps {
  className?: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
}

const BrandBadge: React.FC<BrandBadgeProps> = ({ 
  className = "", 
  light = true,
  align = 'center'
}) => {
  const textStyles = light 
    ? 'text-white' 
    : 'text-[#0D3182]'; // Brand Navy

  const alignStyles = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  const circleAlignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <div className={`flex flex-col ${alignStyles[align]} space-y-3 ${className}`}>
      {/* Text - Bold, Sans-serif, Stacked */}
      <div className={`font-black uppercase tracking-[0.1em] leading-[1.2] text-[14px] md:text-[16px] ${textStyles}`}>
        <div>German</div>
        <div>Technology Paints</div>
        <div>For Africa</div>
      </div>

      {/* Overlapping Circles - No borders, slight intersection */}
      <div className={`flex items-center ${circleAlignStyles[align]} -space-x-2.5`}>
        {/* Black Circle */}
        <div className="w-12 h-12 bg-black rounded-full relative z-10"></div>
        {/* Red Circle (Middle) */}
        <div className="w-12 h-12 bg-[#E30613] rounded-full relative z-20"></div>
        {/* Gold Circle */}
        <div className="w-12 h-12 bg-[#FDB913] rounded-full relative z-10"></div>
      </div>
    </div>
  );
};

export default BrandBadge;
