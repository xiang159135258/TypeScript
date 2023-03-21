// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: "bundle.js"
    },

    // 指定webpack打包时要用的模块
    module : {
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use : [
                    // 配置babel
                    {
                        // 指定加载器
                        loader:'babel-loader',
                        // 设置babel
                        options:{
                            // 设置预定义环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 兼容目标浏览器
                                        targets:{
                                            "chrome": "88",
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式 "usage" 按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                // 要排除的文件
                exclude: /node-modules/
            },
            // 设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    // 执行顺序由下往上
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader : "postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions',
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // 配置Webpack 
    plugins : [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }),
    ],

    // 用来设置引用的模块
    resolve: {
        extensions: ['.js','.ts']
    }

}