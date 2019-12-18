const merge = require("webpack-merge")
const path = require("path")
const srcRoot = "./src"
const commonConfig = require("./common")
module.exports = merge(commonConfig, {
  mode: "development",
  // mode: "production", 
  // 输入配置
  // entry: ["./src/index.tsx", './src/test.js'],
  entry: {
    // index: "./src/index.tsx",
    test: "./src/Bingo.js",
    schemaform: "./src/Form/Form.tsx"
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  }
})
