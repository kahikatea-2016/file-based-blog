var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}
// entries into object form/parsing into json file, returning values of the callback
function getTitles (callback) {
  var file = path.join(__dirname, 'blog-entries.json')
  fs.readFile(file, function (err, contents){
    var blogEntries = JSON.parse(contents)
    callback(blogEntries)
  })
}

function getEntry (id) {

}

function saveEntry (entry) {

}
