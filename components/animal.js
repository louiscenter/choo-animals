var html = require('choo/html')

module.exports = function (emit, animal, i) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${remove}>
  `

  // remove animal from state
  function remove (e) {
    var index = e.target.id
    emit('remove', index)
  }
}
