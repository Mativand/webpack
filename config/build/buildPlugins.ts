import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Configuration} from "webpack";
import {BuildOptions} from "./types";

export function buildPlugins({mode, paths}: BuildOptions):Configuration['plugins'] {
    const isProd: boolean = mode === 'production';
    const isDev:  boolean = mode === 'development';

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Super',
            template: paths.html
        })
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
    }
    return plugins;
}