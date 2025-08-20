"use client"
// pages/AboutUs.tsx
import React, { useState } from 'react';
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Shield, Star, Award, Mail, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FlipTeamMemberCard from '@/components/FlipTeamMember';


// Types
interface CoreValue {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  briefDesc: string;
  detailedDesc: string[];
  skills?: string[];
  gradient: string;
  image?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}





// Main AboutUs Component
const AboutUs: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Tata Rao",
      role: "Chief Technology Officer",
      briefDesc: "Tech leader with 13+ years delivering innovative engineering solutions.",
      detailedDesc: [
        "Expert in SAP, Microsoft Power Platform, and CAD/CAM technologies.",
        "Blends hands-on skills with strategic vision to accelerate growth."
      ],
      gradient: "from-purple-500 to-blue-500",
      image: "/aboutus/tatarao copy.jpg" // Add your image path here
    },
    {
      name: "Anisha Aggarwal",
      role: "Marketing & Business Development",
      briefDesc: "Strategic marketer growing reach through data-driven storytelling.",
      detailedDesc: [
        "Industrial Engineer skilled in analytics and market expansion.",
        "Builds strong client relationships across industries."
      ],
      gradient: "from-blue-500 to-indigo-500",
      image: "/aboutus/anisha.png" // Add your image path here
    },
    {
      name: "Payal Uniyal",
      role: "Head of Sales & Operations",
      briefDesc: "Driving sales growth and operational excellence for 20+ years.",
      detailedDesc: [
        "Leads expansion, client success, and seamless execution.",
        "Co-founded AI House Tech Ltd., bringing a global outlook."
      ],
      gradient: "from-indigo-500 to-purple-500",
      image: "/aboutus/payal.jpg" // Add your image path here
    }
  ];  
  const coreValues: CoreValue[] = [
    { icon: Lightbulb, title: "Innovation", desc: "Always ahead of the curve", color: "purple" },
    { icon: Shield, title: "Integrity", desc: "Transparency and trust in everything we do", color: "blue" },
    { icon: Users, title: "Customer First", desc: "Creating value for our users and clients", color: "indigo" },
    { icon: Star, title: "Excellence", desc: "Striving for the highest quality in every product", color: "purple" }
  ];

  const toggleMemberExpansion = (index: number): void => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  const handleContactClick = (): void => {
    console.log('Contact us clicked');
  };

  const handleExploreClick = (): void => {
    console.log('Explore solutions clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Banner */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-indigo-600/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 tracking-tight">
              Meet Our Visionaries
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              The innovative minds shaping the future of education technology
            </p>
          </div>
          
          {/* Modern geometric illustration */}
          <div className="relative mt-16">
            <div className="flex justify-center items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl transform rotate-12 shadow-2xl animate-bounce delay-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-2xl animate-bounce delay-200"></div>
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl transform -rotate-6 shadow-2xl animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Redesigned */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Catalyzing institutional excellence through cutting-edge learning solutions that redefine how education is delivered and experienced.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To become a global leader delivering technology solutions that blend academic excellence with operational efficiency across all industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - More Visual */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value: CoreValue, index: number) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - Clean & Expandable */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">The visionaries behind our success</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member: TeamMember, index: number) => (
              <FlipTeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Transform Education?</h2>
          <p className="text-2xl mb-6 opacity-90">
            Join us in shaping the future of learning technology
          </p>
          <p className="text-lg mb-12 opacity-75 max-w-3xl mx-auto">
            Whether you&apos;re an educator, administrator, or technology partner, let&apos;s build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleContactClick}
              className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              <span>Get In Touch</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={handleExploreClick}
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Solutions</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;