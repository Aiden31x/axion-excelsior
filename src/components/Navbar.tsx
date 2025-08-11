'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);
  const [partnersDropdown, setPartnersDropdown] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover-lift">
              <div className="w-15 h-15 relative">
                <Image
                  src="/logo5.png"
                  alt="ExcelsiorTech Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-700 ">
                ExcelsiorTech
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
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Schools
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {schoolsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-100">
                    <Link href="/services#lms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      K-12 Schools
                    </Link>
                    <Link href="/services#lms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Higher Education
                    </Link>
                  </div>
                )}
              </div>

              {/* Application Partners Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPartnersDropdown(!partnersDropdown)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Application Partners
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {partnersDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-100">
                    <Link href="/services#driving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Driving Schools
                    </Link>
                    <Link href="/services#aviation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Aviation Institutes
                    </Link>
                    <Link href="/services#manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 rounded-lg mx-2 my-1">
                      Manufacturing
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Our Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-gradient-purple-blue hover:opacity-90 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift shadow-lg">
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Our Services
            </Link>
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