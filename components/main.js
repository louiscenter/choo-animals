var html = require('choo/html')

var animal = require('./animal')
var controls = require('./controls')
var footer = require('./footer')

module.exports = function (state, emit) {
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(showAnimals)}
      </div>
      ${controls(emit)}
      ${footer()}
    </div>
  `

  function add (e) {
    var x = e.offsetY - 10
    var y = e.offsetX - 20

    emit('add', {x: x, y: y})
  }

  function showAnimals (obj, i) {
    var type = state.params.type
    if (type) {
      if (type === obj.type) {
        return animal(emit, obj, i)
      }
    } else {
      return animal(emit, obj, i)
    }
  }
}
