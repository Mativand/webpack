import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types";
import path from "path";


interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src')
    }

    return buildWebpack({
        mode: env.mode,
        port: env.port ?? 3000,
        paths: paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });
}