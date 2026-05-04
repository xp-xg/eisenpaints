import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Naivasha Modern Market",
    location: "Naivasha, Kenya",
    description: "A large-scale commercial hub featuring our Exterio silicon-based all-weather protection for long-lasting durability.",
    image: "/images/projects/Eisen_completed_project1.jpeg",
    category: "Commercial"
  },
  {
    title: "Grace Apartments",
    location: "Eldoret, Kenya",
    description: "Modern residential development using our Vinyl Silk Emulsion for elegant, washable interior finishes.",
    image: "/images/projects/Eisen_completed_project2.jpeg",
    category: "Residential"
  },
  {
    title: "Quickmart Kisii",
    location: "Kisii, Kenya",
    description: "Retail chain hub with high-traffic durability requirements met by Eisen specialty coatings.",
    image: "/images/projects/Eisen_completed_project3.jpeg",
    category: "Commercial"
  },
  {
    title: "Crest Village",
    location: "Nakuru, Kenya",
    description: "Premium housing project showcasing the vibrant color consistency of our architectural coatings.",
    image: "/images/projects/Eisen_completed_project4.jpeg",
    category: "Residential"
  },
  {
    title: "Westside Plaza",
    location: "Nairobi, Kenya",
    description: "A striking architectural landmark utilizing our specialty textures for a modern, weather-resistant facade.",
    image: "/images/projects/Eisen_completed_project5.jpeg",
    category: "Commercial"
  },
  {
    title: "Riverside Heights",
    location: "Eldoret, Kenya",
    description: "Luxury condominium complex featuring premium interior coatings for a sophisticated, high-end feel.",
    image: "/images/projects/Eisen_completed_project6.jpeg",
    category: "Residential"
  },
  {
    title: "Urban Residential Heights",
    location: "Nakuru, Kenya",
    description: "High-density residential project demonstrating cost-effective yet durable coating solutions.",
    image: "/images/projects/Eisen_completed_project7.jpeg",
    category: "Residential"
  },
  {
    title: "Garden Estate",
    location: "Nairobi, Kenya",
    description: "A residential masterpiece featuring our eco-friendly, low-VOC paint range for healthy living spaces.",
    image: "/images/projects/Eisen_completed_project8.jpeg",
    category: "Residential"
  },
  {
    title: "Industrial Park Alpha",
    location: "Mombasa, Kenya",
    description: "Heavy-duty protective coatings for massive warehouse structures, designed to withstand coastal humidity.",
    image: "/images/projects/Eisen_completed_project9.jpeg",
    category: "Industrial"
  },
  {
    title: "Blue Breeze Suites",
    location: "Malindi, Kenya",
    description: "Coastal hospitality project utilizing salt-resistant exterior finishes for long-term vibrant color.",
    image: "/images/projects/Eisen_completed_project10.jpeg",
    category: "Hospitality"
  },
  {
    title: "Corporate Headquarters",
    location: "Nairobi, Kenya",
    description: "Modern office complex utilizing our professional grade interior paints for a sophisticated, durable finish.",
    image: "/images/projects/Eisen_completed_project11_office.jpeg",
    category: "Commercial"
  },
  {
    title: "Skyline Towers",
    location: "Nakuru, Kenya",
    description: "Multi-story residential tower protected by our high-build architectural coatings for superior coverage.",
    image: "/images/projects/Eisen_completed_project12.jpeg",
    category: "Residential"
  },
  {
    title: "Pine Ridge Community",
    location: "Eldoret, Kenya",
    description: "Large-scale gated community development featuring a harmonious palette of Eisen earth tones.",
    image: "/images/projects/Eisen_completed_project13.jpeg",
    category: "Residential"
  },
  {
    title: "Tech Hub Nakuru",
    location: "Nakuru, Kenya",
    description: "Innovation center featuring vibrant color accents and easy-to-clean wall coatings for dynamic spaces.",
    image: "/images/projects/Eisen_completed_project14.jpeg",
    category: "Institutional"
  },
  {
    title: "Legacy Manor",
    location: "Naivasha, Kenya",
    description: "Exquisite heritage-style restoration project using our specialized surface preparation products.",
    image: "/images/projects/Eisen_completed_project15.jpeg",
    category: "Residential"
  }
];

const ProjectsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="py-20 mb-16 text-center">
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-medium text-brand-navy italic mb-2">Our Completed</span>
          <h1 className="text-6xl md:text-8xl font-black text-life-cyan uppercase tracking-tighter">Projects</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-brand-navy uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-life-cyan text-xs font-bold mb-2">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-life-cyan transition-colors line-clamp-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-brand-black"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">Eisen Precision</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Motif from User Image */}
      <div className="mt-32 flex flex-col items-center text-center">
        <p className="text-sm font-bold text-brand-navy uppercase tracking-[0.3em] mb-6">
          German<br />Technology Paints<br />For Africa
        </p>
        <div className="flex space-x-2">
          <div className="w-12 h-12 rounded-full bg-[#333333] shadow-inner"></div>
          <div className="w-12 h-12 rounded-full bg-[#E30613] shadow-inner"></div>
          <div className="w-12 h-12 rounded-full bg-[#FFCC00] shadow-inner"></div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-32 py-20 bg-brand-navy text-white rounded-[3rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-life-cyan opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <h2 className="text-4xl font-bold mb-6 relative z-10">Have a Project in Mind?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg relative z-10">
          Partner with Eisen Paints for your next construction or renovation. Our technical team is ready to assist with color consultancy and product specification.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-life-cyan text-brand-navy px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl relative z-10"
        >
          Work With Us
        </Link>
      </section>
    </div>
  );
};

export default ProjectsPage;
