/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_USER_ID : process.env.NEXT_PUBLIC_EMAILJS_USER_ID,}
}

module.exports = nextConfig
