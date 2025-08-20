/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Primary purple theme from the image
          primary: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7', // Main purple
            600: '#9333ea',
            700: '#7c2d12', // Deep purple
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764',
          },
          // Secondary purple (lighter)
          secondary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
          // Accent colors from the image
          accent: {
            blue: '#3b82f6',
            orange: '#f97316',
            pink: '#ec4899',
          },
          // Custom gradients
          gradient: {
            'purple-blue': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
            'purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            'blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          }
        },
        backgroundImage: {
          'gradient-purple-blue': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
          'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          'gradient-light-purple': 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
        },
        // Add 3D transform utilities for flip cards
        perspective: {
          '1000': '1000px',
          '1500': '1500px',
          '2000': '2000px',
        },
        // Add custom transform utilities
        transformStyle: {
          '3d': 'preserve-3d',
          'flat': 'flat',
        },
        // Add backface visibility utilities
        backfaceVisibility: {
          'hidden': 'hidden',
          'visible': 'visible',
        },
        // Add rotate Y utilities
        rotate: {
          'y-180': 'rotateY(180deg)',
          'y-90': 'rotateY(90deg)',
          'y-45': 'rotateY(45deg)',
          'x-180': 'rotateX(180deg)',
          'x-90': 'rotateX(90deg)',
          'x-45': 'rotateX(45deg)',
        },
        // Add animation delays for staggered effects
        animationDelay: {
          '100': '100ms',
          '200': '200ms',
          '300': '300ms',
          '400': '400ms',
          '500': '500ms',
        },
      },
    },
    plugins: [
      // Add a plugin to generate the custom 3D utilities
      function({ addUtilities }) {
        const newUtilities = {
          '.perspective-1000': {
            perspective: '1000px',
          },
          '.perspective-1500': {
            perspective: '1500px',
          },
          '.perspective-2000': {
            perspective: '2000px',
          },
          '.transform-style-3d': {
            'transform-style': 'preserve-3d',
          },
          '.transform-style-flat': {
            'transform-style': 'flat',
          },
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.backface-visible': {
            'backface-visibility': 'visible',
          },
          '.rotate-y-180': {
            transform: 'rotateY(180deg)',
          },
          '.rotate-y-90': {
            transform: 'rotateY(90deg)',
          },
          '.rotate-y-45': {
            transform: 'rotateY(45deg)',
          },
          '.rotate-x-180': {
            transform: 'rotateX(180deg)',
          },
          '.rotate-x-90': {
            transform: 'rotateX(90deg)',
          },
          '.rotate-x-45': {
            transform: 'rotateX(45deg)',
          },
          // Animation delays
          '.delay-100': {
            'animation-delay': '100ms',
          },
          '.delay-200': {
            'animation-delay': '200ms',
          },
          '.delay-300': {
            'animation-delay': '300ms',
          },
          '.delay-400': {
            'animation-delay': '400ms',
          },
          '.delay-500': {
            'animation-delay': '500ms',
          },
        }
        
        addUtilities(newUtilities)
      }
    ],
  }