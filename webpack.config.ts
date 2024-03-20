import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {

    const isDev: boolean = env.mode === 'development';
    console.log('isDev:', isDev)
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Super',
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name][contenthash].js',
            clean: true
        },
        devtool: isDev&& 'inline-source-map',
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined
    }
    return config;
}