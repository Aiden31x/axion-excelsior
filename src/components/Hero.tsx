import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Integrated Digital Training Solutions for{' '}
              <span className="text-blue-600">Canada</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We modernize education & training across schools, aviation, driving & manufacturing 
              with bilingual and compliant platforms designed for Canadian institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                Request a Demo
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg overflow-hidden">
                <Image
                  src="/hero-training-image.png"
                  alt="Digital Training Solutions - Aviation, Driving, and Manufacturing"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}