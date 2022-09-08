/** @type {import('next').NextConfig} */
const path = require('path');
const aliases = {
  '@': path.join(__dirname, '/'),
};

const webpackConfigs = (cf) => {
  const config = { ...cf };

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    ...aliases,
  };

  return config;
};


const options = {
  webpack: webpackConfigs,
  swcMinify: true,
  reactStrictMode: true,
};


module.exports = options
