const path = require('path');
const SRC_PATH = path.join(__dirname,'../src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry:{
        main: path.resolve(SRC_PATH,'main.js')
    },
    optimization:{
        usedExports: true,
        splitChunks:{}
    },
    module:{
        rules:[
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
}