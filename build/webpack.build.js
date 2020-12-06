const path = require('path');
const dir = __dirname
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(dir, '../src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
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
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
};
