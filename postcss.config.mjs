/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Note: v4 uses this instead of just 'tailwindcss'
  },
};

export default config;