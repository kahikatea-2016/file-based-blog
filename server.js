var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var port = process.env.PORT || 3000
var app = express()
app.use(bodyParser.urlencoded())

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

// Routes
app.get('/', routes.getIndex)
app.get('/entry/:id', routes.getEntry)
app.get('/new', routes.postNew)
app.post('/create', routes.createBlog)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
