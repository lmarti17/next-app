const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')

let config = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module.
    if (!isServer) config.node = { fs: 'empty' }
    return config
  },
}

config = withCSS(config)

config = withBundleAnalyzer({ enabled: process.env.ENV === 'production' })(config)

module.exports = config
