import { Flame, MessageCircle, Shield, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.ts';
import testimonials from '../data/testmonials.ts';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const nextImage = (productId: number) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      const currentIndex = prev[productId] || 0;
      return {
        ...prev,
        [productId]: product ? (currentIndex + 1) % product.images.length : 0
      };
    });
  };

  const prevImage = (productId: number) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      const currentIndex = prev[productId] || 0;
      return {
        ...prev,
        [productId]: product ? (currentIndex - 1 + product.images.length) % product.images.length : 0
      };
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroblack.webp"
            alt="Luxury Kitchen"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-black/50 z-20"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-0 sm:pt-0 lg:pt-0 pb-10 sm:pb-14 lg:pb-18">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              The VISION that stands for your SAFETY
              <span className="block text-[#004AAD] mt-2">ㅤ</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
              Products built to protect your home and work the way they should -- every day
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Premium Collection</h2>

          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                inStock={product.inStock}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Asachi</h2>
            <p className="mt-4 text-gray-600">Engineered for performance, designed for excellence</p>
          </div>

          <div className="flex justify-center items-center mx-16 mt-4">
            <img src="./images/gas-labeled.webp" alt="Asachi" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Flame className="h-6 w-6 text-[#004AAD]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Superior Heat Control</h3>
              <p className="mt-4 text-gray-600">Precise temperature regulation for perfect cooking results every time.</p>
            </div>

            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Shield className="h-6 w-6 text-[#004AAD]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Built to Last</h3>
              <p className="mt-4 text-gray-600">Premium materials and craftsmanship ensure years of reliable performance.</p>
            </div>

            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Zap className="h-6 w-6 text-[#004AAD]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Energy Efficient</h3>
              <p className="mt-4 text-gray-600">Advanced technology for optimal fuel consumption and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Customers Say</h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After You Buy */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-8 py-14 sm:px-14 sm:py-18 text-center">
            <p className="text-sm font-semibold text-[#004AAD] uppercase tracking-wider">After you BUY</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">We stay with you.</h2>
            <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto">
              From installation to maintenance, we're there. Clear answers. Real support. No runaround.
            </p>
            <p className="mt-4 text-white font-semibold text-lg">
              Because safety doesn't end at the sale.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/9645445546?text=Hello, I need assistance with Asachi products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors"
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

export default HomePage;
