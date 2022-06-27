// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_CONNECTION: process.env.NEXT_PUBLIC_MONGODB_CONNECTION,
  }
}