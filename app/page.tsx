'use client';
import React from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import './global.css'; // Ensure the path is correct

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <section className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8 text-center">Applied Ethics</h1>
          <div className="mx-auto">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center font-serif text-charcoal-200 max-w-2xl mx-auto">
              This site aims to assess the public&apos;s current understanding and raise awareness about ethical issues in industry.
            </p>
            <p className="text-center text-charcoal-100 mb-10 sm:mb-12 italic text-sm sm:text-base max-w-2xl mx-auto">
              Built by <a className="hover:text-azure-300 transition-colors border-b border-azure-100" href="https://www.linkedin.com/in/tejjas-kaul-36091a22b/" target="_blank" rel="noopener noreferrer">Tejjas Kaul</a>.
              <br />Made as part of the NCSSM SRIP and Duke Applied Ethics+ Summer Programs.
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <h2 className="font-serif text-xl sm:text-2xl mb-5 sm:mb-6">Latest Research</h2>
            <div className="bg-cream p-6 sm:p-8 border border-azure-100 shadow-sm mx-auto">
              <a className="font-serif text-lg sm:text-xl text-charcoal-200 hover:text-azure-300 transition-colors block" href="/how_corporate_ownership_shapes_big_pharma">
                How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health
              </a>
              <div className="mt-5 sm:mt-6 text-left text-xs sm:text-sm text-charcoal-100">
                <p className="mb-4">
                  <span className="font-medium">Abstract:</span> This survey examines the relationship between market regulation and ethical practices in pharmaceutical industries, with particular focus on public health outcomes and stakeholder interests.
                </p>
                <p className="mb-0 font-serif italic text-right">
                  Published: July 2024
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <a href="/how_corporate_ownership_shapes_big_pharma" className="inline-block px-5 sm:px-6 py-2 bg-azure-100 text-charcoal-200 hover:bg-azure-200 transition-colors border border-azure-200 font-serif text-sm sm:text-base">
                  View Research
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
