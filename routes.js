var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  getEntry: getEntry
}

function getIndex (req, res) {
  db.getTitles(function (err, entries) {
    var vm = {entries: entries}
    res.render('home', vm)
  })
}

function getEntry (req, res) {

}
