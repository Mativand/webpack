import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";

type Mode = 'production' | 'development';

interface EnvVariables {
    mode: Mode
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Super',
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ],
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
    }
    return config;
}