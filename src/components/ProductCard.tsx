import React from 'react';
import Image from 'next/image';

interface ProductProps {
  name: string;
  category: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, category, description, image }: ProductProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-brand-navy mb-3">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="mt-6 flex items-center justify-between">
          <button className="text-brand-navy font-bold text-sm flex items-center group-hover:text-life-cyan transition-colors">
            View Details
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
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
