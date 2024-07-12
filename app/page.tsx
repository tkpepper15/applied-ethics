'use client';
import React from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import './global.css'; // Ensure the path is correct
import TimelineItem, { TimelineItemProps } from './timeline'; // Ensure the path is correct

const surveyItems: TimelineItemProps[] = [
  {
    id: 1,
    title: 'Title',
    content: `
      Overview: Information
    `
  },
  {
    id: 2,
    title: 'Title',
    content: `
      Overview: Information
    `
  },
  {
    id: 3,
    title: 'Title',
    content: `
      Overview: Information
    `
  }
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <meta name="viewport" content="width=device-width" />
        <section className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="mb-4 ml-4 text-4xl font-bold">Welcome!</h1>
          <div className="pr-4">
          <p className="mb-4 ml-4 text-lg">
            This site aims to raise awareness of ethical issues and assess the public&apos;s current understanding.
            <br></br>
            Built by <a className="hover:text-green-500" href="https://www.linkedin.com/in/tejjas-kaul-36091a22b/" target="_blank" rel="noopener noreferrer">Tejjas Kaul</a>.
          </p>
          </div>
          <p className="mb-4 ml-4">
            Here is the most recent survey:
          </p>
          <div className="pr-10">
          <a className="mb-4 ml-4 custom-link" href="/how_corporate_ownership_shapes_big_pharma">
            How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health
          </a>
          </div>
          <h1 className="ml-4 mb-4 text-2xl font-bold">Relevant Statistics</h1>
          <div className="timeline-container">
            <div id="timeline" className="timeline flex">
              {surveyItems.map(item => (
                <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
