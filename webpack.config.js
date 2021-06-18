const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    //production
    mode: 'development',
    entry: "./src/mainTest.js",
    output: {
        // path:"./dist",
        //不可以使用上面这种相对路径, 要求使用绝对路径
        //__dirname  默认提供的全局变量
        path: path.resolve(__dirname, "public/dist"),
        filename: "mainTest.js",
        //在url前加上dist  (打包的路径)
        publicPath: "dist/",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //小于limit时, 图片会转换成base64字符串格式
                            //大于limit是 需要安装file-loader支持;并且会把图片存放在你打包的文件夹
                            limit: 2014,
                            //默认安装图片的名字32位太长且不能辨识,自定义名称
                            name: 'img/[name].[hash:8].[ext]',
                        },

                    },
                ],
                type: 'javascript/auto',
            },
            //es6 转换 es5
            //cnpm install --save-dev babel-loader@7 babel-core babel-preset-es2015
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }

        ]
    },
    /**vue 两个版本,使用了vue.runtime.js版本*/
    resolve: {
        // 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
//插件
    plugins: [
        /**版权插件*/
        new webpack.BannerPlugin("最终版权归cs.y所有"),
        /**打包时, 添加index.html 文件*/
        //cnpm install html-webpack-plugin --save-dev
        // <!--      ERROR in Template execution failed: ReferenceError: BASE_URL is not defined -->
        // <!--      <link rel="icon" href="<%= BASE_URL %>favicon.ico">-->
        // <!--      替换后-->
        // <!--      <link rel="icon" href="<%= htmlWebpackPlugin.options.url %>favicon.ico">-->
        new htmlWebpackPlugin({
            template: "./public/index.html"
        }),
        /**压缩 丑化*/
        //cnpm install uglifyjs-webpack-plugin@1.1.1 --save-dev
        new uglifyjsWebpackPlugin(),
    ],


    devServer: {
        contentBase: "./public/dist",
        inline: true
    }
}