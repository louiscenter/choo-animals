var html = require('choo/html')

module.exports = function (animal) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  return html`
    <img src="assets/${ type }.gif" style="top: ${ x }px; left: ${ y }px;">
  `
}
