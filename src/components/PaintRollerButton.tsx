'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PaintRollerButtonProps {
  isScrolled: boolean;
  className?: string;
}

const PaintRollerButton: React.FC<PaintRollerButtonProps> = ({ isScrolled, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href="/contact"
      className={`relative group flex items-center transition-all duration-300 ${className} ${isHovered ? 'scale-105' : 'scale-100'} active:scale-95`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[220px] h-[55px] overflow-visible">
        <Image
          src="/images/get-quote-btn.png"
          alt="Get a Quote"
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>
    </Link>
  );
};

export default PaintRollerButton;
