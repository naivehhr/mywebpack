const path = require("path")
const srcRoot = "./src"
const HtmlWebpackPlugin = require("html-webpack-plugin") // 生成html模板
module.exports = {
  // 输入配置
  // entry: ["./src/index.tsx", './src/test.js'],
  entry: {
    // index: "./src/index.tsx",
    test: "./src/a.js"
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
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
      // {
      //   test: /\.(js|jsx|tsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-es2015"]
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve("./dist/index.html"), // 生成的html文件存放的地址和文件名
      template: path.resolve("./index.html") // 基于index.html模板进行生成html文件
    })
  ]
}
