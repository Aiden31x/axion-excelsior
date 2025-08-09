const features = [
  {
    icon: '🇨🇦',
    title: 'Made for Canada',
    description: 'Built specifically for Canadian institutions with local compliance'
  },
  {
    icon: '🗣️',
    title: 'Bilingual Support',
    description: 'Full English and French language support across all platforms'
  },
  {
    icon: '✅',
    title: 'Provincial Compliance',
    description: 'Meets all provincial regulations including BC FIPPA and accessibility standards'
  },
  {
    icon: '☁️',
    title: 'Cloud-Based',
    description: 'Secure, scalable cloud infrastructure with reliable uptime'
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'WCAG 2.1 AA compliant for inclusive learning experiences'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Enterprise-grade security with data privacy protection'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Purpose-built for Canadian institutions with unmatched compliance and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover-lift group">
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}