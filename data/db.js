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

function getEntry (id, callback) {
  var file = path.join(__dirname, 'blog-entries.json')
  fs.readFile(file, function (err, contents)
    {
      if (err){
        callback(err.message)
      }
      var blogEntry = JSON.parse(contents)
      callback(null, blogEntry[id-1])
  })
}

function saveEntry (entry, callback) {
  var file = path.join(__dirname, 'blog-entries.json')
  fs.readFile(file, function (err, contents){
    if (err){
      return callback(err.message)
    }
    var array = JSON.parse(contents)
    array.push(entry)
    var entries = JSON.stringify(array)

    fs.writeFile(file, entries, function (err){
      callback(err)
    })
  })
}


// put everything in a readfile
