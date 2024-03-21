import webpack from "webpack";
import path from "path";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const {mode, paths} = options;


    const isDev: boolean = mode === 'development';
    const isProd: boolean = mode === 'production';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: '[name][contenthash].js',
            clean: true
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    };
}