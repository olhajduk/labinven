const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new copyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/fonts'),
                    to: path.resolve(__dirname, 'dist/fonts')
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[contenthash].css'
        })
    ],
    module: {
        rules: [{
                test: /svg\/.*\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer'
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}