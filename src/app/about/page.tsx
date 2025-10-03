"use client"
// pages/AboutUs.tsx
import React, { useState } from 'react';
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Shield, Star, Award, Mail, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FlipTeamMemberCard from '@/components/FlipTeamMember';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StorySection from '@/components/StorySection';

// Types
interface CoreValue {
  icon: string; // Changed from React.ComponentType to string for image paths
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

// Main AboutUs Component
const AboutUs: React.FC = () => {

  const teamMembers: TeamMember[] = [
    {
      name: "Tata Rao",
      role: "Chief Technology Officer",
      briefDesc: "Tech leader with 13+ years delivering innovative engineering solutions.",
      detailedDesc: [
        "Expert in SAP, Microsoft Power Platform, and CAD/CAM technologies.",
        "Blends hands-on skills with strategic vision to accelerate growth."
      ],
      gradient: "from-purple-500 to-violet-500",
      image: "/aboutus/tatarao copy.jpg"
    },
    {
      name: "Anisha Aggarwal",
      role: "Marketing & Business Development",
      briefDesc: "Strategic marketer growing reach through data-driven storytelling.",
      detailedDesc: [
        "Industrial Engineer skilled in analytics and market expansion.",
        "Builds strong client relationships across industries."
      ],
      gradient: "from-violet-500 to-purple-500",
      image: "/aboutus/anisha.png"
    },
    {
      name: "Payal Uniyal",
      role: "HR Operations & Finance Manager",
      briefDesc: "Driving sales growth and operational excellence for 20+ years.",
      detailedDesc: [
        "Leads expansion, client success, and seamless execution.",
        "Co-founded AI House Tech Ltd., bringing a global outlook."
      ],
      gradient: "from-purple-500 to-indigo-500",
      image: "/aboutus/payal.jpg"
    }
  ];

  const coreValues: CoreValue[] = [
    { icon: "/aboutus/innovation.png", title: "Innovation", desc: "Always ahead of the curve", color: "purple" },
    { icon: "/aboutus/integrity.png", title: "Integrity", desc: "Transparency and trust in everything we do", color: "violet" },
    { icon: "/aboutus/customer.png", title: "Customer First", desc: "Creating value for our users and clients", color: "indigo" },
    { icon: "/aboutus/excellence.png", title: "Excellence", desc: "Striving for the highest quality in every product", color: "purple" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <Navbar />

      {/* Hero Section with Mountain Background */}
      <section className="relative py-24 px-6 overflow-hidden mt-16 min-h-screen flex items-center justify-center">
        {/* Mountain Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/abtus.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Purple Mountain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-violet-800/20 to-indigo-900/30"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-violet-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-purple-100 to-violet-100 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-purple-100">
              Empowering the future of education through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-6 bg-gradient-to-br from-white/80 via-purple-50/50 to-violet-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-purple-100/50">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Who We Are
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-purple-600">Excelsior Tech Inc</strong> is a young, ambitious EdTech startup with a simple yet powerful mindset of forward-thinking technology, a startup committed to building innovative digital solutions that empower businesses and individuals. Founded with the belief that technology should simplify lives, we are on a mission to bridge the gap between ideas and execution with smart, scalable, and user-friendly products.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Our journey began with a question:
              </p>

              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                <strong className="text-violet-600">&quot;What if schools, educators, students, and parents could all work together on one unified platform, with everything they need at their fingertips?&quot;</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Updated with Three Column Layout */}
      <StorySection />

      {/* Core Values - Updated with Purple Theme and Fixed Icon Rendering */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50/30 via-purple-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Our Ethics</h2>
            <p className="text-xl text-purple-700/80">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value: CoreValue, index: number) => {
              const gradientClasses: { [key: string]: string } = {
                purple: 'from-purple-500 to-purple-600',
                violet: 'from-violet-500 to-violet-600',
                indigo: 'from-indigo-500 to-indigo-600'
              };
              return (
                <div key={index} className="group relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 text-center group-hover:border-purple-200/70 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientClasses[value.color] || 'from-purple-500 to-purple-600'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <img
                        src={value.icon}
                        alt={value.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-800 mb-4 flex-shrink-0">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-center flex-grow">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - Updated with Purple Theme */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-purple-50/20 to-violet-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Leadership Team</h2>
            <p className="text-xl text-purple-700/80">The visionaries behind our success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member: TeamMember, index: number) => (
              <FlipTeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutUs;