var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  getEntry: getEntry,
  createEntry: createEntry,
  newEntry: newEntry
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

function newEntry (req, res) {
  res.render('new')
}

function createEntry (req, res) {
  var entry = req.body
  db.saveEntry(entry, function (err) {
    if (err) {
      return res.sendStatus(500)
    }
    res.redirect('/')
  })
}
