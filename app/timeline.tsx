'use client';

import React from 'react';

export interface TimelineItemProps {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, content, imageUrl }) => {
  const contentParts = content.split('\n').filter(part => part.trim() !== '');

  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <div className="text-content">
          <h2 className="text-lg font-serif font-medium mb-3">{title}</h2>
          {contentParts.map((part, index) => {
            if (part.startsWith('• ')) {
              // Render bulleted list
              const items = part.split('• ').filter(item => item.trim() !== '');
              return (
                <div key={index} className="mb-2">
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
                  <div key={index} className="mb-2">
                    <span className="text-md font-medium">{heading}</span>
                    <span className="text-sm">: {text}</span>
                  </div>
                );
              } else {
                // Render as regular paragraph
                return (
                  <p key={index} className="text-sm mb-2">{part}</p>
                );
              }
            }
          })}
          {imageUrl && (
            <div className="img-container mt-3">
              <img 
                src={imageUrl} 
                alt={title || 'Timeline Image'} 
                className="max-w-full h-auto rounded-sm" 
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {items.map(item => (
          <div key={item.id} className="timeline-wrapper">
            <TimelineItem 
              id={item.id}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TimelineItem };
export default Timeline;
