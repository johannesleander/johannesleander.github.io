const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/johannesleander.github.io' : '';

module.exports = {
  exportPathMap: () => ({
    '/': {page: '/'},
  }),
  assetPrefix: isProd ? '/johannesleander.github.io' : '',
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );
    return config;
  },
};
