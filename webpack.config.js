const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[contenthash].${ext}`

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        },
    }]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/assets/images/sprite.svg')
        }),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new HtmlWebpackPlugin({
            title: 'Labinvent | HTML Test task',
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            },
            favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
        }),
        new HtmlWebpackInlineSVGPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/fonts'),
                to: path.resolve(__dirname, 'dist/fonts')
            },
            {
                from: path.resolve(__dirname, 'src/assets/images/png'),
                to: path.resolve(__dirname, 'dist/images')
            }],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [{
                test: /\.svg$/,
                use: [{
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            publicPath: './../src/assets/images/'
                        }
                    },
                    'svgo-loader'
                ]
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
                                        // FIXME: doesn't work
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
                use: jsLoaders()
            }
        ]
    }
}