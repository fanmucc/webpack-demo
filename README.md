## webpack基础概念
[webpack官网](https://www.webpackjs.com/concepts/)
`mode`: 模式； 主要分为开发模式及生产模式； 生产模式: `production`  开发模式: `development`  两种不同模式打包出来的js文件不同，生产环境进行压缩， 而开发模式则进行半压缩，还能看懂js；

`entry`: 打包是的入口文件

`output`: 打包后的输出文件， 为对象 `output.filename` 打包后的js文件名  `output.path` 打包后的文件夹路径，如果没有此文件夹则自行创建；

`loader`: 让 `webpack` 能够去处理那些非 `JavaScript` 文件（`webpack` 自身只理解 `JavaScript`）。`loader` 可以将所有类型的文件转换为 `webpack` 能够处理的有效模块，然后你就可以利用 `webpack` 的打包能力，对它们进行处理。

- 在 `webpack` 的配置中 `loader` 有两个目标： 1. `test` 属性，用于标识出应该被对应的 `loader` 进行转换的某个或某些文件。 2. `use` 属性，表示进行转换时，应该使用哪个 `loader`。
如： 
```
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

`plugins`: 插件 `loader` 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。




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
clean-webpack-plugin
css-loader
style-loader
```