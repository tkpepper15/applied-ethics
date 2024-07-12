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
            if (part.startsWith('• ')) {
              // Render bulleted list
              const items = part.split('• ').filter(item => item.trim() !== '');
              return (
                <div key={index} className="mb-1">
                  <ul className="list-disc pl-4">
                    {items.map((item, idx) => (
                      <li key={idx} className="text-sm">{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              // Split into heading and content
              const colonIndex = part.indexOf(':');
              if (colonIndex !== -1) {
                const heading = part.substring(0, colonIndex).trim();
                const text = part.substring(colonIndex + 1).trim();
                return (
                  <div key={index} className="mb-1">
                    <span className="text-md font-semibold">{heading}</span>
                    <span className="text-sm">: {text}</span>
                  </div>
                );
              } else {
                // Render as regular paragraph
                return (
                  <p key={index} className="text-sm mb-1">{part}</p>
                );
              }
            }
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
