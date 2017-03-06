module.exports = function (options) {
    return {
        entry: {
            "vaptcha-sdk": "./scripts/vaptcha-sdk.js"
        },
        output: {
            path: "./",
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[name].[chunkhash].bundle.map',
            chunkFilename: '[id].[chunkhash].chunk.js'
        },
        resolve: {
            extensions: [".js", ".json"],
            modules: ["./scripts", ".node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader']
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: ["./register.html"]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
            ]
        },
        plugins: [

        ],
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}