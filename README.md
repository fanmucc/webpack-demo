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
