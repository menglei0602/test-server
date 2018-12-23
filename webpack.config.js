const path = require('path'); //node的路径模块
module.exports = {
  entry: {
    app: ["./src/index.js"] //入口文件
  },
  output: {
    path: path.resolve(__dirname, "build"),//输出位置
    publicPath: "/assets/",//指定资源文件引用的目录 
    filename: "bundle.js"//输入文件
  }
}