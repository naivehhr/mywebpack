const path = require("path")
const srcRoot = "./src"
const HtmlWebpackPlugin = require("html-webpack-plugin") // 生成html模板
module.exports = {
  // 输入配置
  // entry: ["./src/index.tsx"],
  entry: ["./src/test.js"],

  // 输出配置
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "bundle.min.js"
  },

  module: {
    // 加载器配置
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        use: [{ loader: "babel-loader" }],
        include: path.resolve(srcRoot)
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    // 配置webpack-dev-server， 在本地启动一个服务器运行
    host: "localhost", // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
    port: 8088, // 端口
    open: true // 自动打开页面
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve("./dev/index.html"), // 生成的html文件存放的地址和文件名
      template: path.resolve("./index.html") // 基于index.html模板进行生成html文件
    })
  ]
}
