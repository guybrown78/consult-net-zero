/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
  images: {
    // If you're using external image sources, you can add domains to allow external image optimization
    domains: ['example.com'], // Replace with your actual domains
  },
}

export default nextConfig