const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
module.exports = merge(baseConfig,{
    mode: "development",
    devtool: '#cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../dist'),
        open: true,
        hot: true,
        compress: true,
        port: 4000,
        historyApiFallback: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: 'style-loader'
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
    output:{
        filename:"[name].js",
        chunkFilename:"[name].chunk.js"
    }
})