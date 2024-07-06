"use client";
import Link from 'next/link';  // Import Link before react
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';  // Sort alphabetically
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '/app/global.css'; // Import the CSS file

const Navbar: React.FC = () => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Remove the line assigning value to darkMode since it is not used
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-10 shadow-lg h-16 flex justify-between items-center bg-white">
      <Link href="/" className="flex items-center mx-4">
        <Image
          className="h-12 w-auto"
          src="/yci.svg"
          alt="YCI Logo"
          width={80}
          height={80}
        />
      </Link>
      <div className="grow flex items-center justify-end">
        <Link href="/learn" className="ml-4 text-gray-800 hover:text-green-500">Learn</Link>
        <Link href="/contact" className="ml-4 text-gray-800 hover:text-green-500">Contact</Link>
        <Link href="/join" className="button1 ml-4">Join</Link>
        <Link href="https://donorbox.org/youth-climate-initiative-supports-the-well-done-foundation" target="_blank" rel="noopener noreferrer" className="flex items-center mx-4">
          <span className="button2">Donate</span>
        </Link>
      </div>
    </header>
  );
};

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <Navbar />
      <p className="mb-3 text-3xl font-bold text-center max-w-[50ch] pt-3"></p>
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}  // Alphabetically sorted
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        className="size-full"
      >
        <SwiperSlide>
          <div className="relative">
            <Image className="d-block w-100" src="/news.png" alt="First slide" layout="responsive" width={80} height={80} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image className="d-block w-100" src="/news.png" alt="Second slide" layout="responsive" width={80} height={80} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image className="d-block w-100" src="/news.png" alt="Third slide" layout="responsive" width={80} height={80} />
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <p className="mb-3 text-3xl font-bold text-center max-w-[50ch]">Let&apos;s Reduce Emissions</p>
      <p className="mb-3 text-xl text-center max-w-[50ch] px-3">We aim to shut down abandoned wells that each spew upwards of 280k metric tons of methane—which is 28X as potent as carbon dioxide—each year.</p>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://donorbox.org/youth-climate-initiative-supports-the-well-done-foundation"
          className="custom-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">Our Chapters</h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50">Curb climate change by locating an existing chapter or starting a new one!</p>
        </a>
        <a
          href="https://www.deq.nc.gov/waste-management/dwm/sw/field-operations/environmental-monitoring/landfillgasmonitoringguidancedocument/download"
          className="custom-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">Policy & Advocacy</h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50">Policy reform is integral to incite meaningful change—we&apos;ve started in NC.</p>
        </a>
        <a
          href="https://www.instagram.com/youth_climate_initiative/"
          className="custom-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">Keep Up</h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50">Stay up to date with our mission through our social media.</p>
        </a>
        <a
          href="https://www.nrdc.org/stories/millions-leaky-and-abandoned-oil-and-gas-wells-are-threatening-lives-and-climate"
          className="custom-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">The Science</h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50">Find in-depth information about the climate science behind open methane wells.</p>
        </a>
      </div>
    </main>
  );
};

export default Home;
