var choo = require('choo')
var html = require('choo/html')

var main = require('./components/main')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    { type: 'lion', x: 100, y: 200 },
    { type: 'crocodile', x: 300, y: 50 }
  ]

  state.input = { type: '', x: 0, y: 0 }

  // emitter handlers
  emitter.on('input', function (data) {
    var value = data.value
    var field = data.field

    state.input[field] = value
  })

  emitter.on('add', function () {
    var animal = state.input
    var type = animal.type
    var x = animal.x
    var y = animal.y

    var obj = { type: type, x: x, y: y }
    state.animals.push(obj)

    emitter.emit('render')
  })

  emitter.on('delete', function () {
    // do something
  })
})

// declare routes
app.route('/', main)

// start!
document.body.appendChild(app.start())
