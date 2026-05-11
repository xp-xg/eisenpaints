'use client';

import React from 'react';
import Image from 'next/image';
import BrandBadge from '@/components/BrandBadge';

export default function AboutPage() {
  return (
    <div className="pt-20 selection:bg-life-cyan selection:text-white bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/carousel/corousel-aboutus.png"
          alt="About EiSEN Paints"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <BrandBadge light={false} className="mx-auto mb-12 animate-fade-in-up" />
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter animate-fade-in-up delay-100 font-display uppercase">
            Life is <span className="text-life-cyan italic">Colorful</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200 leading-relaxed">
            EiSEN Paints — powered by trusted German technology and built with an obsession for quality.
          </p>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px]">The Heart of EiSEN</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mt-4 font-display uppercase tracking-tight">A Message From Our Leadership</h2>
          </div>
          
          <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl shadow-brand-navy/10 border border-gray-100 relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-life-cyan rounded-3xl flex items-center justify-center text-white text-6xl font-black shadow-2xl transform -rotate-6">
              &quot;
            </div>
            <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                At EiSEN Paints, we believe paint is more than color on a wall — it is identity, protection, and the feeling of home.
              </p>
              <p>
                What started as a vision built on faith, excellence, and hard work has grown into a proudly Kenyan brand powered by trusted German technology and an obsession with quality. In an industry where shortcuts are common, we chose a different path — a path of integrity, consistency, and building products that truly perform.
              </p>
              <p>
                Over the years, we have continued to grow by listening to our customers, supporting painters on the ground, and investing in innovation that meets the needs of modern homes and projects across Kenya and beyond.
              </p>
              <p>
                We are especially proud of the strong relationships we have built with painters, contractors, developers, and homeowners who trust EiSEN Paints every day. Their belief in our quality continues to inspire us to improve, expand, and dream bigger.
              </p>
              <p>
                As we look to the future, our mission remains clear:
                To create world-class paints, empower communities, and build an African brand known for excellence.
              </p>
              <p>
                At EiSEN, we do not just manufacture paint — we build trust, transform spaces, and color the future with purpose.
              </p>
              <div className="pt-10 mt-10 border-t border-gray-100">
                 <p className="font-black text-brand-navy text-2xl font-display">
                    EiSEN Paints — Life is Colorful.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
        {/* Abstract Paint Splashes */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-life-cyan/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-16">
              <div>
                <h3 className="text-life-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">The North Star</h3>
                <h2 className="text-5xl md:text-7xl font-black font-display mb-10 leading-[0.9]">EiSEN Paints <br />Vision</h2>
                <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-medium border-l-8 border-brand-gold pl-8 py-4">
                  To be Africa’s most trusted and innovative paint brand — empowering painters, transforming spaces, and delivering beauty, protection, and purpose in every coat.
                </p>
              </div>
              
              <div className="h-px w-full bg-white/10"></div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-inner">
                <h3 className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-10">EiSEN Paints Strategy</h3>
                <p className="text-xl text-white mb-10 font-bold">Our strategy is built on quality, people, innovation, and purposeful growth.</p>
                <div className="space-y-8">
                  {[
                    "Delivering exceptional paint quality that speaks for itself.",
                    "Empowering painters through training, partnerships, and opportunities.",
                    "Providing excellent customer experience with honesty, reliability, and care.",
                    "Driving innovation through advanced technology and sustainable solutions.",
                    "Expanding strategically by building strong relationships with homeowners, contractors, developers, and distributors across Africa."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-4 h-4 rounded-full bg-brand-gold mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-gray-300 font-medium text-lg leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-lg font-black text-life-cyan uppercase tracking-wider">
                        At EiSEN Paints, we are not just building a paint company — we are building a trusted African brand that colors the future with excellence and purpose.
                    </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-brand-navy p-12 md:p-20 rounded-[4rem] shadow-2xl lg:mt-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-life-cyan/5 rounded-bl-[4rem]"></div>
              <h3 className="text-life-cyan font-black uppercase tracking-[0.3em] text-xs mb-8">The Daily Commitment</h3>
              <h2 className="text-5xl font-black font-display mb-12 leading-tight">EiSEN Paints Mission</h2>
              <div className="space-y-10 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  At EiSEN Paints, our mission is to bring life and color into every space through high-quality paints powered by trusted German technology.
                </p>
                <p>
                  We create products that do more than cover walls — they inspire confidence, spark creativity, and stand the test of time.
                </p>
                <p>
                  We are committed to supporting painters, serving our customers with excellence, and building lasting relationships through quality, integrity, and innovation.
                </p>
                <p>
                  With every project, we aim to create beautiful spaces, empower communities, and contribute to a more vibrant and sustainable future.
                </p>
                <div className="pt-10">
                    <p className="text-3xl font-black text-brand-navy font-display">
                        Because at EiSEN, <span className="text-life-cyan italic underline decoration-brand-gold decoration-4 underline-offset-8">Life is Colorful.</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
            <span className="text-life-cyan font-black uppercase tracking-[0.3em] text-xs">What We Stand For</span>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy font-display mt-6 mb-6 uppercase tracking-tighter">Core Values</h2>
            <div className="w-32 h-2 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { letter: "E", title: "Excellence in Every Drop", desc: "We pursue excellence in every product and project, honoring God through quality and workmanship." },
              { letter: "i", title: "Innovation with Impact", desc: "We combine trusted German technology with creativity and continuous improvement to deliver lasting solutions." },
              { letter: "S", title: "Service with Heart", desc: "We serve with humility, honesty, and care — treating customers, painters, and partners with respect and dignity." },
              { letter: "E", title: "Empowering Communities", desc: "We believe in uplifting painters, supporting local talent, and creating opportunities that positively impact lives." },
              { letter: "N", title: "Nurturing Purpose & Lasting Color", desc: "We build with integrity, steward our resources responsibly, and create lasting beauty that inspires generations." }
            ].map((val, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-navy text-white rounded-[2rem] flex items-center justify-center text-6xl font-black mb-10 group-hover:scale-110 group-hover:bg-life-cyan transition-all duration-700 shadow-xl font-display group-hover:rotate-6">
                  {val.letter}
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-6 font-display tracking-tight leading-tight">{val.title}</h3>
                <p className="text-gray-500 font-bold text-base leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center bg-brand-navy p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-life-cyan/10 rounded-full blur-3xl"></div>
            <p className="text-4xl md:text-5xl font-black text-white font-display tracking-[0.2em] mb-6 uppercase">Faith. Quality. Purpose.</p>
            <p className="text-life-cyan font-black text-5xl font-display tracking-tight">#MunguMbele</p>
            <div className="mt-12">
               <p className="text-brand-gold font-black text-xl italic uppercase tracking-widest">EiSEN Paints — Life is Colorful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="flex-1">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs">The Road Ahead</span>
              <h2 className="text-5xl md:text-7xl font-black text-brand-navy font-display mt-6 mb-10 leading-tight tracking-tighter uppercase">Future Plans</h2>
              <div className="space-y-8 text-xl text-gray-600 font-medium leading-relaxed">
                <p>
                  Driven by our vision to become Africa’s most trusted paint brand, EiSEN Paints continues to invest in quality, innovation, people, and sustainable growth.
                </p>
                <p>
                  As demand for the EiSEN brand grows across Kenya and beyond, we are focused on expanding our manufacturing capacity, strengthening our painter network, and building a world-class African paint company.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full relative">
               <div className="grid grid-cols-2 gap-8">
                  <div className="bg-life-cyan aspect-square rounded-[4rem] p-12 flex flex-col justify-end shadow-2xl transform -rotate-3 group hover:rotate-0 transition-transform duration-500">
                    <span className="text-white text-5xl mb-6">🚀</span>
                    <p className="text-white font-black text-3xl uppercase font-display leading-none tracking-tighter">Expanding <br />Capacity</p>
                  </div>
                  <div className="bg-brand-navy aspect-square rounded-[4rem] p-12 flex flex-col justify-end shadow-2xl transform rotate-6 group hover:rotate-0 transition-transform duration-500 translate-y-16">
                    <span className="text-white text-5xl mb-6">🌍</span>
                    <p className="text-white font-black text-3xl uppercase font-display leading-none tracking-tighter">Regional <br />Growth</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Manufacturing Expansion",
                content: (
                  <>
                    <p>We are continuously investing in modern production systems and advanced technology to improve efficiency, consistency, and product quality.</p>
                    <p className="mt-4 font-bold text-brand-navy uppercase text-sm mb-4">This expansion will:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Increase production capacity</li>
                      <li>Improve product consistency and turnaround time</li>
                      <li>Support growing demand across Kenya and East Africa</li>
                      <li>Strengthen our ability to innovate and develop new paint solutions</li>
                    </ul>
                  </>
                ),
                footer: "At EiSEN, quality remains our foundation — no shortcuts, just quality.",
                color: "border-life-cyan/30"
              },
              {
                title: "Product Innovation & Research",
                content: (
                  <>
                    <p>Innovation is part of our DNA.</p>
                    <p className="mt-4 font-bold text-brand-navy uppercase text-sm mb-4">We are working on:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Advanced exterior protection systems</li>
                      <li>Eco-friendly and low-VOC paint solutions</li>
                      <li>Improved textures and decorative finishes</li>
                      <li>High-performance waterproofing and roofing solutions</li>
                      <li>Expanded color technologies and durable finishes</li>
                    </ul>
                  </>
                ),
                footer: "Our goal is simple: create paints that perform beautifully in African conditions.",
                color: "border-brand-gold/30"
              },
              {
                title: "Painter Empowerment Program",
                content: (
                  <>
                    <p>Painters are at the heart of our growth.</p>
                    <p className="mt-4 font-bold text-brand-navy uppercase text-sm mb-4">Through the EiSEN Blue Army initiative, we aim to:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Train and certify painters across Kenya</li>
                      <li>Create sustainable opportunities for fundis</li>
                      <li>Build strong partnerships with contractors and developers</li>
                      <li>Provide branded support materials and technical guidance</li>
                    </ul>
                  </>
                ),
                footer: "When painters grow, EiSEN grows.",
                color: "border-brand-navy/30"
              },
              {
                title: "Market Expansion",
                content: (
                  <>
                    <p>EiSEN Paints is strategically expanding into major towns and counties across Kenya, while laying the foundation for regional growth across East Africa.</p>
                    <p className="mt-4 font-bold text-brand-navy uppercase text-sm mb-4">Our focus includes:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>New dealer partnerships</li>
                      <li>Increased project support teams</li>
                      <li>Stronger distribution networks</li>
                      <li>Greater visibility through activations, expos, and strategic collaborations</li>
                    </ul>
                  </>
                ),
                footer: "We are building one relationship, one town, and one success story at a time.",
                color: "border-brand-red/30"
              },
              {
                title: "Sustainability & Community Impact",
                content: (
                  <>
                    <p>We believe growth should create positive impact.</p>
                    <p className="mt-4 font-bold text-brand-navy uppercase text-sm mb-4">EiSEN Paints is committed to:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Responsible manufacturing practices</li>
                      <li>Cleaner and safer paint technologies</li>
                      <li>Supporting local talent and communities</li>
                      <li>Creating employment opportunities through manufacturing and painter empowerment</li>
                    </ul>
                  </>
                ),
                footer: "Because at EiSEN, we are not just coloring spaces — we are building futures.",
                color: "border-life-lime/30"
              }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white p-12 rounded-[3.5rem] border ${plan.color} shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col group`}>
                <h3 className="text-3xl font-black text-brand-navy font-display mb-8 group-hover:text-life-cyan transition-colors">{plan.title}</h3>
                <div className="text-gray-500 font-bold text-base leading-relaxed mb-10 flex-grow">
                  {plan.content}
                </div>
                <div className="pt-8 border-t border-gray-100 mt-auto">
                  <p className="text-brand-navy font-black text-sm uppercase tracking-wider italic leading-tight">{plan.footer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-life-cyan via-brand-gold via-brand-red to-life-lime"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs">Milestones</span>
              <h2 className="text-5xl md:text-8xl font-black font-display mt-6 mb-12 leading-[0.9] tracking-tighter uppercase">Our <br />Achievements</h2>
              <div className="space-y-8 text-xl text-gray-300 font-medium leading-relaxed">
                <p>
                  At EiSEN Paints, every milestone is a reflection of hard work, faith, quality, and the people who believe in our brand.
                </p>
                <p>
                  Today, EiSEN Paints is proud to be recognized as one of the leading paint manufacturers in the Rift Valley region — trusted by homeowners, painters, contractors, and developers for quality that speaks for itself.
                </p>
              </div>
            </div>
            
            <div className="flex-1 bg-white/5 backdrop-blur-3xl p-6 sm:p-12 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 relative group shadow-[0_0_100px_rgba(0,174,239,0.1)]">
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="relative z-10">
                 <div className="text-8xl mb-12 drop-shadow-2xl">🏆</div>
                 <p className="text-brand-gold font-black uppercase tracking-[0.4em] text-sm mb-6">National Recognition</p>
                 <h3 className="text-lg sm:text-2xl md:text-5xl font-black font-display mb-10 leading-[1.1] tracking-tight">1st Runners Up <br /><span className="text-life-cyan uppercase block mt-2 break-words">Women in Manufacturing (WIM)</span></h3>
                 <p className="text-gray-300 font-medium text-lg leading-relaxed mb-12 border-l-4 border-life-cyan pl-8">
                   This recognition celebrates our commitment to manufacturing excellence, innovation, quality, and empowering communities through local industry.
                 </p>
                 <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
                   From humble beginnings to becoming a growing Kenyan brand powered by trusted German technology, we continue to build with purpose and passion.
                 </p>
                 <div className="h-px w-20 bg-brand-gold mb-10"></div>
                 <p className="font-black text-2xl italic font-display tracking-tight text-white leading-tight">
                   &quot;And this is only the beginning.&quot;
                 </p>
               </div>
            </div>
          </div>
          
          <div className="mt-40 text-center">
            <BrandBadge light={false} className="mx-auto mb-16 scale-[1.5] animate-pulse" />
            <p className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-none mb-4">EiSEN Paints</p>
            <p className="text-3xl md:text-5xl font-black font-display text-life-cyan italic tracking-tight">Life is Colorful.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
