/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      aspectRatio: {
        'product': '3 / 4',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.aspect-h-1': {
          '--tw-aspect-h': '1',
        },
        '.aspect-w-1': {
          position: 'relative',
          paddingBottom: 'calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)',
          '--tw-aspect-w': '1',
        },
        '.aspect-w-1 > *': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
        '.aspect-h-3': {
          '--tw-aspect-h': '3',
        },
        '.aspect-h-4': {
          '--tw-aspect-h': '4',
        },
        '.aspect-w-3': {
          position: 'relative',
          paddingBottom: 'calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)',
          '--tw-aspect-w': '3',
        },
        '.aspect-w-4': {
          position: 'relative',
          paddingBottom: 'calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)',
          '--tw-aspect-w': '4',
        },
        '.aspect-w-3 > *, .aspect-w-4 > *': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
      });
    },
  ],
};