import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';


export const metadata: Metadata = {
  title: 'About Us - Snapshot Training Solutions',
  description: 'Learn about Snapshot Training Solutions, our mission, and the team behind Canada\'s leading digital training platforms',
};

const teamMembers = [
  {
    name: 'Vivek Mohan',
    role: 'Co-Founder & CEO',
    bio: 'Experienced technology leader with over 15 years in educational technology and digital transformation. Passionate about creating accessible and compliant solutions for Canadian institutions.',
    image: '/team/vivek-mohan.jpg',
    linkedin: '#'
  },
  {
    name: 'Tata Rao',
    role: 'Co-Founder & CTO',
    bio: 'Expert software architect with extensive experience in building scalable training platforms. Specializes in compliance frameworks and bilingual system design.',
    image: '/team/tata-rao.jpg',
    linkedin: '#'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Snapshot Training Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming training through digital solutions designed specifically for Canadian institutions
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Snapshot Training Solutions is a Canadian company dedicated to modernizing education and training 
              through innovative digital platforms. We specialize in creating comprehensive, compliant, and 
              accessible training solutions for diverse sectors including K-12 education, driving schools, 
              aviation institutes, and manufacturing companies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded with a deep understanding of Canadian regulatory requirements and educational standards, 
              we bridge the gap between traditional training methods and modern digital solutions. Our platforms 
              are designed from the ground up to meet provincial compliance requirements, support bilingual 
              operations, and ensure accessibility for all users.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What sets us apart is our commitment to understanding the unique needs of each sector we serve. 
              From K-12 curriculum alignment to Transport Canada aviation standards, we ensure our solutions 
              not only meet but exceed industry requirements while providing exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower Canadian institutions with cutting-edge digital training solutions that are accessible, 
                compliant, and designed to enhance learning outcomes across diverse educational and professional 
                training environments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be Canada&apos;s leading provider of specialized digital training platforms, setting the standard 
                for compliance, accessibility, and user experience in educational technology while supporting the 
                unique needs of Canadian institutions.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Team Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Led by experienced professionals with deep expertise in education technology and Canadian compliance requirements
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {teamMembers.map((teamMember, index) => (
        <TeamMember key={index} member={teamMember} />
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
