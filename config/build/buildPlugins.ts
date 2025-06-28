import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Configuration, DefinePlugin} from "webpack";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
    const {mode, paths, platform} = options;
    const isDev = mode === 'development';

    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        !isDev && new BundleAnalyzerPlugin(),
        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean);
}