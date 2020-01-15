const { getOptions } = require("loader-utils")

module.exports = function(source) {
  const { themeConfig = {} } = getOptions(this)
  source = source.replace(/(\.[\w|\s]*\{[^\{\}]*\})/g, d => {
    if (/cc\(.*\)/.test(d)) {
      return (
        d.replace(/cc\(.*\)/, k => themeConfig[k].light) +
        "\nhtml[data-theme='dark'] " +
        d.replace(/cc\(.*\)/, k => themeConfig[k].dark)
      )
    } else {
      return d
    }
  })
  return source
}
