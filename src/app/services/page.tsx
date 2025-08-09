import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';


export const metadata: Metadata = {
  title: 'Our Services - Snapshot Training Solutions',
  description: 'Comprehensive digital training solutions for schools, driving academies, aviation institutes, and manufacturing companies',
};

const services = [
  {
    id: 'lms',
    title: 'Student Learning Management System (LMS)',
    description: 'Comprehensive learning management system designed specifically for Canadian K-12 schools with provincial compliance and bilingual support.',
    features: [
      'Provincial curriculum alignment (BC, ON, QC, etc.)',
      'Bilingual interface (English/French)',
      'Assessment and grading tools',
      'Attendance tracking and reporting',
      'Parent and student portals',
      'Remote and blended learning support',
      'WCAG 2.1 AA accessibility compliance',
      'BC FIPPA compliant data handling'
    ],
    icon: '🎓',
    highlights: [
      'Province-specific customization',
      'Seamless remote learning integration',
      'Comprehensive reporting dashboards'
    ]
  },
  {
    id: 'driving',
    title: 'Driving School Management System',
    description: 'Complete management solution for driving schools with online booking, instructor management, and ministry compliance reporting.',
    features: [
      'Online booking and scheduling',
      'G-class and commercial license tracking',
      'Instructor management and scheduling',
      'Student progress tracking',
      'Digital logbooks and records',
      'Ministry compliance reporting',
      'Payment processing integration',
      'SMS and email notifications'
    ],
    icon: '🚗',
    highlights: [
      'Ministry of Transportation compliance',
      'Automated scheduling and reminders',
      'Comprehensive student tracking'
    ]
  },
  {
    id: 'aviation',
    title: 'Aircraft Training Institute Solutions',
    description: 'Specialized training platforms for flight schools with simulator integration and Transport Canada compliance.',
    features: [
      'Flight simulator integration',
      'Digital pilot logbooks',
      'Course management and tracking',
      'Safety incident reporting',
      'Certification management',
      'Transport Canada standards compliance',
      'Weather integration',
      'Aircraft maintenance tracking'
    ],
    icon: '✈️',
    highlights: [
      'Transport Canada compliance',
      'Real-time safety monitoring',
      'Advanced flight tracking systems'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Training & Digital Manuals',
    description: 'Interactive training solutions for manufacturing sectors including digital manuals and safety certification programs.',
    features: [
      'Interactive installation guides',
      'Safety certification tracking',
      'Employee onboarding programs',
      'Equipment training modules',
      'Compliance documentation',
      'Multi-language support',
      'Mobile-friendly interfaces',
      'Progress analytics and reporting'
    ],
    icon: '🏭',
    highlights: [
      'Industry-specific customization',
      'Safety compliance tracking',
      'Interactive multimedia training'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Training Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized digital platforms designed for diverse training environments 
              across Canada with full compliance and bilingual support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}