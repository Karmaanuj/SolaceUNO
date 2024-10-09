module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {backgroundImage: theme => ({
      'dashed-line': 'repeating-linear-gradient(transparent, transparent 5px, #fff 5px, #fff 10px)',
    }),},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
