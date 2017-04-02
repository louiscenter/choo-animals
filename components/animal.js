var html = require('choo/html')

module.exports = function (emit, animal, i) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  return html`
    <img src="/assets/${ type }.gif" style="top: ${ x }px; left: ${ y }px;" data-id=${ i } onclick=${ remove }>
  `

  function remove (e) {
    var index = e.target.dataset.id
    emit('remove', index)
  }
}
