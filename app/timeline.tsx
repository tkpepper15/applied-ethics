import React from 'react';

export interface TimelineItemProps {
  id: number;
  title: string;
  content: string;
  imageUrl?: string; // New property for image URL
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, title, content, imageUrl }) => {
  // Parse content into structured parts
  const contentParts = content.split('\n').filter(part => part.trim() !== '');

  return (
    <div className="timeline-item bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="timeline-content">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {imageUrl && ( // Render image if imageUrl is provided
          <div className="img-container mb-1">
            <img src={imageUrl} alt={title} className="max-w-full h-auto sm:max-w-md lg:max-w-lg" />
          </div>
        )}
        {contentParts.map((part, index) => {
          // Split content into heading and text
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
