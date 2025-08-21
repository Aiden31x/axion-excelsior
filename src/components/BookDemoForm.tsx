'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual values from EmailJS dashboard
const EMAILJS_CONFIG = {
  serviceId: 'service_n058jsv',     // e.g., 'service_abc123'
  templateId: 'template_f6mvkpa',   // e.g., 'template_xyz789'
  publicKey: 'PUoe2EQuAEuKYqytP'    // e.g., 'abcdefghijklmnop'
};

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.organization || !formData.email || !formData.service) {
      alert('Please fill in all required fields before proceeding.');
      return;
    }

    const phoneNumber = '917889177625'; // Replace with your WhatsApp number in international format
    const text = `Hello, I would like to book a demo.
Name: ${formData.name}
Organization: ${formData.organization}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(waLink, '_blank');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.organization || !formData.email || !formData.service) {
      alert('Please fill in all required fields before proceeding.');
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS once
      emailjs.init(EMAILJS_CONFIG.publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'aryandadwal2004@gmail.com' // Replace with your email
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      alert('✅ Demo request sent successfully! We will contact you soon.');

      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ Failed to send email. Please try the WhatsApp option or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Your organization name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="+1 (XXX) XXX-XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service of Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
        >
          <option value="">Select a service</option>
          <option value="LMS">Student Learning Management System</option>
          <option value="Driving">Driving School Management System</option>
          <option value="Aviation">Aircraft Training Institute Solutions</option>
          <option value="Manufacturing">Manufacturing Training & Digital Manuals</option>
          <option value="Multiple">Multiple Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          placeholder="Tell us about your training needs..."
        />
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Book a Demo on WhatsApp
        </button>
        
        <button
          type="button"
          onClick={handleEmailSubmit}
          disabled={isLoading}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isLoading ? '📧 Sending Email...' : 'Book a Demo via Email'}
        </button>
      </div>
    </div>
  );
}
