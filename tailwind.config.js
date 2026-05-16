/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#FAFBF8',
        mist: '#F7FAF8',
        sage: '#EEF5F1',
        eucalyptus: '#6FA89A',
        foam: '#A8C5BD',
        ink: '#243036',
        slate: '#5B6B73',
        line: '#DCE7E1',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(36, 48, 54, 0.08)',
        lift: '0 18px 42px rgba(36, 48, 54, 0.12)',
      },
    },
  },
  plugins: [],
};
