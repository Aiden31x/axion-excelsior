import React from 'react';

interface StoryCardProps {
  title: string;
  content: string;
  highlightText?: string;
  borderColor: string;
  hoverBorderColor: string;
  titleColor: string;
  highlightColor: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  content,
  highlightText,
  borderColor,
  hoverBorderColor,
  titleColor,
  highlightColor
}) => {
  const formatContent = (text: string, highlight?: string) => {
    if (!highlight) return text;
    
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <strong className={highlightColor}>{highlight}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border ${borderColor} p-8 text-center hover:shadow-xl transition-all duration-300 ${hoverBorderColor} h-full flex flex-col`}>
      <h3 className={`text-2xl font-bold ${titleColor} mb-6 flex-shrink-0`}>{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base text-center flex-grow">
        {formatContent(content, highlightText)}
      </p>
    </div>
  );
};

const StorySection: React.FC = () => {
  const storyData = [
    {
      title: "History Of The Company",
      content: "Excelsior Tech Inc is a young, ambitious EdTech startup with a forward-thinking technology mindset. Founded with the belief that technology should simplify lives, we bridge the gap between ideas and execution with smart, scalable, and user-friendly products.",
      highlightText: "Excelsior Tech Inc",
      borderColor: "border-purple-100/50",
      hoverBorderColor: "hover:border-purple-200/70",
      titleColor: "text-purple-800",
      highlightColor: "text-purple-600"
    },
    {
      title: "Mission",
      content: "To redefine how education is delivered, managed, and experienced in the modern world. We catalyze institutional excellence through cutting-edge learning solutions and bespoke services, empowering organizations to thrive in a rapidly evolving landscape.",
      highlightText: "To redefine how education is delivered, managed, and experienced",
      borderColor: "border-violet-100/50",
      hoverBorderColor: "hover:border-violet-200/70",
      titleColor: "text-violet-800",
      highlightColor: "text-violet-600"
    },
    {
      title: "Company Values",
      content: "To become a global leader in delivering technology solutions that redefine efficiency, innovation and growth. We have built an all-in-one, cloud-based Learning management platform that blends academic excellence with operational efficiency, extending beyond schools to all industries.",
      highlightText: "all-in-one, cloud-based Learning management platform",
      borderColor: "border-indigo-100/50",
      hoverBorderColor: "hover:border-indigo-200/70",
      titleColor: "text-indigo-800",
      highlightColor: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50/50 via-white to-violet-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Our Story
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {storyData.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
              highlightText={story.highlightText}
              borderColor={story.borderColor}
              hoverBorderColor={story.hoverBorderColor}
              titleColor={story.titleColor}
              highlightColor={story.highlightColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;