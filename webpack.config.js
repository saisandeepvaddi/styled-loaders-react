const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: true,
                warnings: false,
            },
            parallel: true,
        }),
    ],
}
