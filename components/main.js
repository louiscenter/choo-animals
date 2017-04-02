var html = require('choo/html')
var animal = require('./animal')

module.exports = function (state, emit) {
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(showAnimals)}
      </div>
      <div class="controls">
        <ul class="filters">
          <li><a href="/">all</a></li>
          <li><a href="/filter/crocodile">crododiles</a></li>
          <li><a href="/filter/koala">koalas</a></li>
          <li><a href="/filter/lion">lions</a></li>
          <li><a href="/filter/tiger">tigers</a></li>
          <li><a href="/filter/walrus">walruses</a></li>
        </ul>
      </div>
      <footer>
        made by <a href="https://twitter.com/louiscenter">@louiscenter</a> with <a href="https://github.com/yoshuawuyts/choo">choo</a>
      </footer>
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
