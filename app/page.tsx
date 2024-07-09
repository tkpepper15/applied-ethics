'use client'
import React from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import './global.css'; // Ensure the path is correct

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <section className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="mb-4 text-4xl font-bold">Welcome!</h1>
          <p className="text-lg">
          This site (in progress) is for surveys that assess the public's perception of ethical dilemmas. Built by Tejjas Kaul.
          </p>
          <br></br>
          <p>
          Here is the most recent survey:
          </p>
        <br></br>
        <a href="/how_corporate_ownership_shapes_big_pharma" className="custom-link">
    How Corporate Ownership Shapes Big Pharma
        </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
