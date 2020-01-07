class WebpackCleanupPlugin {
  // 构造函数
  constructor(options) {
    console.log("WebpackCleanupPlugin", options)
  }
  // 应用函数
  apply(compiler) {
    console.log(compiler)
    // 绑定钩子事件
    compiler.plugin("done", compilation => {
      console.log(compilation)
    })
  }
}

module.exports = WebpackCleanupPlugin
