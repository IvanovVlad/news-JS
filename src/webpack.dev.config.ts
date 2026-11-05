import path from 'node:path';
import type { Configuration } from 'webpack';
import 'webpack-dev-server';

const config: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};

export default config;
