const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postCssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
