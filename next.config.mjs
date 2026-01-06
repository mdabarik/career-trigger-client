/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // allow all http domains
      },
      {
        protocol: "https",
        hostname: "**", // allow all https domains
      },
    ],
  },
};

export default nextConfig;
