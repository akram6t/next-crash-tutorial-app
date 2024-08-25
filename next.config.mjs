/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', process.env.NEXT_PUBLIC_BASE_URL],
    },
};

export default nextConfig;
