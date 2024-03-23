export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface BuildOptions {
    port: number;
    mode: BuildMode;
    paths: BuildPaths;
    analyzer?: boolean;
}