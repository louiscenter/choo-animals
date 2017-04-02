var html = require('choo/html')

module.exports = function (emit) {
  return html`
    <div class="controls">
      <label>animal</label>
      <input type="text" id="type" onkeyup=${ update } />

      <label>x</label>
      <input type="text" id="x" onkeyup=${ update } />

      <label>y</label>
      <input type="text" id="y" onkeyup=${ update } />
    </div>
  `

  function update (e) {
    if (e.keyCode === 13) {
      emit('add')
    } else {
      var value = e.target.value
      var field = e.target.id
      emit('input', { value: value, field: field })
    }
  }
}
