"use client"
import React, { useState, useEffect } from 'react';

const K12SchoolsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const features = [
    {
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-400",
      title: "Campus Information Hub",
      subtitle: "Centralized Intelligence",
      description: "Transform your school's data management with our comprehensive student information system. Monitor real-time attendance, track academic progress, and maintain compliance effortlessly.",
      details: ["Real-Time Student Data Management", "Comprehensive Campus Management", "Secure and compliant record-keeping"],
      stats: { number: "99.9%", label: "Data Accuracy" },
      color: "blue"
    },
    {
      icon: "📝",
      gradient: "from-purple-500 to-pink-400",
      title: "Intelligent Form Management",
      subtitle: "Streamlined Digital Experience",
      description: "Revolutionize enrollment and registration processes with AI-powered digital forms that adapt to your needs and provide predictive analytics.",
      details: ["Digital Form Solutions", "Enrollment Made Easy", "AI-powered form management"],
      stats: { number: "75%", label: "Time Saved" },
      color: "purple"
    },
    {
      icon: "📚",
      gradient: "from-green-500 to-teal-400",
      title: "Tailored Education Solutions",
      subtitle: "Personalized Learning Ecosystem",
      description: "Deliver customized educational experiences with our advanced LMS platform designed for collaborative learning and curriculum alignment.",
      details: ["Curriculum-Centric Solutions", "Data-Driven Education", "Customizable Education Technology"],
      stats: { number: "40%", label: "Better Outcomes" },
      color: "green"
    },
    {
      icon: "💡",
      gradient: "from-yellow-500 to-orange-400",
      title: "Student Wellness & Achievement",
      subtitle: "Holistic Student Support",
      description: "Foster student success through comprehensive wellness tracking, behavioral insights, and targeted intervention strategies.",
      details: ["Wellness & Achievement Platform", "Holistic Student Support", "Student Thrival Platform"],
      stats: { number: "85%", label: "Student Engagement" },
      color: "yellow"
    },
    {
      icon: "🚀",
      gradient: "from-indigo-500 to-blue-400",
      title: "Future-Proof Your Career Planning",
      subtitle: "Pathway to Success",
      description: "Prepare students for tomorrow's workforce with interactive career exploration tools and personalized academic planning features.",
      details: ["Pathway to Success", "Prepare for Liftoff", "Future-Ready Students"],
      stats: { number: "90%", label: "Career Readiness" },
      color: "indigo"
    },
    {
      icon: "📊",
      gradient: "from-red-500 to-pink-400",
      title: "Advanced Analytics & Insights",
      subtitle: "Data-Driven Decision Making",
      description: "Unlock powerful insights with sophisticated data visualization and predictive analytics to identify opportunities and risks.",
      details: ["Student Success Analytics", "School Improvement Solutions", "Actionable Intelligence"],
      stats: { number: "60%", label: "Better Decisions" },
      color: "red"
    },
    {
      icon: "🤝",
      gradient: "from-teal-500 to-green-400",
      title: "Interactive Engagement Hub",
      subtitle: "Connected Community",
      description: "Build stronger school communities with integrated communication platforms that keep everyone informed and engaged.",
      details: ["Streamlined Communication", "Secure Collaboration", "Real-Time Engagement"],
      stats: { number: "95%", label: "Parent Satisfaction" },
      color: "teal"
    },
    {
      icon: "🤖",
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">


      

     
      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Revolutionary Educational Solutions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of education with our comprehensive suite of intelligent tools designed to transform learning outcomes
          </p>
        </div>


      

        {/* Featured Spotlight */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl blur-xl opacity-30`}></div>
                  <div className={`relative bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl p-8 text-center text-white`}>
                    <div className="text-6xl mb-4">{features[activeFeature].icon}</div>
                    <div className="text-4xl font-bold mb-2">{features[activeFeature].stats.number}</div>
                    <div className="text-lg opacity-90">{features[activeFeature].stats.label}</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 text-white">
                <div className="text-sm font-semibold text-purple-200 mb-2">{features[activeFeature].subtitle}</div>
                <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">{features[activeFeature].description}</p>
                <div className="space-y-3">
                  {features[activeFeature].details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full mr-4`}></div>
                      <span className="text-white/90">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              id={`feature-${index}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform ${
                isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Background gradient that changes on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Card content */}
              <div className="relative bg-white/95 backdrop-blur-xl p-8 h-full border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                
                {/* Animated icon background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-sm font-semibold text-gray-500 mb-2 group-hover:text-gray-600 transition-colors">
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
                  <div className={`bg-gradient-to-r ${feature.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300`}>
                    {feature.stats.number} {feature.stats.label}
                  </div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                </div>

                {/* Feature details with staggered animation */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex} 
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

      
      </section>
    </div>
  );
};

export default K12SchoolsPage;