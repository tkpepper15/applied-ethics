"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';  // Ensure the path is correct
import './global.css';  // Ensure the path is correct

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    if (video && isMobile) {
      video.play().catch(error => {
        console.error("Error attempting to play video: ", error);
      });
    }
  }, [isMobile]);

  return (
    <div className="relative">
      {/* Video background */}
      <video autoPlay muted loop playsInline id="myVideo" className="absolute inset-0 object-cover w-full h-full z-0">
        <source src="/testvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Navbar />
        <main className="flex flex-col items-center justify-start pt-16 px-6 lg:px-0 text-white">
          <section className="text-center max-w-4xl mx-auto mb-8">
            <br />
            <h1 className="mb-4 text-4xl font-bold">Let&apos;s Reduce Emissions</h1>
            <p className="text-lg">
              We aim to shut down abandoned wells that spew metric tons of methane—which is 28X as potent as carbon dioxide—each year.
            </p>
          </section>
          <a
            href="https://www.instagram.com/youth_climate_initiative/"
            className="custom-link flex items-center justify-start"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'flex-start' }} // Align contents to the left
          >
            <h2 className="mb-2 text-2xl font-semibold">Keep Up</h2>
            <p className="text-sm">Stay up to date with our mission through our social media.</p>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
