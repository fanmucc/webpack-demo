const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer');
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "./build"),       // 运行目录  
        progress: true,     // 打包时的进度条
        port: 9000          // 端口号
    },      // 配置开发server 随着用户的保存自行运行刷新页面
    mode: 'development',       // 打包模式， 生产模式: production， 开发模式: development
    entry: path.resolve(__dirname, './src/main.js'),        // 打包的入口文件
    output: {
        filename: '[name].[hash:8].js',       // 打包后的js文件
        path: path.resolve(__dirname, './build')
    },
    plugins: [          // webpack 插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,        // 清除双引号
                collapseWhitespace: true,           // 压缩成一行
            }
        })
    ],
    module: {           // 模块
        rules: [
            {
                test: /\.css$/,             // 正则规则
                use:['style-loader',
                // {
                //     loader: 'style-loader',
                //     options: {
                //         insertAt: 'top'        //生成的css文件放在html模板的上边，此时如果我们在html中写css是会编译到下部
                //     }    
                // },
                'css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[require('autoprefixer')]
                    }       // 对象的话可以进行参数的设置
                }] // 从右向左解析原则
                /** 
                 * presets: [], 大插件集合
                 * plugins: []  小插件集合
                */
            }
        ]
    }
}