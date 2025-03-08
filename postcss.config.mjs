// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// module.exports = {
//   plugins: [
//     require('@tailwindcss/postcss'), // Include Tailwind CSS PostCSS plugin
//     require('autoprefixer'),          // Include Autoprefixer
//   ],
// }; 

// module.exports = {
//   plugins: [
//     // Include Tailwind CSS PostCSS plugin
//     ['@tailwindcss/postcss', {}], // Tailwind CSS doesn't require config, but this is the correct format
//     // Include Autoprefixer
//     'autoprefixer', // Autoprefixer can be included without configuration
//   ],
// };

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;