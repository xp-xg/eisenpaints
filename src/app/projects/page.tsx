import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

const projects = [
  {
    title: "Urban Mixed-Use Complex",
    location: "Regional Site",
    description: "A large-scale commercial hub featuring our all-weather protection for long-lasting durability.",
    image: "/images/projects/Eisen_completed_project1.jpeg",
    category: "Commercial"
  },
  {
    title: "High-Density Apartment Block",
    location: "Regional Site",
    description: "Modern residential development using our premium emulsion for elegant, washable interior finishes.",
    image: "/images/projects/Eisen_completed_project2.jpeg",
    category: "Residential"
  },
  {
    title: "Contemporary Residential Suites",
    location: "Regional Site",
    description: "Premium housing project showcasing the vibrant color consistency of our architectural coatings.",
    image: "/images/projects/Eisen_completed_project3.jpeg",
    category: "Residential"
  },
  {
    title: "Private Suburban Residence",
    location: "Regional Site",
    description: "A residential masterpiece featuring our eco-friendly, low-VOC paint range for healthy living spaces.",
    image: "/images/projects/Eisen_completed_project4.jpeg",
    category: "Residential"
  },
  {
    title: "Modern Mid-Rise Development",
    location: "Regional Site",
    description: "A striking architectural landmark utilizing our specialty textures for a modern, weather-resistant facade.",
    image: "/images/projects/Eisen_completed_project5.jpeg",
    category: "Commercial"
  },
  {
    title: "Premium Condominium Estate",
    location: "Regional Site",
    description: "Luxury condominium complex featuring premium interior coatings for a sophisticated, high-end feel.",
    image: "/images/projects/Eisen_completed_project6.jpeg",
    category: "Residential"
  },
  {
    title: "Urban Housing Heights",
    location: "Regional Site",
    description: "High-density residential project demonstrating cost-effective yet durable coating solutions.",
    image: "/images/projects/Eisen_completed_project7.jpeg",
    category: "Residential"
  },
  {
    title: "Large-Scale Residential Estate",
    location: "Regional Site",
    description: "Expansive gated community development featuring a harmonious palette of Eisen earth tones.",
    image: "/images/projects/Eisen_completed_project8.jpeg",
    category: "Residential"
  },
  {
    title: "Central District Tower",
    location: "Regional Site",
    description: "Multi-story commercial tower protected by our high-build architectural coatings for superior coverage.",
    image: "/images/projects/Eisen_completed_project9.jpeg",
    category: "Commercial"
  },
  {
    title: "Coastal Hospitality Suites",
    location: "Regional Site",
    description: "Coastal hospitality project utilizing salt-resistant exterior finishes for long-term vibrant color.",
    image: "/images/projects/Eisen_completed_project10.jpeg",
    category: "Hospitality"
  },
  {
    title: "Corporate Distribution Center",
    location: "Regional Site",
    description: "Modern corporate facility utilizing our professional grade interior paints for a sophisticated, durable finish.",
    image: "/images/projects/Eisen_completed_project11_office.jpeg",
    category: "Commercial"
  },
  {
    title: "Contemporary Private Villa",
    location: "Regional Site",
    description: "Exquisite private villa project using our specialized surface preparation products for a flawless finish.",
    image: "/images/projects/Eisen_completed_project12.jpeg",
    category: "Residential"
  },
  {
    title: "Suburban Apartment Complex",
    location: "Regional Site",
    description: "Multi-unit residential complex featuring our vibrant, fade-resistant exterior coatings.",
    image: "/images/projects/Eisen_completed_project13.jpeg",
    category: "Residential"
  },
  {
    title: "Multi-Story Construction Project",
    location: "Regional Site",
    description: "Ongoing commercial construction phase utilizing our heavy-duty protective primers and undercoats.",
    image: "/images/projects/Eisen_completed_project14.jpeg",
    category: "Commercial"
  },
  {
    title: "Commercial Retail Hub",
    location: "Regional Site",
    description: "Retail chain hub with high-traffic durability requirements met by Eisen specialty coatings.",
    image: "/images/projects/Eisen_completed_project15.jpeg",
    category: "Commercial"
  }
];

const ProjectsPage = () => {
  return (
    <div className="bg-white flex flex-col w-full">
      {/* Header with Carousel Image */}
      <Hero imageSrc="/images/hero/Eisen-projects--nav-1920w.webp" altText="Our Completed Projects" />

      <section className="py-24 bg-white overflow-hidden">
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
      </section>

      {/* Footer Motif from User Image */}
      <div className="mt-32 flex flex-col items-center text-center pb-8">
        <p className="text-brand-navy font-black text-sm uppercase tracking-[0.2em] text-center leading-snug mb-3">
          German<br />Technology Paints<br />for Africa
        </p>
        <div className="flex items-center -space-x-2 mt-2">
          <span className="w-12 h-12 bg-brand-black rounded-full relative z-10" />
          <span className="w-12 h-12 bg-brand-red rounded-full relative z-20" />
          <span className="w-12 h-12 bg-brand-gold rounded-full relative z-10" />
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
