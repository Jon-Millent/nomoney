const path = require('path');
const dir = __dirname
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(dir, '../dev/index.ts'),
  mode: 'development',
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
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(dir, '../test'),
    libraryTarget: 'umd',
    library: 'nomoney',
    libraryExport: 'default'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(dir, "../test"),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8080,
  }
};
