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
              This site investigates the public&apos;s current understanding of ethical issues in the biotechnology and pharmaceutical industries.
            </p>
            <p className="text-center text-charcoal-100 mb-10 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
              Built by <a className="hover:text-azure-300 transition-colors border-b border-azure-100" href="https://www.linkedin.com/in/tejjas-kaul-36091a22b/" target="_blank" rel="noopener noreferrer">Tejjas Kaul</a> as part of the <a className="hover:text-azure-300 transition-colors border-b border-azure-100" href="https://research-innovation.ncssm.edu/summer-ri-program#h.m0ynxe9icdfe" target="_blank" rel="noopener noreferrer">NC School of Science & Math&Apos;s Research Initiative</a> as well as <a className="hover:text-azure-300 transition-colors border-b border-azure-100" href="https://scienceandsociety.duke.edu/how-mission-orientations-ethical-beliefs-and-ownership-structures-have-shaped-the-growth-of-companies-and-their-impacts-on-the-world/" target="_blank" rel="noopener noreferrer">Duke's Applied Ethics+ Summer Program</a>.
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-cream p-6 sm:p-8 border border-azure-100 shadow-sm mx-auto">
              <h3 className="font-serif text-lg sm:text-xl text-charcoal-200 mb-2">
                How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health
              </h3>
              <p className="font-serif italic text-xs text-charcoal-100 mb-5 sm:mb-6 text-center">
                July 2024
              </p>
              <div className="text-left text-xs sm:text-sm text-charcoal-100">
                <p className="mb-4">
                  <span className="font-medium">Abstract:</span> This study explores various regulatory entities and the influence of their ethics on market dynamics within the biotechnology (biotech) and pharmaceutical (pharma) industries in the United States. In addition to assessing the role of traditional government bodies, the inadvertent hand of non-governmental organizations...
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
