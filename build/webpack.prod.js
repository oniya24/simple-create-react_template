const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new UglifyJsPlugin()
    ],
    output:{
        filename:"[name].[contenthash].js",
        chunkFilename:"[name].[contenthash].chunk.js",
        path: path.resolve(__dirname,'../dist')
    }
})