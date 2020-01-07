const { getOptions } = require("loader-utils")

const group = {
  "cc(GBL05A)": "yellow"
}

module.exports = function(source) {
  const options = getOptions(this)
  source = source.replace(/cc\(.*\)/g, d => {
    return group[d]
  })
  console.log(source)
  return source
}
