var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}

function getTitles (cb) {
  var blogsFile = path.join(__dirname, 'blog-entries.json')
  fs.readFile(blogsFile, function (err, buffer) {
    if (err) {
      return cb(err)
    }
    var entryJson = buffer.toString()
    cb(null, JSON.parse(entryJson))
  })
}

function getEntry (id) {

}

function saveEntry (entry) {

}
