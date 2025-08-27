'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);
  const [partnersDropdown, setPartnersDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    // Add your language switching logic here
    console.log('Language changed to:', language);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover-lift">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                  src="/logo_final.png"
                  alt="ExcelsiorTech Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-700">
                ExcelsiorTech Inc.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Schools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSchoolsDropdown(!schoolsDropdown)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-md font-medium flex items-center transition-colors duration-200"
                >
                  Schools
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {schoolsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-100">
                    <Link href="/schools" className="block px-4 py-2 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      K-12 Schools
                    </Link>
                  </div>
                )}
              </div>

              {/* Application Partners Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPartnersDropdown(!partnersDropdown)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-md font-medium flex items-center transition-colors duration-200"
                >
                  Tailored Extras
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {partnersDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-100">
                    <Link href="/trainingacademy" className="block px-4 py-2  text-gray-700 text-md hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Training Academies
                    </Link>
                    <Link href="/userguide" className="block px-4 py-2  text-gray-700 text-md hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Product Guides
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-md font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-md font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Right side with Language Selector and CTA */}
<div className="hidden md:flex items-center space-x-4">
  <Link
    href="/contact"
    className="bg-gradient-purple-blue hover:opacity-90 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift shadow-lg"
  >
    Request Demo
  </Link>

 {/* Language Selector (with custom image) */}
<div className="flex items-center p-5">
  <Image
    src="/canada-flag-icon.svg"
    alt="Canadian Flag"
    width={30}
    height={30}
    className="mr-2"
  />
  English
  <span className="mx-2 text-gray-400">|</span>
  Français
</div>
</div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdown(!languageDropdown)}
                className="flex items-center text-gray-700 hover:text-purple-600 px-2 py-1 text-sm font-medium transition-colors duration-200"
              >
                {/* Canadian Flag SVG */}
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="16" fill="#FF0000"/>
                  <rect x="6" y="0" width="12" height="16" fill="#FFFFFF"/>
                  <path d="M12 3L13.5 6H16.5L14.25 7.5L15 10.5L12 8.5L9 10.5L9.75 7.5L7.5 6H10.5L12 3Z" fill="#FF0000"/>
                </svg>
                {currentLanguage === 'English' ? 'EN' : 'FR'}
              </button>
              {languageDropdown && (
                <div className="absolute top-full right-0 mt-1 w-28 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-100">
                  <button
                    onClick={() => handleLanguageChange('English')}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 rounded-lg mx-1 my-1 ${
                      currentLanguage === 'English' 
                        ? 'bg-purple-50 text-purple-600' 
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('Français')}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 rounded-lg mx-1 my-1 ${
                      currentLanguage === 'Français' 
                        ? 'bg-purple-50 text-purple-600' 
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-purple-100">
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">
              About Us
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium bg-gradient-purple-blue text-white rounded-xl mx-3 mt-2 text-center hover-lift shadow-lg">
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}