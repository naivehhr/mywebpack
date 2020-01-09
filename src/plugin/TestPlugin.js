const fs = require("fs")
class TestPlugin {
  constructor(options = {}) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      // console.log("TestPlugin",compilation.assets)
      let template = fs.readFileSync(this.options.template, "UTF-8")
      compilation.assets[this.options.filename || "test.js"] = {
        source: function() {
          return template
        },
        size: function() {
          return template.length
        }
      }
      // 这里是新加的
      let source = compilation.assets["index.html"].source()
      source = source.replace(
        /<\/(.*?)>(.*?)<\/body>$/m,
        `</$1><script src="${this.options.filename ||
          "test.js"}"></script></body>`
      )

      console.log(source)
      compilation.assets["index.html"] = {
        source: function() {
          return source
        },
        size: function() {
          return source.length
        }
      }

      callback()
    })
  }
}
module.exports = TestPlugin
