import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      // Example: Exclude specific libraries from the client bundle
      config.resolve.alias['@sentry/react'] = false
    }
    return config
  },
})

export default nextConfig
