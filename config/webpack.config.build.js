const merge = require("webpack-merge")
const path = require("path")
const srcRoot = "./src"
const BundleSizePlugin = require("../src/plugin/BundleSizePlugin")
const commonConfig = require("./common")
module.exports = merge(commonConfig, {
  mode: "development",
  // mode: "production",
  entry: {
    index: "./src/index.js"
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js"
  },

  plugins: [
    new BundleSizePlugin({
      sizeLimit: 1.1
    })
  ]
})
