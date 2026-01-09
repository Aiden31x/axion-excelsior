import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-purple-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Advancing capability with innovation built for the future
        </h2>
        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
          Designed for tomorrow’s potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-lift">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
