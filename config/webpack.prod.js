const paths = require('./paths'),
  merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.publicDir,
    publicPath: './',
    filename: `[name].js`,
    chunkFilename: `[name].js`,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
    ],
  },
})
