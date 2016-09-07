var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getBlog: getBlog,
  saveEntry: saveEntry
}

var blogsFile = path.join(__dirname, 'blog-entries.json')

function getTitles (cb) {
  fs.readFile(blogsFile, function (err, buffer) {
    if (err) {
      return cb(err)
    }
    var entryJson = buffer.toString()
    cb(null, JSON.parse(entryJson))
  })
}

function getBlog (id, cb) {
  fs.readFile(blogsFile, function (err, buffer) {
    if (err) {
      return cb(err)
    }
    var entries = JSON.parse(buffer)
    var entry = entries.filter(function (item) {
      return item.id === id
    })[0]
    cb(null, entry)
  })
}

function saveEntry (entry) {
//   fs.writeFile(newFile, newJson, function (err) {
//     if (!err) {
//       verifyExists(newFile)
//     }
//   })
// }
// function verifyExists (newFile) {
//   fs.exists(newFile, function(exists) {
//     console.log(newFile, 'exists:', exists)
// })
}
