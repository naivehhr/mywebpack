class ListenPlugin {
  apply(compiler) {
    //监听自定义的mainPlugin被触发后，执行对应的函数，输出data.text
    compiler.hooks.mainPlugin.tap("listenPlugin", data => {
      console.log(data.text)
    })
  }
}
module.exports = ListenPlugin
