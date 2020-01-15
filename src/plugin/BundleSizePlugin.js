const fs = require("fs")
const { resolve } = require("path")
const { info, warn, error } = require("prettycli")
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return {
    bundleSize: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
    fullSizeInfo:
      parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }
}
class BundleSizePlugin {
  constructor(options = {}) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap("BundleSizePlugin", stats => {
      info("======开始检测======")
      const { path, filename } = stats.compilation.options.output
      const bundlePath = resolve(path, filename)
      const { size } = fs.statSync(bundlePath)
      const { bundleSize, fullSizeInfo } = formatBytes(size)
      const { sizeLimit } = this.options
      if (bundleSize < sizeLimit) {
        info("bundle size ===", fullSizeInfo)
      } else {
        const msg = `bundle size 过大 ${fullSizeInfo} 限制为 ${sizeLimit}`
        if (bundleSize - sizeLimit < 0.5) {
          warn(msg)
        } else {
          error(msg)
        }
      }
      info("======检测结束======")

    })
  }
}
module.exports = BundleSizePlugin
