'use client'
import React from 'react';
import Navbar from '../navbar'; // Ensure the path is correct
import TimelineItem, { TimelineItemProps } from '../timeline'; // Ensure the path is correct
import 'app/global.css'; // Ensure the path is correct

const legalItems: TimelineItemProps[] = [
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

const finItems: TimelineItemProps[] = [
  { id: 1, title: '2000: Human Genome Project Completed', content: 'The first draft of the human genome was completed.' },
  { id: 2, title: '2010: Affordable Care Act', content: 'Major healthcare reform legislation was passed.' },
  { id: 3, title: '2020: COVID-19 Pandemic', content: 'The COVID-19 pandemic had significant global impacts.' },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <section className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="mb-4 text-4xl font-bold ml-4">How Corporate Ownership Shapes Big Pharma</h1>
          <h1 className="ml-4 mb-4 text-2xl font-bold">Overview</h1>
          <p className="text-lg ml-4 mb-4">
          Considering the importance of pharmaceuticals to the mass market, who should be in charge? Should it be private non-profit foundations to ensure the fulfillment of public interests, or publicly traded corporations to maximize drug innovation and profit margins?
          </p>
          <br></br>
          <p className='text-lg ml-4 mb-4'>To gauge your perspective, explore the impact of ownership structures alongside bioethics, mission-driven innovation, and financial dynamics on the pharmaceutical and biotechnology industries.
          </p>
        </section>
        <h1 className="ml-4 mb-4 text-2xl font-bold">Legislative Timeline (US/EU)</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {legalItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Financial Breakdown</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {finItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Blank Timeline</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {/* Add items for the blank timeline if needed */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
