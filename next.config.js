const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
