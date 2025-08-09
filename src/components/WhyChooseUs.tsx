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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for Canadian institutions with unmatched compliance and support
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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