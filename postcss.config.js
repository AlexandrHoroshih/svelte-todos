const fix100vh = require('postcss-100vh-fix');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [nested, autoprefixer, fix100vh],
};
