const path = require('path');
const dir = __dirname
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(dir, '../src/index.ts'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(dir, '../dist'),
    libraryTarget: 'umd',
    library: 'nomoney',
    libraryExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
