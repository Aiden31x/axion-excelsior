import React from 'react';
import { Users, Mail, Linkedin, ExternalLink } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    briefDesc: string;
    detailedDesc: string[];
    skills?: string[];
    gradient: string;
    image?: string; // Add optional image URL
  }
  
  interface TeamMemberCardProps {
    member: TeamMember;
  }

// Updated FlipTeamMemberCard Component
const FlipTeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group w-full h-96 relative overflow-hidden">
      <div className="w-full h-full rounded-3xl shadow-xl relative">
        {/* Front of Card - Always visible, fades out on hover */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-500 group-hover:opacity-0">
          <div className="w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #c4b5fd 0%, #ddd6fe 30%, #e9d5ff 60%, #f3e8ff 100%)'}}>
            {/* Decorative background elements with theme colors */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/12 rounded-full blur-2xl"></div>
            <div className="absolute top-8 left-8 w-24 h-24 bg-purple-100/15 rounded-full blur-lg"></div>
            
            {/* Profile Image/Icon */}
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/40 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to Users icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                ) : null}
                <Users className={`w-16 h-16 text-white ${member.image ? 'hidden' : 'block'}`} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Name and Role */}
            <div className="text-center relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{member.name}</h3>
              <p className="text-lg text-white/90 font-medium leading-tight">{member.role}</p>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-pink-200/70 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-200/70 rounded-full animate-bounce delay-200"></div>
              </div>
              <p className="text-xs text-white/80 mt-2 text-center">Hover to learn more</p>
            </div>
          </div>
        </div>

        {/* Back of Card - Hidden by default, fades in on hover */}
        <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden border border-gray-100 shadow-xl" style={{backgroundColor: '#f5ecfe'}}>
            {/* Decorative background elements with theme colors */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-200/20 to-purple-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-100/10 rounded-full blur-2xl"></div>
            
            {/* Centered Content */}
            <div className="relative z-10 text-center max-w-sm">
              {/* Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4 overflow-hidden">
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
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-lg text-purple-700 font-semibold">{member.role}</p>
              </div>
              
              {/* Detailed Description */}
              <div className="space-y-4 mb-8">
                {member.detailedDesc.map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base text-center">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Skills or Key Points */}
              {member.skills && member.skills.length > 0 && (
                <div>
                  <h5 className="text-lg font-bold text-gray-800 mb-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                    Key Expertise
                  </h5>
                  <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
                    {member.skills.slice(0, 4).map((skill: string, index: number) => (
                      <div key={index} className="flex items-center justify-center space-x-3 bg-white/50 rounded-lg py-2 px-4 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-medium text-center">{skill}</span>
                      </div>
                    ))}
                    {member.skills.length > 4 && (
                      <p className="text-sm text-gray-600 italic mt-4 text-center">
                        +{member.skills.length - 4} more specializations
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