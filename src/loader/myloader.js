const { getOptions } = require("loader-utils")
// import {getOptions} from 'loader-utils'
module.exports = function(source) {
  const options = getOptions(this)
  // console.log("options", options)
  source = source.replace(/\[name\]/g, options.name)
  // console.log(source)
  return source
}
