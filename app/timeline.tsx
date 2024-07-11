import React from 'react';

export interface TimelineItemProps {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, title, content, imageUrl }) => {
  const contentParts = content.split('\n').filter(part => part.trim() !== '');

  return (
    <div className="timeline-item bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="timeline-content flex flex-col-reverse sm:flex-row-reverse items-center sm:items-start">
        {imageUrl && (
          <div className="img-container sm:ml-4 mb-4 sm:mb-0">
            <img src={imageUrl} alt={title} className="max-w-full h-auto sm:max-w-md lg:max-w-lg" />
          </div>
        )}
        <div className="text-content">
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
    </div>
  );
};

export default TimelineItem;
