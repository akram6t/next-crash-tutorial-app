/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', process.env.NEXT_PUBLIC_BASE_URL, 'images.unsplash.com'],
    },
};

export default nextConfig;
