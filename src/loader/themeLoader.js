const { getOptions } = require("loader-utils")

// const group = {
//   "cc(GBL05A)": {
//     light: "yellow",
//     dark: "green"
//   }
// }

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
  // console.log(source)
  return source
}
