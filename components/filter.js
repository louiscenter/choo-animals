var html = require('choo/html')

var animal = require('./animal')
var controls = require('./controls')
var footer = require('./footer')

module.exports = function (state, emit) {
  var type = state.params.type

  return html`
    <div class="container" style="background: ${ state.background }">
      <header>filter: ${ type }</header>
      <div class="grass">
        ${ state.animals.map(showAnimals) }
      </div>
      ${ controls(emit) }
      ${ footer() }
    </div>
  `

  function showAnimals (obj, i) {
    if (type === obj.type) { return animal(emit, obj, i) }
  }
}
