import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  highlights: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={!isEven ? 'lg:col-start-2' : ''}>
        <div className="text-4xl mb-4">{service.icon}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Highlights:</h3>
          <div className="space-y-2">
            {service.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
          Request a Demo
        </Link>
      </div>

      {/* Visual */}
      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
            <div className="text-8xl opacity-20">{service.icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
