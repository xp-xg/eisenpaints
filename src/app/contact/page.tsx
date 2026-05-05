import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="pt-20 pb-24 bg-white">
      {/* Header with Carousel Image */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/carousel/corousel-contact.png"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-life-cyan text-xl font-medium uppercase tracking-[0.2em]">
            Let's Bring Life to Your Space
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Whether you have a technical question about our German technology or need a quote for a large-scale project, our team is ready to help.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-navy border border-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Our Locations</h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <strong className="text-brand-navy block">Nakuru HQ:</strong>
                      Printing Press Road, Industrial Area, Nakuru City
                    </div>
                    <div>
                      <strong className="text-brand-navy block">Eldoret Branch:</strong>
                      Nairobi Road Business Centre, Pioneer
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-navy border border-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Email & Phone</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>info@eisenpaints.com</p>
                    <p>+254 758 094 985 (Nakuru HQ)</p>
                    <p>+254 113 713 285 (Eldoret Branch)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-navy border border-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Working Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p>Sat: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy px-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-life-cyan transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy px-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-life-cyan transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy px-1">Subject</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-life-cyan transition-all appearance-none">
                  <option>Product Inquiry</option>
                  <option>Request a Quote</option>
                  <option>Technical Support</option>
                  <option>Project Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy px-1">Message</label>
                <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-life-cyan transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-life-cyan hover:text-brand-navy transition-all duration-300 shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-24 h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.771452636718!2d36.0544243!3d-0.2854342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTcnMDcuNiJTIDM2wrAwMycyNS4yIkU!5e0!3m2!1sen!2ske!4v1714896123456!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
