const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcDir = path.join(__dirname, '/client/src');
const distDir = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${srcDir}/index.jsx`,
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: distDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
