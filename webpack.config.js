const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devtool: "source-map",
    devServer: {
    },
    // Plugins
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/index.html", to: "" },
            ],
        }),
    ],
};