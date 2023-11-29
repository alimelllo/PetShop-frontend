/** @type {import('next').NextConfig} */
 const withPWA = require('next-pwa')(
   { 
    dest : "public" ,
    register : true,
    skipWaiting : true ,
    disable : process.env.NODE_ENV === 'development'
  }
 )

module.exports = withPWA( {
  reactStrictMode: true,
  // images: {
  //   domains: [
  //     'http://www.w3.org/2000/svg',
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.w3.org/2000/svg',
        port: '',
        pathname: '/**',
      },
    ],
  },
}) 
