'use client';
import { useState } from 'react';
import Image from 'next/image';

const segments = [
  {
    id: 'schools',
    title: 'K–12 Schools',
    description: 'Comprehensive learning management systems designed for Canadian curriculum standards with bilingual support and provincial compliance.',
    features: ['Campus Information Hub', 'Intelligent Form Management', 'Tailored Education Solutions', 'Student Wellness & Achievement','Future Proof Your Career','AI Driven Support Solutions','Interactive Engagement Strategies'],
    image: '/schools-training.png' // You'll need to add this image
  },
  {
    id: 'driving',
    title: 'Driving Academies',
    description: 'Complete management solutions for driving schools including online booking, instructor management, and ministry compliance reporting.',
    features: ['Online Booking', 'License Tracking', 'Instructor Scheduling', 'Progress Reports'],
    image: '/driving-training.png' // You'll need to add this image
  },
  {
    id: 'aviation',
    title: 'Aviation Institutes',
    description: 'Specialized training platforms for flight schools with simulator integration and Transport Canada compliance.',
    features: ['Flight Simulator Integration', 'Pilot Logbooks', 'Safety Tracking', 'Certification Management'],
    image: '/aviation-training.jpeg' // You'll need to add this image
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Companies',
    description: 'Digital training solutions for manufacturing sectors including interactive manuals and safety certification programs.',
    features: ['Interactive Manuals', 'Safety Certification', 'Onboarding Programs', 'Compliance Tracking'],
    image: '/manufacturing-training.jpeg' // You'll need to add this image
  }
];

export default function CustomerSegments() {
  const [activeTab, setActiveTab] = useState('schools');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Who We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized solutions for diverse training environments across Canada
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-purple-200">
          {segments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => setActiveTab(segment.id)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-all duration-300 ${activeTab === segment.id
                ? 'border-purple-600 text-purple-600 bg-purple-50 rounded-t-lg'
                : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-t-lg'
                }`}
            >
              {segment.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {segments.map((segment) => (
          activeTab === segment.id && (
            <div key={segment.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {segment.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {segment.description}
                </p>
                <ul className="space-y-3">
                  {segment.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-light-purple rounded-3xl p-8 hover-lift">
                <div className="aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={segment.image}
                    alt={`${segment.title} training`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover animate-float"
                    priority
                  />
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}