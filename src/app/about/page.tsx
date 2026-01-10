"use client"
// pages/AboutUs.tsx
import React, { useState } from 'react';
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Shield, Star, Award, Mail, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FlipTeamMemberCard from '@/components/FlipTeamMember';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StorySection from '@/components/StorySection';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();

  // Merge team data from translations with UI properties
  const teamMembers: TeamMember[] = t.about.team.map((member, index) => {
    const gradients = [
      "from-purple-500 to-violet-500",
      "from-violet-500 to-purple-500",
      "from-purple-500 to-indigo-500"
    ];
    const images = [
      "/aboutus/tatarao copy.jpg",
      "/aboutus/anisha.png",
      "/aboutus/payal.jpg"
    ];
    return {
      ...member,
      gradient: gradients[index],
      image: images[index]
    };
  });

  const coreValues: CoreValue[] = [
    { icon: "/aboutus/innovation.png", title: t.about.values.innovation.title, desc: t.about.values.innovation.description, color: "purple" },
    { icon: "/aboutus/integrity.png", title: t.about.values.integrity.title, desc: t.about.values.integrity.description, color: "violet" },
    { icon: "/aboutus/customer.png", title: t.about.values.customerFirst.title, desc: t.about.values.customerFirst.description, color: "indigo" },
    { icon: "/aboutus/excellence.png", title: t.about.values.excellence.title, desc: t.about.values.excellence.description, color: "purple" }
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
              {t.about.title}
            </h1>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-purple-100">
              {t.about.subtitle}
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
                {t.about.whoWeAre}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-purple-600">Excelsior Tech Inc</strong> {t.about.description1}
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                {t.about.description2}
              </p>

              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                <strong className="text-violet-600">{t.about.description3}</strong>
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">{t.about.ourEthics}</h2>
            <p className="text-xl text-purple-700/80">{t.about.ethicsSubtitle}</p>
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">{t.about.leadershipTeam}</h2>
            <p className="text-xl text-purple-700/80">{t.about.leadershipSubtitle}</p>
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