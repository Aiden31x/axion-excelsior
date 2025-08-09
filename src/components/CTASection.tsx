import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Let&apos;s power your digital training transformation
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Explore how we can help your team or institution achieve training excellence 
          with our Canadian-compliant digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Request a Demo
          </Link>
          <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
