const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    entry: {
        main: resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: "index.js",
        path: resolve(__dirname, 'dist')
    },
    resolve: {
        // webpack 默认只处理js、jsx等js代码
        // 为了防止在import其他ts代码的时候，出现
        // " Can't resolve 'xxx' "的错误，需要特别配置
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_moudles/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 引用的资源如果是 '${svg-path}/icon-comment.svg?abc'
                test: /\.svg$/,
                resourceQuery: /abc/,
                // 以webpack的资源形式加载（普通资源文件、base64等）
                type: 'asset',
            },
            {
                // 除了上面的匹配规则，我们都按照React组件来使用
                test: /\.svg$/,
                resourceQuery: {not: [/abc/]},
                use: ['@svgr/webpack']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    devServer: {
        port: 8080
    }
}
