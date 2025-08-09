interface TeamMemberProps {
    member: {
      name: string;
      role: string;
      bio: string;
      image: string;
      linkedin: string;
    };
  }
  
  export default function TeamMember({ member }: TeamMemberProps) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
        <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
        <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    );
  }