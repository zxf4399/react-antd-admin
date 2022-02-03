import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const isDev = process.env.NODE_ENV !== "production";

const config: webpack.Configuration = {
  mode: isDev ? "development" : "production",
  entry: path.join(__dirname, "src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: false,
  devServer: {
    hot: true,
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    new webpack.EvalSourceMapDevToolPlugin({}),
    !isDev && new BundleAnalyzerPlugin(),
  ].filter(Boolean) as webpack.Configuration["plugins"],
};

export default config;
