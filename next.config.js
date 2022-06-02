/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["aykutplastic.s3.eu-central-1.amazonaws.com"]
  }
})

module.exports = nextConfig
