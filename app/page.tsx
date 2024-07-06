import React, { useEffect } from 'react';
import Navbar from 'app/navbar';
import '/app/global.css';

const Home: React.FC = () => {
  useEffect(() => {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    if (video) {
      // Check if the device width is greater than a certain threshold (e.g., 768px for tablets)
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        video.removeAttribute('autoplay');
        video.removeAttribute('loop');
        video.removeAttribute('muted');
        video.pause();
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Video background */}
      <video autoPlay muted loop id="myVideo" className="absolute inset-0 object-cover w-full h-full z-0">
        <source src="/testvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Navbar />
        <main className="flex flex-col items-center justify-start pt-16 px-6 lg:px-0 text-white">
          <section className="text-center max-w-4xl mx-auto mb-8">
            <br />
            <h1 className="mb-4 text-4xl font-bold">Let's Reduce Emissions</h1>
            <p className="text-lg">
              We aim to shut down abandoned wells that each spew many metric tons of methane—which is 28X as potent as carbon dioxide—each year.
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
