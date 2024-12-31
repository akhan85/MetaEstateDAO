module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',    // Blue
          secondary: '#A855F7',  // Purple
          accent: '#10B981',     // Green
          neutral: {
            50: '#F3F4F6',
            900: '#111827',
          }
        }
      }
    },
    plugins: [],
  }