const path = require('path');

console.log("webpack dev");

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader:
                    'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
};