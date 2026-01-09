import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoForm from '@/components/BookDemoForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-purple-100 to-blue-50 py-20 text-center relative overflow-hidden">
        {/* Background decorative elements matching footer */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/logofinal_1.jpeg"
                alt="ExcelsiorTech Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="ml-4 text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ExcelsiorTech</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your training through digital solutions? Let&apos;s discuss how we can help your
            Canadian institution with bilingual and compliant platforms.
          </p>
        </div>
      </section>

      {/* Centered Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Form Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-200/30 relative overflow-hidden">
            {/* Card decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20"></div>

            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Request a <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Demo</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your training needs
              </p>
            </div>

            <div className="relative z-10">
              <BookDemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Multiple ways to reach our team of digital training experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/30 text-center relative overflow-hidden hover-lift transition-all duration-300">
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full opacity-30"></div>

              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Email Us</h4>
              <p className="text-gray-700 relative z-10">info@axionexcelsior.ca</p>
            </div>

            {/* Phone */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/30 text-center relative overflow-hidden hover-lift transition-all duration-300">
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30"></div>

              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Call Us</h4>
              <p className="text-gray-700 relative z-10">+1 236-978-5255</p>
            </div>

            {/* Office */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/30 text-center relative overflow-hidden hover-lift transition-all duration-300">
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30"></div>

              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Visit Us</h4>
              <p className="text-gray-700 relative z-10">
                Made in Canada 🇨🇦<br />
                <span className="text-sm">for Canadian institutions</span>
              </p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}