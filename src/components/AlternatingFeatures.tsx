'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const features = [
    {
        id: 'bilingual',
        title: 'Bilingual Support',
        description: 'Seamlessly deliver training in both English and French while ensuring full compliance with Canadian standards and regulations.',
        image: '/bilingual-final.png', // Replace with your image path
        imagePosition: 'left',
        accentColor: 'purple'
    },
    {
        id: 'custom-training',
        title: 'Custom-Tailored Training Solutions',
        description: 'From schools to aviation and manufacturing, our solutions adapt to your industry\'s unique needs with precision and flexibility.',
        image: '/custom-solutions.jpeg', // Replace with your image path
        imagePosition: 'right',
        accentColor: 'pink'
    },
    {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        description: 'We ensure all our digital training solutions meet provincial education and industry regulations across Canada. From bilingual standards to sector-specific compliance requirements, our platforms are designed to keep your institution aligned with the latest guidelines.',
        image: '/compliance.jpeg', // Replace with your image path
        imagePosition: 'left',
        accentColor: 'blue'
    }
] as const;

type FeatureImagePosition = 'left' | 'right';
type AccentColor = 'green' | 'blue' | 'purple' | 'pink' | 'orange';

export default function AlternatingFeatures() {
    const [visibleFeatures, setVisibleFeatures] = useState<Set<string>>(new Set());
    const featureRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetId = entry.target.getAttribute('data-feature-id');
                        if (targetId) {
                            setVisibleFeatures(prev => new Set([...prev, targetId]));
                        }
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all feature elements
        Object.values(featureRefs.current).forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => observer.disconnect();
    }, []);

    const setFeatureRef = (featureId: string) => (el: HTMLDivElement | null) => {
        featureRefs.current[featureId] = el;
    };

    const getAccentColorClass = (color: AccentColor): string => {
        switch (color) {
            case 'green': return 'bg-green-400';
            case 'blue': return 'bg-blue-400';
            case 'purple': return 'bg-purple-400';
            case 'pink': return 'bg-pink-400';
            case 'orange': return 'bg-orange-400';
            default: return 'bg-purple-400';
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Why Choose Us
                        </span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover what makes ExcelsiorTech the go-to choice for advanced digital training in Canada.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={setFeatureRef(feature.id)}
                            data-feature-id={feature.id}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${feature.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
                                }`}
                        >
                            {/* Image Section */}
                            <div className={`relative ${feature.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                                <div className="relative">
                                    <div className="relative w-full h-96 lg:h-[500px]">
                                        {/* Background decorative elements */}
                                        <div className="absolute inset-0 bg-gray-200 rounded-[3rem] transform rotate-1 scale-105 opacity-20"></div>
                                        <div className="absolute inset-0 bg-gray-300 rounded-[2.5rem] transform -rotate-1 scale-95 opacity-30"></div>

                                        {/* Main image container */}
                                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-cover"
                                                priority={index < 2}
                                                onError={() => console.log(`Image failed to load: ${feature.image}`)}
                                            />
                                        </div>

                                        {/* Floating accent circle */}
                                        <div
                                            className={`absolute top-4 right-4 w-24 h-24 ${getAccentColorClass(feature.accentColor)} rounded-full opacity-80 animate-pulse`}
                                        ></div>

                                        {/* Top decorative elements */}
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                                            <div className="flex space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 h-3 ${getAccentColorClass(feature.accentColor)} rounded-full opacity-60`}
                                                        style={{
                                                            transform: `rotate(${i * 15 - 30}deg)`,
                                                            animationDelay: `${i * 0.1}s`
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className={`${feature.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                                <div
                                    className={`transition-all duration-1000 ease-out ${visibleFeatures.has(feature.id)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                        }`}
                                >
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}