import Link from 'next/link';

const solutions = [
  {
    title: 'Student Learning Management System',
    description: 'Comprehensive LMS for K-12 schools with provincial compliance and bilingual support',
    icon: '🎓',
    link: '/services#lms'
  },
  {
    title: 'Driving School Management System',
    description: 'Complete solution for driving academies with booking, tracking, and compliance',
    icon: '🚗',
    link: '/services#driving'
  },
  {
    title: 'Aircraft Training Institute Solutions',
    description: 'Aviation training platforms with simulator integration and Transport Canada standards',
    icon: '✈️',
    link: '/services#aviation'
  },
  {
    title: 'Manufacturing Training & Digital Manuals',
    description: 'Interactive training guides and safety certification for manufacturing sectors',
    icon: '🏭',
    link: '/services#manufacturing'
  }
];

export default function SolutionsOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Training Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored digital platforms for diverse training needs across Canada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {solution.description}
              </p>
              <Link href={solution.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}