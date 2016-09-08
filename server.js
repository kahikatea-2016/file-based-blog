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
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

// Routes
app.get('/', routes.getIndex)
//app.get('/', routes.getEntry)

app.get('/entries/:id', routes.getEntry)
//id defined here, used by routes

app.get('/new', routes.newEntry)

app.post('/createBlog', routes.saveEntry)


//app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
