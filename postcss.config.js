const fix100vh = require('postcss-100vh-fix');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');

module.exports = {
  plugins: [normalize, nested, autoprefixer, fix100vh],
};
