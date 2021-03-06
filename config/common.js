const path = require("path")
const srcRoot = "./src"
const HtmlWebpackPlugin = require("html-webpack-plugin") // 生成html模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const TestPlugin = require("../src/plugin/TestPlugin")
const MyPlugin = require("../src/plugin/MyPlugin")
const MainPlugin = require("../src/plugin/MainPlugin")
const ListenPlugin = require("../src/plugin/ListenPlugin")
// console.log('??', process.env.NODE_ENV)
const isProduction = process.env.NODE_ENV === "production"
const filename = path.resolve(`./${isProduction ? "dist" : "dev"}/index.html`)
// console.log("filename", filename)
module.exports = {
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: "dist",
  //     })
  //   ]
  // },
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
        test: /\.(js|jsx|tsx|jpg)$/,
        use: [
          {
            loader: path.resolve("./src/loader/myloader.js"),
            options: {
              name: "aran"
            }
          }
        ],
        include: path.resolve(srcRoot)
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
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
          }, // 用 MiniCssExtractPlugin 就不用style-loader了
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it uses publicPath in webpackOptions.output
          //     publicPath: "../",
          //     hmr: process.env.NODE_ENV === "development"
          //   }
          // },
          {
            loader: "css-loader"
            // options: {
            //   modules: true,
            //   modules: {
            //     localIdentName: "[name]__[local]___[hash:base64:5]"
            //   }
            // }
          },
          {
            loader: path.resolve("./src/loader/themeLoader.js"),
            options: {
              themeConfig: {
                "cc(bg001)": {
                  light: "white",
                  dark: "black"
                },
                "cc(AAAA)": {
                  light: "black",
                  dark: "white"
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: filename, // 生成的html文件存放的地址和文件名
      template: path.resolve("./index.html") // 基于index.html模板进行生成html文件
    }),
    new TestPlugin({
      filename: "a.js",
      template: path.resolve(__dirname, "../otherFile/test.js")
    }),

    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // all options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    //   ignoreOrder: false // Enable to remove warnings about conflicting order
    // }),
    // new MainPlugin(),
    // new ListenPlugin()
    // 自定义插件
    new MyPlugin({
      templete: path.resolve("./index.html")
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  }
}
