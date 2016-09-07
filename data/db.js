var fs = require('fs')
var path = require('path')

var file = path.join(__dirname, 'blog-entries.json')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}

function getTitles (callback) {
  fs.readFile(file, function (err, contents) {
    if (err) {
      return callback(err)
    }
    var entries = JSON.parse(contents)
    callback(null, entries)
  })
}

function getEntry (id, callback) {
  fs.readFile(file, function (err, contents) {
    if (err) {
      return callback(err)
    }
    var entries = JSON.parse(contents)
    var entry = entries.filter(function (entry) {
      return entry.id === id
    })[0]
    callback(null, entry)
  })
}

function saveEntry (entry) {

}
