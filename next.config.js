/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/vacation",
        permanent: true,
      },
    ];
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sandals.com',
        port: '',
        pathname: '/obe/v12/images/**'
      }
    ]
  }
};

module.exports = nextConfig;
