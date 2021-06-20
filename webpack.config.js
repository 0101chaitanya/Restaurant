const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        home: './src/home.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [new HtmlWebpackPlugin({
            title: "Grandma's Recipe",
        }

    )],

    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: true,
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

};