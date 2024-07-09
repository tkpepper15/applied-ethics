'use client'
import React from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import TimelineItem, { TimelineItemProps } from './timeline'; // Ensure the path is correct
import './global.css'; // Ensure the path is correct

const items: TimelineItemProps[] = [
  { id: 1, title: '1913: Federal Income Tax Introduced', content: 'Federal Income Tax was introduced in the United States.' },
  { id: 2, title: '1917: Charitable Deduction Enacted', content: 'Charitable Deduction was enacted in the United States.' },
  { id: 3, title: '1950: Revenue Act of 1950', content: 'Imposed the first restrictions on private foundations.' },
  { id: 4, title: '1969: Tax Reform Act of 1969', content: 'Introduced comprehensive rules for private foundations.' },
  { id: 5, title: '1981: Economic Recovery Tax Act of 1981', content: 'Reduced the excise tax rate on net investment income.' },
  { id: 6, title: '1984: Deficit Reduction Act of 1984', content: 'Made adjustments to rules concerning self-dealing and distribution.' },
  { id: 7, title: '1997: Taxpayer Relief Act of 1997', content: 'Simplified reporting requirements for private foundations.' },
  { id: 8, title: '2006: Pension Protection Act of 2006', content: 'Introduced additional restrictions on private foundations.' },
  { id: 9, title: '2017: Tax Cuts and Jobs Act', content: 'Made changes affecting charitable organizations.' },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <section className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="mb-4 text-4xl font-bold">How Corporate Ownership Shapes Big Pharma</h1>
          <p className="text-lg">
            Discover how ownership structures, combined with bioethics, mission-driven innovation, and financials, influence the pharma and biotech industry.
          </p>
        </section>
        <h1 className="mb-4 text-2xl font-bold">Legislative Timeline</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {items.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
