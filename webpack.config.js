const CopyWebpackPlugin = require("copy-webpack-plugin");
// import path from 'path';

const path = require("path");
// export default {
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "app"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "assets", to: "assets" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
      },
    ],
  },
};
