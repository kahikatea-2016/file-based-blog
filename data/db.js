var fs = require('fs')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}

function getTitles (callback) {
  fs.readFile('./data/blog-entries.json', function (err, json) {
    var blogEntries = JSON.parse(json)
    callback(null, blogEntries)
  })

}

function getEntry (id) {

}

function saveEntry (entry) {

}
