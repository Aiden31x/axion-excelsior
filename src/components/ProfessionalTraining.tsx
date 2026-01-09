"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ProfessionalTrainingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const spotlightFeatures = [
    {
      icon: "/driving/training (1).png",
      gradient: "from-blue-500 to-cyan-400",
      title: "Competence & Confidence",
      subtitle: "Practical Learning",
      description: "Scenario-based modules designed for real-world application, building both competence and confidence.",
      details: ["Real-world scenarios", "Interactive practice", "Skill validation"],
      stats: { number: "95%", label: "Skill Retention" },
      color: "blue"
    },
    {
      icon: "/driving/versatile.png",
      gradient: "from-green-500 to-emerald-400",
      title: "Accessible Learning",
      subtitle: "Learn Anywhere",
      description: "Cost-effective training that's accessible anytime, anywhere, on any device.",
      details: ["Multi-device support", "24/7 availability", "Cloud-based access"],
      stats: { number: "100%", label: "Device Compatible" },
      color: "green"
    },
    {
      icon: "/driving/hand.png",
      gradient: "from-purple-500 to-pink-400",
      title: "Tailored Learning",
      subtitle: "Customizable Programs",
      description: "Flexible learning paths customized to meet organizational and individual training needs.",
      details: ["Custom curricula", "Personalized pace", "Adaptive content"],
      stats: { number: "80%", label: "Higher Engagement" },
      color: "purple"
    },
    {
      icon: "/driving/evaluation.png",
      gradient: "from-orange-500 to-red-400",
      title: "Integrated Assessments",
      subtitle: "Validate Learning",
      description: "Built-in quizzes and comprehensive final assessments to validate learning outcomes and proficiency.",
      details: ["Regular quizzes", "Final assessments", "Performance tracking"],
      stats: { number: "90%", label: "Pass Rate" },
      color: "orange"
    }
  ];

  const features = [
    {
      icon: "/driving/training (1).png",
      title: "Interactive eLessons",
      subtitle: "Engaging Content",
      description: "High-quality, interactive eLessons that combine multimedia elements with practical exercises for maximum engagement and knowledge retention.",
      details: ["Video content", "Interactive simulations", "Hands-on exercises"],
      stats: { number: "500+", label: "Modules" },
      color: "blue"
    },
    {
      icon: "/driving/intelligent.png",
      title: "Scenario-Based Learning",
      subtitle: "Real-World Application",
      description: "Practical, scenario-based training modules that mirror real-world situations, ensuring learners can apply knowledge immediately.",
      details: ["Industry scenarios", "Problem-solving tasks", "Decision-making practice"],
      stats: { number: "200+", label: "Scenarios" },
      color: "indigo"
    },
    {
      icon: "/driving/report.png",
      title: "Progress Analytics",
      subtitle: "Track Performance",
      description: "Comprehensive analytics dashboard to monitor learner progress, identify knowledge gaps, and measure training effectiveness.",
      details: ["Real-time tracking", "Performance metrics", "Learning insights"],
      stats: { number: "30+", label: "Metrics" },
      color: "green"
    },
    {
      icon: "/driving/evaluation.png",
      title: "Assessment System",
      subtitle: "Validate Proficiency",
      description: "Built-in quizzes throughout modules and comprehensive final assessments to ensure knowledge acquisition and skill proficiency.",
      details: ["Module quizzes", "Final examinations", "Certification tests"],
      stats: { number: "100%", label: "Validated" },
      color: "purple"
    },
    {
      icon: "/driving/hand.png",
      title: "Adaptive Learning Paths",
      subtitle: "Personalized Experience",
      description: "Customizable learning paths that adapt to individual progress and organizational requirements for optimal training outcomes.",
      details: ["Custom tracks", "Skill-based progression", "Flexible scheduling"],
      stats: { number: "Adaptive", label: "Learning" },
      color: "yellow"
    },
    {
      icon: "/driving/playback.png",
      title: "Multi-Device Access",
      subtitle: "Learn Anywhere",
      description: "Seamless access across all devices - desktop, tablet, and mobile - ensuring learning continues wherever you are.",
      details: ["Cross-platform", "Offline mode", "Sync progress"],
      stats: { number: "All", label: "Devices" },
      color: "red"
    },
    {
      icon: "/driving/modular.png",
      title: "Modular Structure",
      subtitle: "Flexible Design",
      description: "Modular course design allowing organizations to mix and match training content to create perfect training programs.",
      details: ["Modular courses", "Custom bundles", "Scalable content"],
      stats: { number: "100+", label: "Modules" },
      color: "teal"
    },
    {
      icon: "/driving/money.png",
      title: "Cost-Effective Training",
      subtitle: "Maximize ROI",
      description: "Reduce training costs while improving outcomes with scalable digital learning solutions that grow with your organization.",
      details: ["Lower costs", "Scalable delivery", "High ROI"],
      stats: { number: "60%", label: "Cost Savings" },
      color: "orange"
    }
  ];

  const benefits = [
    {
      icon: "/driving/academy.png",
      title: "Measurable Outcomes",
      description: "Track and measure learning outcomes with detailed analytics and comprehensive assessment reports.",
      stats: "95% Success Rate",
      color: "green"
    },
    {
      icon: "/driving/versatile.png",
      title: "Flexible Learning",
      description: "Learn at your own pace, on your own schedule, from anywhere in the world.",
      stats: "24/7 Access",
      color: "blue"
    },
    {
      icon: "/driving/money.png",
      title: "Cost Efficient",
      description: "Reduce training expenses while delivering superior learning experiences.",
      stats: "60% Lower Cost",
      color: "purple"
    }
  ];

  const idealFor = [
    {
      icon: "/driving/training (1).png",
      title: "Professional Training Schools",
      description: "Comprehensive eLearning solutions designed specifically for professional training institutions.",
      features: ["Industry-aligned curriculum", "Certification programs", "Instructor dashboards"],
      color: "blue"
    },
    {
      icon: "/driving/academy.png",
      title: "Educational Institutes",
      description: "Advanced learning modules that enhance traditional education with digital innovation.",
      features: ["Blended learning support", "Assessment tools", "Student management"],
      color: "green"
    },
    {
      icon: "/driving/intelligent.png",
      title: "Corporate Learning Programs",
      description: "Enterprise-ready training solutions for employee development and organizational growth.",
      features: ["Employee onboarding", "Skill development", "Compliance training"],
      color: "purple"
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

    features.forEach((_, index) => {
      const element = document.getElementById(`feature-${index}`);
      if (element) observer.observe(element);
    });

    benefits.forEach((_, index) => {
      const element = document.getElementById(`benefit-${index}`);
      if (element) observer.observe(element);
    });

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
              Elevate Professional Training
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                with Advanced Learning Modules
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Deliver exceptional learning experiences with our interactive, high-quality eLessons designed for professional training schools, educational institutes, and corporate learning programs
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform combines <span className="font-semibold text-violet-400">innovation</span>, <span className="font-semibold text-violet-500">flexibility</span>, and <span className="font-semibold text-violet-600">measurable outcomes</span> to help organizations achieve training excellence.
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

      {/* Why Choose Our eLearning Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our eLearning Solution?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive features designed to deliver exceptional learning experiences and measurable training outcomes
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Interactive Learning</span>
            <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full font-medium">Flexible Access</span>
            <span className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Proven Results</span>
            <span className="px-6 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">Assessment Tools</span>
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

      {/* Core Strength Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Strength – Integrated Assessments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every module includes built-in quizzes and evaluations, culminating in a comprehensive final assessment to validate learning outcomes
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 max-w-5xl mx-auto shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Module Quizzes</h3>
                    <p className="text-gray-600">Regular assessments throughout each module to reinforce learning and identify knowledge gaps.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress Evaluations</h3>
                    <p className="text-gray-600">Continuous evaluation to track learner progress and ensure steady advancement.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Final Assessment</h3>
                    <p className="text-gray-600">Comprehensive final examination that validates complete understanding and proficiency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Proficiency Verification</h3>
                    <p className="text-gray-600">Participants demonstrate not only knowledge acquisition but also practical proficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the advantages of our advanced eLearning platform
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
      </section>

      {/* Ideal For Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect solution for various educational and professional training organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {idealFor.map((item, index) => (
              <div
                key={index}
                id={`ideal-${index}`}
                className={`group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible[`ideal-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(item.color)})` }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
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
            Ready to Transform Your Training Programs?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of professional training with our advanced eLearning modules. Contact us to learn how we can elevate your training excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTrainingPage;
