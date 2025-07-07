import {buildWebpack} from "@packages/build-config";
import {BuildMode, BuildPaths, BuildPlatform} from "@packages/build-config";
import path from "path";
import webpack from "webpack";
import packageJson from "./package.json";

interface EnvVariables {
    mode: BuildMode,
    port?: number,
    platform?: BuildPlatform
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'bootstrap.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        platform: env.platform ?? 'desktop'
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true
            },
            'react-dom': {
                eager: true
            },
            'react-router-dom': {
                eager: true
            },
        }
    }))

    return config;
};