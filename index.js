var choo = require('choo')

var main = require('./components/main')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    { type: 'lion', x: 100, y: 200 },
    { type: 'crocodile', x: 300, y: 50 }
  ]

  // emitter handlers
  emitter.on('add', function (data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

    var type = Math.floor(Math.random() * 5)
    var x = data.x
    var y = data.y

    var obj = { type: animals[type], x: x, y: y }
    state.animals.push(obj)

    emitter.emit('render')
  })

  emitter.on('remove', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

// declare routes
app.route('/', main)
app.route('/filter/:type', main)

// start!
document.body.appendChild(app.start())

