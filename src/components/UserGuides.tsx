"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';


const TechnicalPublicationsPage = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  // UI properties for spotlight features
  const spotlightUIProps = [
    { icon: "/alternating/compliance.png", gradient: "from-blue-500 to-cyan-400", color: "blue" },
    { icon: "/alternating/onboarding.png", gradient: "from-green-500 to-emerald-400", color: "green" },
    { icon: "/alternating/problem-solving.png", gradient: "from-purple-500 to-pink-400", color: "purple" },
    { icon: "/alternating/safety (1).png", gradient: "from-red-500 to-orange-400", color: "red" }
  ];

  const spotlightFeatures = t.userGuide.spotlightFeatures.map((feature, index) => ({
    ...feature,
    ...spotlightUIProps[index]
  }));

  // UI properties for services
  const serviceUIProps = [
    { icon: "/userguide/aircraft.png", gradient: "from-blue-500 to-cyan-400", color: "blue" },
    { icon: "/userguide/catalogue.png", gradient: "from-indigo-500 to-blue-400", color: "indigo" },
    { icon: "/userguide/structure repair.png", gradient: "from-green-500 to-teal-400", color: "green" },
    { icon: "/userguide/component.png", gradient: "from-purple-500 to-pink-400", color: "purple" },
    { icon: "/userguide/troubleshooting.png", gradient: "from-yellow-500 to-orange-400", color: "yellow" },
    { icon: "/userguide/wire.png", gradient: "from-red-500 to-pink-400", color: "red" },
    { icon: "/userguide/service-board.png", gradient: "from-teal-500 to-green-400", color: "teal" },
    { icon: "/userguide/engine.png", gradient: "from-violet-500 to-purple-400", color: "violet" },
    { icon: "/userguide/tools.png", gradient: "from-orange-500 to-red-400", color: "orange" },
    { icon: "/userguide/e-catalogue.png", gradient: "from-cyan-500 to-blue-400", color: "cyan" },
    { icon: "/userguide/user-manual.png", gradient: "from-emerald-500 to-teal-400", color: "emerald" },
    { icon: "/userguide/safety.png", gradient: "from-rose-500 to-pink-400", color: "rose" }
  ];

  const services = t.userGuide.services.map((service, index) => ({
    ...service,
    ...serviceUIProps[index]
  }));

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

    services.forEach((_, index) => {
      const element = document.getElementById(`service-${index}`);
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
      violet: '#8b5cf6, #a855f7',
      orange: '#f97316, #ef4444',
      cyan: '#06b6d4, #3b82f6',
      emerald: '#10b981, #059669',
      rose: '#f43f5e, #ec4899'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20" style={{ background: '#f7f1fe' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 " style={{ background: '#eccaf3' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 " style={{ background: '#eccaf3' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {t.userGuide.title}
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {t.userGuide.documentation}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t.userGuide.subtitle}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.userGuide.description}
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
                    <div className="w-20 h-20 bg-white/30  rounded-lg flex items-center justify-center mx-auto border border-white/20">
                      <img
                        src={spotlightFeatures[activeFeature].icon}
                        alt={spotlightFeatures[activeFeature].title}
                        className="w-10 h-10 object-contain "
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

      {/* Core Services Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t.userGuide.completeSuite}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t.userGuide.suiteSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">{t.userGuide.automobile}</span>
            <span className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">{t.userGuide.aerospace}</span>
            <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full font-medium">{t.userGuide.medical}</span>
            <span className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">{t.userGuide.industrial}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={`service-${index}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform ${isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index % spotlightFeatures.length)}
            >
              <div className="relative bg-white p-8 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">

                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500 scale-110"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(service.color)})` }}
                  ></div>
                  <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(service.color)})` }}
                  >
                    {service.stats.number} {service.stats.label}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                    style={{ background: `linear-gradient(to right, ${getColorClasses(service.color)})` }}
                  ></div>
                </div>

                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                        style={{ background: `linear-gradient(to right, ${getColorClasses(service.color)})` }}
                      ></div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${getColorClasses(service.color)})` }}
                ></div>
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.userGuide.readyToElevate}
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.userGuide.readySubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t.schools.scheduleDemo}
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalPublicationsPage;