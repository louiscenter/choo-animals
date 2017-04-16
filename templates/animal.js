// import html helper
var html = require('choo/html')

// export function
module.exports = function (onclick, animal, i) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${onclick}>
  `
}
