import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoForm from '@/components/BookDemoForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your training? Let’s discuss how we can help your organization.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Request a Demo</h2>
            <BookDemoForm />
          </div>

          {/* Contact Info */}
          <div>
            {/* ... keep your "Get in Touch" section here ... */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
