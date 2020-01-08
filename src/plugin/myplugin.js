class WebpackCleanupPlugin {
  // 构造函数
  constructor(options) {
    console.log("WebpackCleanupPlugin", options)
  }
  // 应用函数
  apply(compiler) {
    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      callback()
    })
    // console.log(compiler)
    // 绑定钩子事件

    // compiler.plugin("emit", compilation => {
    //   // console.log(compilation)

    //   console.log("emit")
    // })
    // compiler.plugin("done", compilation => {
    //   console.log(compilation)
    //   console.log("compilation")
    // })
    // compiler.hooks.emit.tapAsync(
    //   "MyExampleWebpackPlugin",
    //   (compilation, callback) => {
    //     console.log("This is an example plugin!")
    //     console.log(
    //       "Here’s the `compilation` object which represents a single build of assets:",
    //       compilation
    //     )

    //     // Manipulate the build using the plugin API provided by webpack
    //     compilation.addModule(/* ... */)

    //     callback()
    //   }
    // )

    // const reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)|(\/\*\*\*\*\*\*\/)/g
    // compiler.hooks.emit.tap("CodeBeautify", compilation => {
    //   Object.keys(compilation.assets).forEach(data => {
    //     let content = compilation.assets[data].source() // 欲处理的文本
    //     // console.log('content', data)
    //     content = content.replace(reg, function(word) {
    //       // 去除注释后的文本
    //       return /^\/{2,}/.test(word) ||
    //         /^\/\*!/.test(word) ||
    //         /^\/\*{3,}\//.test(word)
    //         ? ""
    //         : word
    //     })
    //     compilation.assets[data] = {
    //       source() {
    //         return content
    //       },
    //       size() {
    //         return content.length
    //       }
    //     }
    //   })
    // })
    // compiler.hooks.done.tap("Hello World Plugin", (
    //   stats /* stats is passed as argument when done hook is tapped.  */
    // ) => {
    //   console.log("Hello World!")
    // })

    // compiler.hooks.emit.tapAsync(
    //   "HelloAsyncPlugin",
    //   (compilation, callback) => {
    //     // Do something async...
    //     setTimeout(function() {
    //       console.log("Done with async work...")
    //       callback()
    //     }, 1000)
    //   }
    // )
    // compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
    //   // Create a header string for the generated file:
    //   var filelist = "In this build:\n\n"

    //   // Loop through all compiled assets,
    //   // adding a new line item for each filename.
    //   for (var filename in compilation.assets) {
    //     filelist += "- " + filename + "\n"
    //   }

    //   // Insert this list into the webpack build as a new file asset:
    //   compilation.assets["filelist.md"] = {
    //     source: function() {
    //       return filelist
    //     },
    //     size: function() {
    //       return filelist.length
    //     }
    //   }

    //   callback()
    // })

    // compiler.hooks.emit.tap("MyPlugin", compilation => {
    //   console.log("我会在生成资源到 output 目录之前执行")
    //   // 以下开始调用compilation钩子，当模块处在优化阶段开始时会执行以下回调
    //   compilation.plugin("optimize", function() {
    //     console.log("我在优化阶段开始时触发了")
    //   })
    // })
  }
}

module.exports = WebpackCleanupPlugin
