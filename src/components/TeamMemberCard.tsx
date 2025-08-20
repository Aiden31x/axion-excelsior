// components/TeamMemberCard.tsx
import React from 'react';
import { Users } from 'lucide-react';
import { TeamMemberCardProps } from '@/types/TeamMember';


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
        <Users className="w-10 h-10 text-white" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 text-center mb-2">{member.name}</h4>
      <h5 className="text-purple-600 font-semibold text-center mb-4">{member.role}</h5>
      
      {/* Brief description */}
      <p className="text-gray-600 text-center leading-relaxed mb-4">{member.briefDesc}</p>
      
      {/* Detailed description */}
      <div className="text-sm text-gray-700 space-y-3">
        {member.detailedDesc.map((paragraph: string, index: number) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
        
        {/* Technical skills or specializations */}
        {member.skills && (
          <div className="mt-4">
            <h6 className="font-semibold text-gray-800 mb-2">Key Expertise:</h6>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
              {member.skills.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;