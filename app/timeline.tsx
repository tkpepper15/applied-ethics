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
      <div className="timeline-content flex flex-col items-center">
        <div className="text-content">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          {contentParts.map((part, index) => {
            const [heading, ...textParts] = part.split(':');
            const text = textParts.join(':').trim();
            return (
              <div key={index} className="mb-1">
                {heading?.trim() ? (
                  <>
                    <span className="text-md font-semibold">{heading.trim()}:</span>
                    <span className="text-sm"> {text}</span>
                  </>
                ) : (
                  <p className="text-sm mb-1">{part}</p>
                )}
              </div>
            );
          })}
                  {imageUrl && (
          <div className="img-container">
            <img src={imageUrl} alt={title || 'Timeline Image'} className="max-w-full h-auto" />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
