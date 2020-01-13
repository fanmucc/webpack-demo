### 初始化项目
`npm init`

### 安装webpack依赖
``` npm i -D webpack webpack-cli  // 开发环境中使用  package.json中的devDependencies对象中查看安装的插件```
``` npm i -S webpack webpack-cli  // 生产环境中使用  package.json中的dependencies对象中查看安装的插件```

### 启动命令
```js
// 在package.json中scripts对象中添加
scripts: {
    "build": "webpack src/main.js"
}
```
### 自定义webpack打包配置
```js
// 创建 webpack.config.js
const path = resolve('path')        // 引入node.js的path路径api
module.exports = {
    mode: 'development',   // 打包模式是开发环境还是生产环境; 生产模式: production， 开发模式: development
    entry: path.resolve(__dirname, './src/main.js'),              // 打包的入口文件, __dirname代表为当前文件夹
    output: {                   // 打包后的出口文件
        filename: 'output.js',      // 打包后的js文件名
        path: path.resolve(__dirname, './dist')     // 打包文件放在当前文件夹下的dist目录中，文件是以webpack.config.js为原始路劲进行寻找
    }
}
```
修改`package.json`下的`scripts`的`build`命令为
```"build": "webpack --config/webpack.config.js"``

### 配置HTML模板
js文件打包好后，我们不能每次都手动的在html文件中引入我们打包好的文件
引入插件 `npm i -D html-webpack-plugin`
修改`webpack.config.js`文件
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 之前配置
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')   // html模板路径
        })
    ]
}
```
此时如果我们需要更好的进行js缓存防止因为缓存所带来的一些问题我们可以动态的设置生成后的js文件名，并自动引入到html文件中
```js
module.exports = {
    // 之前配置
    output: {
        filename: '[name].[hash:8].js',      // 生成js名称长度为8为的随机名
        // path 不变
    }
}
```

### 删除上次打包产生文件
引入插件 `clean-webpack-plugin`
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 配置不变
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```
### 相关插件
```js
html-webpack-plugin
```