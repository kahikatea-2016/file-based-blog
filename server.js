var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var PORT = 3000
var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.get('/', routes.getIndex)


app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
