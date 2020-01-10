const { getOptions } = require("loader-utils")

const group = {
  "cc(GBL05A)": {
    light: "yellow",
    dark: "green"
  }
}

module.exports = function(source) {
  const options = getOptions(this)
  source = source.replace(/cc\(.*\)/g, d => {
    return group[d].light
  })
  source = `${source} html[data-theme='dark'] .aran { background-color: green; }`
  console.log(source)
  return source
}
