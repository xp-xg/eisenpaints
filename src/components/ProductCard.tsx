import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  name: string;
  category: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, category, description, image }: ProductProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100 mx-auto w-full max-w-md">
      <Link href="/products" className="relative w-full overflow-hidden block bg-white pt-2">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="p-8 flex flex-col flex-grow text-left bg-white">
        <h3 className="text-xl font-bold text-brand-navy mb-3">
          <Link href="/products" className="hover:text-life-cyan transition-colors">{name}</Link>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <Link href="/products" className="text-brand-navy font-bold text-sm flex items-center group-hover:text-life-cyan transition-colors">
            View Details
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-brand-black rounded-full"></div>
            <div className="w-2 h-2 bg-brand-red rounded-full"></div>
            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
