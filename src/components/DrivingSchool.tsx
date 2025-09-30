"use client"
import React, { useState, useEffect } from 'react';
import {
  Car,
  Gauge,
  CloudRain,
  BarChart3,
  Users,
  GraduationCap,
  Building,
  CheckCircle,
  Target,
  TrendingUp,
  MapPin,
  Settings
} from 'lucide-react';
import Link from 'next/link';

const DrivingSimulatorPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const spotlightFeatures = [
    {
      icon: "/driving/simulation.png",
      gradient: "from-blue-500 to-cyan-400",
      title: "Realistic Environment",
      subtitle: "Immersive Training Experience",
      description: "Real dashboard assembly, controls, instrumentation, and transmission provide an authentic driving experience.",
      details: ["Real Dashboard Assembly", "Authentic Controls", "Complete Instrumentation"],
      stats: { number: "100%", label: "Realistic Experience" },
      color: "blue"
    },
    {
      icon: "/driving/weather.png",
      gradient: "from-green-500 to-emerald-400",
      title: "Weather Conditions",
      subtitle: "All-Weather Training",
      description: "Train in various weather conditions including rain, fog, snowfall, and different light intensities.",
      details: ["Rain Simulation", "Fog Conditions", "Variable Lighting"],
      stats: { number: "12+", label: "Weather Scenarios" },
      color: "green"
    },
    {
      icon: "/driving/evaluation.png",
      gradient: "from-purple-500 to-pink-400",
      title: "Progress Tracking",
      subtitle: "Data-Driven Learning",
      description: "Comprehensive progress reports and record/playback facility to track improvement and detect errors.",
      details: ["Progress Reports", "Error Detection", "Performance Analytics"],
      stats: { number: "85%", label: "Skill Improvement" },
      color: "purple"
    },
    {
      icon: "/driving/modular.png",
      gradient: "from-orange-500 to-red-400",
      title: "Modular Setup",
      subtitle: "Adaptive Training System",
      description: "Increase difficulty levels progressively with multiple stations and customizable training exercises.",
      details: ["Progressive Difficulty", "Multiple Stations", "Custom Exercises"],
      stats: { number: "50%", label: "Faster Learning" },
      color: "orange"
    }
  ];

  const features = [
    {
      icon: "/driving/simulation.png",
      title: "Realistic Operating Environment",
      subtitle: "Immersive Experience",
      description: "Real dashboard assembly, controls, instrumentation, and transmission provide the most authentic driving simulation experience possible.",
      details: ["Real dashboard components", "Authentic control systems", "Complete instrumentation"],
      stats: { number: "100%", label: "Realism" },
      color: "blue"
    },
    {
      icon: "/driving/intelligent.png",
      title: "Intelligent Traffic Models",
      subtitle: "Realistic Traffic Simulation",
      description: "Advanced AI-driven traffic models create realistic driving scenarios that mirror real-world traffic patterns and behaviors.",
      details: ["AI traffic behavior", "Dynamic scenarios", "Realistic interactions"],
      stats: { number: "95%", label: "Traffic Accuracy" },
      color: "indigo"
    },
    {
      icon: "/driving/weather.png",
      title: "Variety of Terrains and Conditions",
      subtitle: "All-Weather Training",
      description: "Comprehensive weather and terrain simulation including rain, fog, snow, and various lighting conditions for complete training.",
      details: ["Multiple weather conditions", "Various terrain types", "Dynamic lighting systems"],
      stats: { number: "15+", label: "Weather Scenarios" },
      color: "green"
    },
    {
      icon: "/driving/modular.png",
      title: "Modular Training Setup",
      subtitle: "Adaptive Learning System",
      description: "Progressive difficulty levels with multiple training stations and customizable exercises to match individual learning pace.",
      details: ["Progressive difficulty", "Multiple stations", "Custom training modules"],
      stats: { number: "8", label: "Training Levels" },
      color: "purple"
    },
    {
      icon: "/driving/hand.png",
      title: "Customizable Training Pace",
      subtitle: "Personalized Learning",
      description: "Flexible training programs that adapt to individual learning speeds and requirements for optimal skill development.",
      details: ["Individual pacing", "Adaptive curriculum", "Custom objectives"],
      stats: { number: "60%", label: "Faster Learning" },
      color: "yellow"
    },
    {
      icon: "/driving/playback.png",
      title: "Record/Playback Facility",
      subtitle: "Performance Analysis",
      description: "Advanced recording and playback system to review driving sessions, detect errors, and track detailed progress over time.",
      details: ["Session recording", "Error detection", "Progress tracking"],
      stats: { number: "100%", label: "Session Coverage" },
      color: "red"
    },
    {
      icon: "/driving/report.png",
      title: "Progress Reports",
      subtitle: "Detailed Analytics",
      description: "Comprehensive progress reports with detailed analytics to monitor improvement and identify areas for focused training.",
      details: ["Detailed analytics", "Performance metrics", "Improvement tracking"],
      stats: { number: "20+", label: "Metrics Tracked" },
      color: "teal"
    },
    {
      icon: "/driving/evaluation.png",
      title: "Performance Monitoring",
      subtitle: "Real-Time Feedback",
      description: "Real-time performance monitoring with instant feedback to help trainees understand and correct driving behaviors immediately.",
      details: ["Real-time feedback", "Instant corrections", "Performance alerts"],
      stats: { number: "Live", label: "Feedback System" },
      color: "orange"
    }
  ];

  const benefits = [
    {
      icon: "/driving/training (1).png",
      title: "Effective Training",
      description: "Reduce trainees' hours of actual on-road training while improving skills and confidence.",
      stats: "70% Less Road Time",
      color: "green"
    },
    {
      icon: "/driving/versatile.png",
      title: "Portable and Versatile",
      description: "Our simulator is designed for easy setup and use in various locations.",
      stats: "Any Location",
      color: "blue"
    },
    {
      icon: "/driving/money.png",
      title: "Cost-Effective",
      description: "Minimize costs associated with traditional training methods.",
      stats: "60% Cost Savings",
      color: "purple"
    }
  ];

  const idealFor = [
    {
      icon: "/driving/training (1).png",
      title: "Driving Schools",
      description: "Enhance training programs with our comprehensive simulator technology.",
      features: ["Complete curriculum support", "Multiple vehicle types", "Progress tracking"],
      color: "blue"
    },
    {
      icon: "/driving/academy.png",
      title: "Training Institutes",
      description: "Provide comprehensive training for aspirant drivers of all vehicle categories.",
      features: ["Light vehicle training", "Medium vehicle training", "Heavy vehicle training"],
      color: "green"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % spotlightFeatures.length);
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

    // Observe feature cards
    features.forEach((_, index) => {
      const element = document.getElementById(`feature-${index}`);
      if (element) observer.observe(element);
    });

    // Observe benefit cards
    benefits.forEach((_, index) => {
      const element = document.getElementById(`benefit-${index}`);
      if (element) observer.observe(element);
    });

    // Observe ideal for cards
    idealFor.forEach((_, index) => {
      const element = document.getElementById(`ideal-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: '#3b82f6, #06b6d4',
      indigo: '#6366f1, #3b82f6',
      green: '#10b981, #14b8a6',
      purple: '#8b5cf6, #ec4899',
      yellow: '#f59e0b, #f97316',
      red: '#ef4444, #ec4899',
      teal: '#14b8a6, #10b981',
      orange: '#f97316, #ef4444'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 ia-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20" style={{ background: '#f7f1fe' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20" style={{ background: '#eccaf3' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10" style={{ background: '#eccaf3' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Excelsior Driving
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Simulator
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionizing driver training with our versatile indoor driving simulator designed for comprehensive training of Light, Medium, and Heavy vehicle drivers
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our versatile indoor driving simulator provides comprehensive training for aspirant drivers of <span className="font-semibold text-violet-300">Light</span>, <span className="font-semibold text-violet-400">Medium</span>, and <span className="font-semibold text-violet-500">Heavy vehicles</span>. With options for Left or Right Hand drive, our simulator is ideal for driving schools and institutes.
              </p>
            </div>
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
                  style={{ background: `linear-gradient(to right, ${getColorClasses(spotlightFeatures[activeFeature].color)})` }}
                ></div>
                <div
                  className="relative rounded-2xl p-8 text-center text-white"
                  style={{ background: `linear-gradient(to right, ${getColorClasses(spotlightFeatures[activeFeature].color)})` }}
                >
                  <div className="text-6xl mb-4">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto border border-white/20">
                      <img
                        src={spotlightFeatures[activeFeature].icon}
                        alt={spotlightFeatures[activeFeature].title}
                        className="w-15 h-15 object-contain "
                      />
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2">{spotlightFeatures[activeFeature].stats.number}</div>
                  <div className="text-lg opacity-90">{spotlightFeatures[activeFeature].stats.label}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-sm font-semibold text-blue-600 mb-2">{spotlightFeatures[activeFeature].subtitle}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{spotlightFeatures[activeFeature].title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{spotlightFeatures[activeFeature].description}</p>
              <div className="space-y-3">
                {spotlightFeatures[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-4"
                      style={{ background: `linear-gradient(to right, ${getColorClasses(spotlightFeatures[activeFeature].color)})` }}
                    ></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Updated to match services design */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Complete Training Feature Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Advanced features designed to provide the most realistic and effective driver training experience
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Light Vehicles</span>
            <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full font-medium">Medium Vehicles</span>
            <span className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Heavy Vehicles</span>
            <span className="px-6 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">Simulation Technology</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-${index}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform ${isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index % spotlightFeatures.length)}
            >
              <div className="relative bg-white p-8 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">

                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500 scale-110"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(feature.color)})` }}
                  ></div>
                  <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                    <div
                      className="text-white drop-shadow-lg"
                      style={{ filter: `drop-shadow(0 0 10px ${getColorClasses(feature.color).split(',')[0]})` }}
                    >
                    </div>
                    <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {feature.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(feature.color)})` }}
                  >
                    {feature.stats.number} {feature.stats.label}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(feature.color)})` }}
                  ></div>
                </div>

                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                        style={{ background: `linear-gradient(to right, ${getColorClasses(feature.color)})` }}
                      ></div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${getColorClasses(feature.color)})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of modern simulation technology in driver training
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                id={`benefit-${index}`}
                className={`bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible[`benefit-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white shadow-lg"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(benefit.color)})` }}
                  >

                    <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                      <img
                        src={benefit.icon}
                        alt={benefit.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div
                  className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: `linear-gradient(to right, ${getColorClasses(benefit.color)})` }}
                >
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ideal For</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfect solution for various educational and training institutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {idealFor.map((item, index) => (
            <div
              key={index}
              id={`ideal-${index}`}
              className={`group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible[`ideal-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mr-6 text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(to right, ${getColorClasses(item.color)})` }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-4"
                      style={{ background: `linear-gradient(to right, ${getColorClasses(item.color)})` }}
                    ></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple-blue relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-6 left-14 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Driver Training?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of driver education with our advanced simulator technology. Contact us to learn more about how we can enhance your training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Schedule Demo
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrivingSimulatorPage;