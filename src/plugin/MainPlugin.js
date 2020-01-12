const { SyncHook } = require("tapable")

class MainPlugin {
  apply(compiler) {
    //在hooks上自定义一个名为mainPlugin的钩子
    compiler.hooks.mainPlugin = new SyncHook(["data"])

    //在webpack的environment事件触发时，广播自定义的mainPlugin事件，并传参
    compiler.hooks.environment.tap("mainPlugin", compilation => {
      compiler.hooks.mainPlugin.call({
        text: "MainPlugin Call"
      })
    })
  }
}

module.exports = MainPlugin
