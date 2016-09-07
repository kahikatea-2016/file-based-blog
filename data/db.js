var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getBlog: getBlog,
  saveEntry: saveEntry
}

var blogsFile = path.join(__dirname, 'blog-entries.json')

function getTitles(cb) {
  fs.readFile(blogsFile, function (err, buffer) {
    if (err) {
      return cb(err)
    }
    var entryJson = buffer.toString()
    cb(null, JSON.parse(entryJson))
  })
}

function getBlog(id, cb) {
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

function saveEntry(entry, callback) {
  // read the file
  fs.readFile(blogsFile, function (err, buffer) {
      if (err) {
        return cd(err)
      }
      var entries = JSON.parse(buffer)
      entry.id = entries.length + 1
      entries.push(entry)
      var jsonString = JSON.stringify(entries)

      fs.writeFile(blogsFile, jsonString, function (err) {
        callback(err)
        console.log("all done")
      })
    })
    // JSON.parse
    // push the entry onto entries
    // JSON.stringify
    // write the file
}
