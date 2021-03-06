var path = require('path');
var webpack = require('webpack');
var outPath = path.join(__dirname, './public');


module.exports = {
    devtool: 'source-map',
    entry: {
        main: __dirname + "/src/app.tsx"
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 8881
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
}