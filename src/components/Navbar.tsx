'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);
  const [partnersDropdown, setPartnersDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Axion Excelsior
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
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Schools
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {schoolsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                    <Link href="/services#lms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      K-12 Schools
                    </Link>
                    <Link href="/services#lms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Higher Education
                    </Link>
                  </div>
                )}
              </div>

              {/* Application Partners Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPartnersDropdown(!partnersDropdown)}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Application Partners
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {partnersDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                    <Link href="/services#driving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Driving Schools
                    </Link>
                    <Link href="/services#aviation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Aviation Institutes
                    </Link>
                    <Link href="/services#manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Manufacturing
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/services" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Our Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
           
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Our Services
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-lg">
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}