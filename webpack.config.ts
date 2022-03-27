import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import webpack, { cache } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

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
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv()],
              },
            },
          },
        ],
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
  ].filter(Boolean) as webpack.Configuration["plugins"],
  performance: {
    maxAssetSize: 800000,
    maxEntrypointSize: 1200000,
  },
};

export default config;
