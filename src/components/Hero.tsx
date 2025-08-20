import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-purple-100 to-blue-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-purple-pink rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-blue-purple rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Elevate your skills with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Future-Proof Training
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Future-proof your workforce with immersive digital training across aviation,
              driving, manufacturing, and education sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-gradient-purple-blue hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center hover-lift shadow-lg">
                Explore Programs
              </Link>
              <Link href="/services" className="border-2 border-purple-500 text-purple-600 hover:bg-gradient-purple-blue hover:text-white hover:border-transparent px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center hover-lift">
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover-lift">
              <div className="aspect-[3/4] bg-gradient-light-purple rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20"></div>
                <Image
                  src="/herosection.png"
                  alt="Digital Training Solutions - Aviation, Driving, and Manufacturing"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-purple-pink rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-blue-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}