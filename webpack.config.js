var path = require('path')
var webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}  

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        //每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。
        //use应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }, {
                test: /\.vue|\.vue\.html$/,
                loader: 'vue-loader',
                options: ''
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                //url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{loader:'file-loader',options:{esModule: false}}]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?xmimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    //解析
    resolve: {
        //alias创建 import 或 require 的别名，来确保模块引入变得更简单,在给定对象的键后的末尾添加 $，以表示精准匹配：
        //相当于定义一个路径的前缀
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery$':'jquery/dist/jquery.min.js',
            '@': resolve('src'),
        },
        //自动解析确定的扩展，在这里添加了文件后缀的定义，在import的时候就可以不跟文件扩展名
        extensions: ['*', '.js', '.vue', '.json']
    },
    //开发配置
    devServer: {
        //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        historyApiFallback: true,
        //启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。
        //错误和警告仍然会显示。
        noInfo: true,
        //当存在编译错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。如果你只想显示编译错误:
        overlay: true
    },
    //性能
    performance: {
        //打开/关闭提示
        hints: false
    },
    //此选项控制是否生成，以及如何生成 source map。
    devtool: '#eval-source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true, // 开启缓存
                parallel: true, // 支持多进程
                sourceMap: true,
            }),
        ]
    },
    //插件
    plugins: [
        //DefinePlugin 允许创建一个在编译时可以配置的全局常量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //vue插件
        new VueLoaderPlugin(),
        //每次打包清除缓存
        new CleanWebpackPlugin(),
        //打包页面
        //生成首页, 在这个页面中自动引用入口 index --> dist/js/index.[chunkhash:8].js
        //以 src/index.html 这个文件作为模板
        new HtmlWebpackPlugin({
            title: 'adminlte',
            template: 'index.html',
            filename: 'index.html'
        }),
        //自动加载模块 无需每个页面import
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: "jquery",
            'window.jQuery': 'jquery',
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}
