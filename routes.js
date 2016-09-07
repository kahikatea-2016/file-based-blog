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
  var id = Number(req.params.id)
  db.getEntry(id, function (err, entry) {
    if (!entry) {
      return res.sendStatus(404)
    }
    res.render('entry', entry)
  })
}
