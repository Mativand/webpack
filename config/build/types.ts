export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    public: string;
    src: string;
}

export interface BuildOptions {
    port?: number;
    mode?: BuildMode;
    paths: BuildPaths;
    analyzer?: boolean;
    platform?: BuildPlatform;
}