"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const K12SchoolsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const features = [
    {
      icon: "/icons/school.png",
      gradient: "from-blue-500 to-cyan-400",
      title: "Campus Information Hub",
      subtitle: "Centralized Intelligence",
      description: "Transform your school's data management with our comprehensive student information system. Monitor real-time attendance, track academic progress, and maintain compliance effortlessly.",
      details: ["Real-Time Student Data Management", "Comprehensive Campus Management", "Secure and compliant record-keeping"],
      stats: { number: "99.9%", label: "Data Accuracy" },
      color: "blue"
    },
    {
      icon: "/icons/form.png",
      gradient: "from-purple-500 to-pink-400",
      title: "Intelligent Form Management",
      subtitle: "Streamlined Digital Experience",
      description: "Revolutionize enrollment and registration processes with AI-powered digital forms that adapt to your needs and provide predictive analytics.",
      details: ["Digital Form Solutions", "Enrollment Made Easy", "AI-powered form management"],
      stats: { number: "75%", label: "Time Saved" },
      color: "purple"
    },
    {
      icon: "/icons/education.png",
      gradient: "from-green-500 to-teal-400",
      title: "Tailored Education Solutions",
      subtitle: "Personalized Learning Ecosystem",
      description: "Deliver customized educational experiences with our advanced LMS platform designed for collaborative learning and curriculum alignment.",
      details: ["Curriculum-Centric Solutions", "Data-Driven Education", "Customizable Education Technology"],
      stats: { number: "40%", label: "Better Outcomes" },
      color: "green"
    },
    {
      icon: "/icons/student.png",
      gradient: "from-yellow-500 to-orange-400",
      title: "Student Wellness & Achievement",
      subtitle: "Holistic Student Support",
      description: "Foster student success through comprehensive wellness tracking, behavioral insights, and targeted intervention strategies.",
      details: ["Wellness & Achievement Platform", "Holistic Student Support", "Student Thrival Platform"],
      stats: { number: "85%", label: "Student Engagement" },
      color: "yellow"
    },
    {
      icon: "/icons/career.png",
      gradient: "from-indigo-500 to-blue-400",
      title: "Future-Proof Your Career Planning",
      subtitle: "Pathway to Success",
      description: "Prepare students for tomorrow's workforce with interactive career exploration tools and personalized academic planning features.",
      details: ["Pathway to Success", "Prepare for Liftoff", "Future-Ready Students"],
      stats: { number: "90%", label: "Career Readiness" },
      color: "indigo"
    },
    {
      icon: "/icons/analysis.png",
      gradient: "from-red-500 to-pink-400",
      title: "Advanced Analytics & Insights",
      subtitle: "Data-Driven Decision Making",
      description: "Unlock powerful insights with sophisticated data visualization and predictive analytics to identify opportunities and risks.",
      details: ["Student Success Analytics", "School Improvement Solutions", "Actionable Intelligence"],
      stats: { number: "60%", label: "Better Decisions" },
      color: "red"
    },
    {
      icon: "/icons/handshake.png",
      gradient: "from-teal-500 to-green-400",
      title: "Interactive Engagement Hub",
      subtitle: "Connected Community",
      description: "Build stronger school communities with integrated communication platforms that keep everyone informed and engaged.",
      details: ["Streamlined Communication", "Secure Collaboration", "Real-Time Engagement"],
      stats: { number: "95%", label: "Parent Satisfaction" },
      color: "teal"
    },
    {
      icon: "/icons/aisystem.png",
      gradient: "from-violet-500 to-purple-400",
      title: "AI-Powered Support Systems",
      subtitle: "Intelligent Automation",
      description: "Leverage cutting-edge AI technology for smarter assessments, personalized guidance, and automated administrative tasks.",
      details: ["AI-Enhanced Education", "Smart Support Solutions", "Innovative AI Solutions"],
      stats: { number: "50%", label: "Admin Time Saved" },
      color: "violet"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    features.forEach((_, index) => {
      const element = document.getElementById(`feature-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const coreFeatures = [
    "Assessment & Grading",
    "Attendance Tracking",
    "Parent Portals",
    "Curriculum Alignment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20" style={{ background: '#f7f1fe' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20" style={{ background: '#eccaf3' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10" style={{ background: '#eccaf3' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Revolutionary Educational
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of education with our comprehensive suite of intelligent tools designed to transform learning outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Featured Spotlight */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                  style={{ background: `linear-gradient(to right, ${features[activeFeature].color === 'blue' ? '#3b82f6, #06b6d4' : features[activeFeature].color === 'purple' ? '#8b5cf6, #ec4899' : features[activeFeature].color === 'green' ? '#10b981, #14b8a6' : '#f59e0b, #f97316'})` }}
                ></div>
                <div
                  className="relative rounded-2xl p-8 text-center text-white"
                  style={{ background: `linear-gradient(to right, ${features[activeFeature].color === 'blue' ? '#3b82f6, #06b6d4' : features[activeFeature].color === 'purple' ? '#8b5cf6, #ec4899' : features[activeFeature].color === 'green' ? '#10b981, #14b8a6' : '#f59e0b, #f97316'})` }}
                >
                  <div className="text-6xl mb-4">
                    {typeof features[activeFeature].icon === 'string' && features[activeFeature].icon.startsWith('/') ? (
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto">
                        <Image
                          src={features[activeFeature].icon}
                          alt={features[activeFeature].title}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span>{features[activeFeature].icon}</span>
                    )}
                  </div>
                  <div className="text-4xl font-bold mb-2">{features[activeFeature].stats.number}</div>
                  <div className="text-lg opacity-90">{features[activeFeature].stats.label}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-sm font-semibold text-purple-600 mb-2">{features[activeFeature].subtitle}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{features[activeFeature].title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{features[activeFeature].description}</p>
              <div className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-4"
                      style={{ background: `linear-gradient(to right, ${features[activeFeature].color === 'blue' ? '#3b82f6, #06b6d4' : features[activeFeature].color === 'purple' ? '#8b5cf6, #ec4899' : features[activeFeature].color === 'green' ? '#10b981, #14b8a6' : '#f59e0b, #f97316'})` }}
                    ></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Complete Educational Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the tools and features that make learning seamless and effective
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-${index}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform ${isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Card content */}
              <div className="relative bg-white p-8 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">

                {/* Animated icon background */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500 scale-110"
                    style={{ background: `linear-gradient(to right, ${feature.color === 'blue' ? '#3b82f6, #06b6d4' : feature.color === 'purple' ? '#8b5cf6, #ec4899' : feature.color === 'green' ? '#10b981, #14b8a6' : feature.color === 'yellow' ? '#f59e0b, #f97316' : feature.color === 'indigo' ? '#6366f1, #3b82f6' : feature.color === 'red' ? '#ef4444, #ec4899' : feature.color === 'teal' ? '#14b8a6, #10b981' : '#8b5cf6, #a855f7'})` }}
                  ></div>
                  <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                    {typeof feature.icon === 'string' && feature.icon.startsWith('/') ? (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{feature.icon}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="text-sm font-semibold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors">
                  {feature.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Animated stats badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${feature.color === 'blue' ? '#3b82f6, #06b6d4' : feature.color === 'purple' ? '#8b5cf6, #ec4899' : feature.color === 'green' ? '#10b981, #14b8a6' : feature.color === 'yellow' ? '#f59e0b, #f97316' : feature.color === 'indigo' ? '#6366f1, #3b82f6' : feature.color === 'red' ? '#ef4444, #ec4899' : feature.color === 'teal' ? '#14b8a6, #10b981' : '#8b5cf6, #a855f7'})` }}
                  >
                    {feature.stats.number} {feature.stats.label}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${feature.color === 'blue' ? '#3b82f6, #06b6d4' : feature.color === 'purple' ? '#8b5cf6, #ec4899' : feature.color === 'green' ? '#10b981, #14b8a6' : feature.color === 'yellow' ? '#f59e0b, #f97316' : feature.color === 'indigo' ? '#6366f1, #3b82f6' : feature.color === 'red' ? '#ef4444, #ec4899' : feature.color === 'teal' ? '#14b8a6, #10b981' : '#8b5cf6, #a855f7'})` }}
                  ></div>
                </div>

                {/* Feature details with staggered animation */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                        style={{ background: `linear-gradient(to right, ${feature.color === 'blue' ? '#3b82f6, #06b6d4' : feature.color === 'purple' ? '#8b5cf6, #ec4899' : feature.color === 'green' ? '#10b981, #14b8a6' : feature.color === 'yellow' ? '#f59e0b, #f97316' : feature.color === 'indigo' ? '#6366f1, #3b82f6' : feature.color === 'red' ? '#ef4444, #ec4899' : feature.color === 'teal' ? '#14b8a6, #10b981' : '#8b5cf6, #a855f7'})` }}
                      ></div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div
                  className="absolute bottom-0 left-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${feature.color === 'blue' ? '#3b82f6, #06b6d4' : feature.color === 'purple' ? '#8b5cf6, #ec4899' : feature.color === 'green' ? '#10b981, #14b8a6' : feature.color === 'yellow' ? '#f59e0b, #f97316' : feature.color === 'indigo' ? '#6366f1, #3b82f6' : feature.color === 'red' ? '#ef4444, #ec4899' : feature.color === 'teal' ? '#14b8a6, #10b981' : '#8b5cf6, #a855f7'})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-orange-600">
            Trusted Partnership
          </div>
          <h2 className="mb-4 text-center text-4xl font-bold">Our Partner</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-pretty text-muted-foreground">
            Collaborating with industry leaders to deliver exceptional educational experiences
          </p>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Partner Info */}
                <div className="flex flex-col justify-center bg-white p-8 lg:p-12">
                  <div className="mb-6 flex h-24 w-full items-center justify-start rounded-2xl bg-white p-4 shadow-sm">
                    <img src="/schoolnetlogo.jpg" alt="SchoolNet India" className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-slate-900">SchoolNet India</h3>
                  <p className="mb-6 text-pretty text-lg leading-relaxed text-slate-700">
                    A pioneer in educational technology with over two decades of experience, SchoolNet India empowers
                    schools with innovative digital learning solutions, comprehensive assessment tools, and data-driven
                    insights to enhance student outcomes and operational excellence.
                  </p>
                  <Link
                    href="https://www.schoolnetindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-700"
                  >
                    Visit Partner Website
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Video */}
                <div className="aspect-video bg-slate-900 lg:aspect-auto">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/path-to-your-video-poster.jpg"
                  >
                    <source src="/FB_Video.mp4" type="video/mp4" />
                    <source src="/path-to-your-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple-blue relative overflow-hidden">
        {/* Floating background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-6 left-14 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join leading Canadian institutions already using Axion Excelsior to supercharge learning outcomes and streamline operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

    </div>

  );
};

export default K12SchoolsPage;