"use client"
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Add scroll detection for enhanced navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-10 transition-all duration-300 ${
      isScrolled 
        ? 'bg-offwhite shadow-sm border-b border-azure-100' 
        : 'bg-offwhite/90 backdrop-blur-sm'
    } h-16 flex justify-between items-center px-4 sm:px-6 md:px-8`}>
      <div className="flex items-center">
        {/* Only show the logo on desktop and not in mobile menu */}
        <a href="/" className={`flex items-center ${isOpen ? 'hidden' : 'block'}`}>
          <span className="font-serif text-base sm:text-xl text-charcoal-300">Applied Ethics</span>
        </a>
      </div>
      <div className="flex items-center">
        {/* Mobile Navigation Toggle - only shown if needed in the future */}
        <button
          className="md:hidden text-charcoal-200 hover:text-azure-300 focus:outline-none hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - kept but hidden in case needed in the future */}
      <div className="hidden md:hidden fixed top-16 left-0 w-full h-screen bg-offwhite bg-opacity-95 backdrop-blur-sm py-8 px-6">
        <nav className="space-y-6">
          {/* Content can be added here if needed in the future */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
