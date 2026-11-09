/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.pfst.hr",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "pomorkinje-be.pfst.hr",
        pathname: "/wp-content/uploads/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
