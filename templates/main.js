// import html helper
var html = require('choo/html')

// import template
var animal = require('./animal')

// export function
module.exports = function (state, emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animalMap)}
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

  // map function
  function animalMap (obj, i) {
    var type = state.params.type

    if (type && type !== obj.type) {
      return // nothing
    } else {
      return animal(remove, obj, i)
    }
  }

  // add new animal to state
  function add (e) {
    var x = e.offsetX - 20
    var y = e.offsetY - 10

    emit('addAnimal', {x: x, y: y})
  }

  // remove animal from state
  function remove (e) {
    var index = e.target.id
    emit('removeAnimal', index)
  }
}
