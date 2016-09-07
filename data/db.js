var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}

function getTitles (callback) {
  var file = path.join(__dirname, 'blog-entries.json')
  fs.readFile(file, function (err, contents) {
    if (err) {
      return callback(err)
    }
    var entries = JSON.parse(contents)
    callback(null, entries)
  })
}

function getEntry (id) {

}

function saveEntry (entry) {

}
