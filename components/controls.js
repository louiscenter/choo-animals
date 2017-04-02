var html = require('choo/html')

module.exports = function (emit) {
  return html`
    <div class="controls">
      <button onclick=${ add }>new animal</button>

      <label>filters</label>
      <ul class="filters">
        <li><a href="/">all</a></li>
        <li><a href="/filter/crocodile">crododiles</a></li>
        <li><a href="/filter/koala">koalas</a></li>
        <li><a href="/filter/lion">lions</a></li>
        <li><a href="/filter/tiger">tigers</a></li>
        <li><a href="/filter/walrus">walruses</a></li>
      </ul>
    </div>
  `

  function add () {
    emit('add')
  }
}
