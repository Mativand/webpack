import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration} from "webpack";
import {BuildOptions} from "./types";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions):Configuration['plugins'] {
    const isProd: boolean = mode === 'production';
    const isDev:  boolean = mode === 'development';

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Super',
            template: paths.html
        }),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),
        new ForkTsCheckerWebpackPlugin()
    ]

    if (isDev) {

    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        )

        if (analyzer) {
            plugins.push(
                new BundleAnalyzerPlugin()
            )
        }
    }
    return plugins;
}