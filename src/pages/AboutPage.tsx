import { Award, Eye, Flame, Heart, MessageCircle, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every product undergoes rigorous quality testing. Your family\'s safety is non-negotiable.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only the finest stainless steel and components, built to perform for years.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Dedicated support and warranty programs because we stand behind every product we make.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuously improving our designs with modern engineering and customer feedback.',
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroblack.webp"
            alt="Asachi Workshop"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-black/60 z-20"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#004AAD] font-semibold tracking-widest uppercase text-sm">Our Story</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Asachi
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Crafting premium cooking experiences with an unwavering commitment to safety, quality, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-6 w-6 text-[#004AAD]" />
                <span className="text-sm font-semibold text-[#004AAD] uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                At Asachi, safety comes first.
              </h2>
              <p className="mt-6 text-lg text-gray-500 font-medium">
                Before design. Before trends. Before profit.
              </p>
              <p className="mt-5 text-gray-600 leading-relaxed">
                We build products that don't compromise. Solid construction. Stable performance.
                Long-lasting materials. Every stove that carries our name has been held to a
                standard we'd trust in our own homes.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                And we don't just sell and disappear. We deliver. We install. We maintain.
                Because a product is only as safe as the care behind it.
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                If it enters your home, it must be safe — and it must stay safe.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/three-burner-1.jpeg"
                  alt="Asachi Triple Burner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8">
                <img
                  src="/images/burner.jpeg"
                  alt="Asachi Burner Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#004AAD]/10 mb-6">
                <Eye className="h-6 w-6 text-[#004AAD]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A safer life with quality living.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#004AAD]/10 mb-6">
                <Target className="h-6 w-6 text-[#004AAD]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To ensure safety, well-being, and joy in the lives of the people we serve — through
                products built to last, and care that never stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#004AAD] uppercase tracking-wider">What Drives Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#004AAD]/10 mb-5">
                  <value.icon className="h-6 w-6 text-[#004AAD]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After You Buy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#004AAD] uppercase tracking-wider">After you BUY</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">We stay with you.</h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              From installation to maintenance, we're there. Clear answers. Real support. No runaround.
            </p>
            <p className="mt-4 text-gray-900 font-semibold text-lg">
              Because safety doesn't end at the sale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-8 py-14 sm:px-14 sm:py-18 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to upgrade your kitchen?</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Explore our range of premium gas stoves or get in touch — we'd love to help you find the perfect fit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors"
              >
                View Products
              </Link>
              <a
                href="https://wa.me/9645445546?text=Hello, I'd like to know more about Asachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
