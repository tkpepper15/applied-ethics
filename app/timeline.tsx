import React, { useState } from 'react';

export interface TimelineItemProps {
  id: number;
  title: string;
  content: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Parse content into structured parts
  const contentParts = content.split('\n').filter(part => part.trim() !== '');

  return (
    <div
      className={`timeline-item ${isHovered ? 'bg-gray-200' : 'bg-gray-100'} p-4 rounded-lg shadow-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="timeline-content">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {contentParts.map((part, index) => {
          const [heading = '', text = ''] = part.split(':', 2);
          if (heading.trim()) {
            return (
              <div key={index} className="mb-1">
                <span className="text-md font-semibold">{heading.trim()}:</span>
                <span className="text-sm"> {text.trim()}</span>
              </div>
            );
          } else {
            return <p key={index} className="text-sm mb-1">{part}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default TimelineItem;
