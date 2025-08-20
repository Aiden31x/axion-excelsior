export interface TeamMember {
    name: string;
    role: string;
    briefDesc: string;
    detailedDesc: string[];
    skills?: string[];
    gradient: string;
  }
  
  export interface TeamMemberCardProps {
    member: TeamMember;
  }
  
  export interface CoreValue {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
    color: string;
  }