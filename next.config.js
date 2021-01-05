const ForkTsCheckerPlugin = require('hard-source-webpack-plugin');
const withPWA = require('next-pwa');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    plugins: [
        new ForkTsCheckerPlugin(),
        new HardSourcePlugin(),
    ],
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    rules: [
        {
            exclude: /node_modules/,
            loader: [
                {
                    loader: 'ts-loader',
                    options: {
                        experimentalWatchApi: true,
                        transpileOnly: true,
                    },
                },
            ],
            test: /\.tsx?$/,
        },
    ],
    webpack: (config, { dev }) => {
        if (dev) {
            config.devtool = 'cheap-module-source-map';

            Object.assign(config.optimization, {
                removeAvailableModules: false,
                removeEmptyChunks: false,
                splitChunks: false,
            });

            Object.assign(config.output, {
                pathinfo: false,
            });
        }

        return config;
    },
});