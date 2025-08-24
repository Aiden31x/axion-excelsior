import React from 'react';
import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  briefDesc: string;
  detailedDesc: string[];
  skills?: string[];
  gradient: string;
  image?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const FlipTeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group w-full h-96 relative overflow-hidden">
      <div className="w-full h-full rounded-3xl shadow-xl relative">
        {/* Front of Card - Purple Mountain Light Theme */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-500 group-hover:opacity-0">
          <div className="w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border border-purple-200/50 shadow-xl">
            {/* Background decorative elements with purple mountain theme */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-300/30 to-violet-300/30 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-violet-300/30 to-indigo-300/30 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Profile Image/Icon */}
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                  />
                ) : null}
                <Users
                  className={`w-16 h-16 text-white ${member.image ? 'hidden' : 'block'}`}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Name and Role */}
            <div className="text-center relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-purple-900">
                {member.name}
              </h3>
              <p className="text-lg bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold leading-tight">
                {member.role}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
              </div>
              <p className="text-xs text-purple-700/80 mt-2 text-center">
                Hover to learn more
              </p>
            </div>
          </div>
        </div>

        {/* Back of Card - Purple Mountain Dark Theme */}
        <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700">
            {/* Background decorative elements with mountain-inspired layers */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-400/40 to-violet-400/40 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-violet-400/40 to-indigo-400/40 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-sm">
              {/* Header */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4 overflow-hidden border border-white/30">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="w-8 h-8 text-white" />
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
                  {member.name}
                </h4>
                <p className="text-lg text-purple-100 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="space-y-3 mb-6">
                {member.detailedDesc.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-white/90 leading-relaxed text-sm text-center"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Key Expertise
                  </h5>
                  <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
                    {member.skills.slice(0, 3).map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-center space-x-3 bg-white/15 backdrop-blur-sm rounded-lg py-2 px-4 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-purple-200 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white font-medium text-center">
                          {skill}
                        </span>
                      </div>
                    ))}
                    {member.skills.length > 3 && (
                      <p className="text-sm text-purple-200 italic mt-2 text-center">
                        +{member.skills.length - 3} more specializations
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipTeamMemberCard;