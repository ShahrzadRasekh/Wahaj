/** @type {import('next').NextConfig} */

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        { source: "/gifts", destination: "/en/gifts", permanent: false },
        { source: "/ar/gifts", destination: "/ar/gifts", permanent: false }, // if you used /ar/gifts before
        { source: "/bullion", destination: "/en/bullion", permanent: false },
        { source: "/ar/bullion", destination: "/ar/bullion", permanent: false },
      ];
    },
  };
  
  module.exports = nextConfig;
  