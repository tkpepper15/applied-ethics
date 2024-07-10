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
                This site aims to raise awareness of ethical issues and assess the public&apos;s current understanding. It includes surveys that provide background information and objective material to help reduce biases.
                Built by <a className="hover:text-green-500" href="https://www.linkedin.com/in/tejjas-kaul-36091a22b/" target="_blank" rel="noopener noreferrer">Tejjas Kaul</a>.
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
