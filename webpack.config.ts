import "webpack-dev-server";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import WebpackPwaManifest from "webpack-pwa-manifest";
import WorkboxPlugin from "workbox-webpack-plugin";

import { isDev, isProd } from "./src/utils/const";

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
        test: /\.(c|sc)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                auto: (resourcePath: string) =>
                  resourcePath.endsWith(".module.scss"),
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.md$/,
        type: "asset/source",
      },
    ],
  },
  devtool: isDev ? "eval-source-map" : "source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          name(module: { context: string }) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/]\.pnpm[\\/](.*?)([\\/]|$)/
            )?.[1];
            const index = module.context.indexOf(packageName || "");

            return `.pnpm/${module.context.slice(index)}`;
          },
        },
      },
    },
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
  plugins: [
    isProd &&
      new WebpackPwaManifest({
        description: "TECH-STACK",
        icons: [
          {
            src: "https://raw.githubusercontent.com/zxf4399/oss/main/2022/04/11/tech-stack-icon-1024.png",
            size: "1024 * 1024",
          },
        ],
        name: "TECH-STACK",
        publicPath: "/tech-stack",
      }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isProd &&
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
      }),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    }),
    isProd && new MiniCssExtractPlugin(),
    isProd &&
      new WorkboxPlugin.GenerateSW({
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      }),
  ].filter(Boolean) as webpack.Configuration["plugins"],
  performance: {
    maxAssetSize: 800000,
    maxEntrypointSize: 1200000,
  },
};

export default config;
