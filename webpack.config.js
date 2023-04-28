const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildFolderName = 'dist'
const port = '3000'

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
    path: path.resolve(__dirname, buildFolderName),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, buildFolderName),
    },
    port: port,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
  },
}
