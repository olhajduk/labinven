const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
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
        extensions: ['.js']
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
      },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/assets/images/sprite.svg')
        }),
        // new SpriteLoaderPlugin({
        //     plainSprite: true
        // }),
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
                    to: path.resolve(__dirname, 'dist/assets/fonts')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/images/*.png'),
                    to: path.resolve(__dirname, 'dist/')
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]',
            //             publicPath: './../src/assets/images/*.png'
            //         },
            //     }],
            // },
            {
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
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}
