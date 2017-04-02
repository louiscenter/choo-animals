var html = require('choo/html')
var animal = require('./animal')
var controls = require('./controls')

module.exports = function (state, emit) {
  return html`
    <div class="container">
      <header>choo animals</header>
      <div class="grass">
        ${ state.animals.map(showAnimals) }
      </div>
      ${ controls(emit) }
      <footer>
        made by <a href="https://github.com/louiscenter">@louiscenter</a>
      </footer>
    </div>
  `

  function showAnimals (obj) {
    return animal(obj)
  }
}
