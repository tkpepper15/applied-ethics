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

  const handleClick = () => {
    alert(`Clicked on: ${title}`);
    // Add your custom logic here
  };

  return (
    <div
      className={`timeline-item ${isHovered ? 'bg-gray-200' : 'bg-gray-100'} p-4 rounded-lg shadow-md cursor-pointer`}
    >
      <div className="timeline-content">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
