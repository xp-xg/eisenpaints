import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bring <span className="text-life-cyan">life</span> to your space
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Eisen Paints aspires to be the most trusted, innovative, and painter-empowering paint brand in Africa – delivering beauty, protection, and purpose in every coat.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-life-cyan text-brand-navy text-xs font-bold rounded-full mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl font-bold text-brand-navy mb-8">
                Powered by Trusted <span className="text-life-red uppercase">German Technology</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At <span className="font-bold text-brand-navy">EISEN Paints</span>, our mission is simple – to bring life and color into every space.
                </p>
                <p>
                  We create high-quality paints, powered by trusted <span className="font-bold text-brand-navy">GERMAN TECHNOLOGY</span>, that don&apos;t just cover walls – they tell stories, spark creativity, and stand the test of time.
                </p>
                <p>
                  We walk with painters, support every project with care, and go the extra mile for our customers. With every bucket, brush, and bold color, we&apos;re building homes, dreams, and a more vibrant, sustainable world.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
                    <Image src="/images/projects/Eisen_completed_project1.jpeg" alt="Quality Paint" fill className="object-cover" />
                  </div>
                  <div className="h-48 bg-life-cyan rounded-2xl flex items-center justify-center p-8 text-brand-navy">
                    <p className="text-xl font-bold text-center italic">
                      &quot;Because at EISEN, life is Colorful.&quot;
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-brand-navy rounded-2xl flex flex-col justify-center p-8 text-white">
                    <span className="text-4xl mb-2">🇩🇪</span>
                    <p className="font-bold uppercase tracking-widest text-sm">German Standards</p>
                  </div>
                  <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
                    <Image src="/images/projects/Eisen_completed_project2.jpeg" alt="Paint Application" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Beauty",
                desc: "Bringing vibrant, rich colors that transform any environment into a masterpiece.",
                icon: "✨"
              },
              {
                title: "Protection",
                desc: "High-performance coatings designed to withstand the elements and stand the test of time.",
                icon: "🛡️"
              },
              {
                title: "Purpose",
                desc: "Empowering painters and supporting every project with unmatched care and quality.",
                icon: "🤝"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
