var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = 3000
var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', routes.getIndex)
app.get('/new', routes.newEntry)
app.get('/entry/:id', routes.getEntry)
app.post('/create', routes.createEntry)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
