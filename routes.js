var db = require('./data/db')
var path = require('path')

module.exports = {
  getIndex: getIndex,
  getPosts: getPosts,
  newPost: newPost
}

function getIndex (req, res) {
  db.getTitles(function (err, entries) {
    var vm = {entries: entries}
    res.render('home', vm)
  })
}

function getPosts (req, res) {
  db.getEntry(function (err, entries) {
    var vm = {entries: entries}
    res.render('entry', vm)
  })
  }

function newPost (req, res) {
    res.sendFile(path.join(__dirname, 'views/new.hbs'))
  }
