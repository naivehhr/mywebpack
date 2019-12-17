const path = require("path")
const srcRoot = "./src"
const HtmlWebpackPlugin = require("html-webpack-plugin") // 生成html模板
module.exports = {
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
      },
      {
        test: /\.css$/i,
        include: /node_modules|antd\.css/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules|antd\.css/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              getLocalIdent: (context, localIdentName, localName, options) => {
                return "whatever_random_class_name"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve("./dev/index.html"), // 生成的html文件存放的地址和文件名
      template: path.resolve("./index.html") // 基于index.html模板进行生成html文件
    })
  ]
}
