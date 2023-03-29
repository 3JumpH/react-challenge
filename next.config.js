/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "react-challenge.human.hr",
        port: "",
        pathname: "/assets/images/post_img/**",
      },
    ],
  },
};

module.exports = nextConfig;
