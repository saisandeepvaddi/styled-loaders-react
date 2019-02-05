module.exports = {
    components: 'src/components/**/*.js',
    title: 'Styled Loaders',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
}
