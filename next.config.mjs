/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ Add Pexels
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      // ✅ You can also re-add Unsplash if needed
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // ✅ A useful addition for general stock photos
      {
        protocol: 'https',
        hostname: '**.pexels.com', // This covers subdomains
      },
    ],
  },
}

export default nextConfig;
