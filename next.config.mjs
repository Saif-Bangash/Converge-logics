/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // ✅ flaticon
      },
      {
        protocol: "https",
        hostname: "cdn2.iconfinder.com", // ✅ iconfinder
      },
      {
        protocol: "https",
        hostname: "www.convergelogics.com", // ✅ converge logics
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ unsplash
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com", // ✅ istockphoto (your current image)
      },
    ],
  },
};

export default nextConfig;
