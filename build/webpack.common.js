const path = require('path');
const SRC_PATH = path.join(__dirname,'../src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry:{
        main: path.resolve(SRC_PATH,'App.js')
    },
    optimization:{
        usedExports: true,
        splitChunks:{}
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        llimit: 2048,
                        filename:'[name].[ext]'
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        exclude : /node_modules/,
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_PATH,'index.html'),
            filename: 'index.html'
        })
    ],
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            $: path.resolve(SRC_PATH,'component')
        }
    }
}