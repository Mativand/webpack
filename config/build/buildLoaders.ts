import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack';
import {BuildOptions} from "./types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const {mode} = options;
    const isDev: boolean = mode === 'development';

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [scssLoader, tsLoader]

}
