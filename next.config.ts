/** @type {import('next').NextConfig} */ 

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // Correcto, 8000 en lugar de 80000
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
