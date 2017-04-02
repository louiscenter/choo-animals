var html = require('choo/html')

var animal = require('./animal')
var controls = require('./controls')
var filters = require('./filters')
var footer = require('./footer')

module.exports = function (state, emit) {
  return html`
    <div class="container" style="background: ${ state.background }">
      <header>choo animals</header>
      <div class="grass">
        ${ state.animals.map(showAnimals) }
      </div>
      ${ controls(emit) }
      ${ filters() }
      ${ footer() }
    </div>
  `

  function showAnimals (obj, i) {
    return animal(emit, obj, i)
  }
}
