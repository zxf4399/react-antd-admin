import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ESLintPlugin from "eslint-webpack-plugin";

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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: isDev ? "eval-source-map" : "source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  output: {
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          name(module: { context: { match: (arg0: RegExp) => string[] } }) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm/${packageName}`;
          },
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev &&
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
      }),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    }),
  ].filter(Boolean) as webpack.Configuration["plugins"],
  performance: {
    maxAssetSize: 800000,
    maxEntrypointSize: 1200000,
  },
};

export default config;
