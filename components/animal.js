var html = require('choo/html')

module.exports = function (emit, animal, i) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" data-id=${i} onclick=${remove}>
  `

  // remove animal from state
  function remove (e) {
    var index = e.target.dataset.id
    emit('remove', index)
  }
}
