var db = require('./data/db')
//getting database file
module.exports = {
  getIndex: getIndex,
  getEntry: getEntry
}
//db files get s te module getTitles which generates callback
function getIndex (req, res) {
  db.getTitles(function (blogEntries) {
    var viewsm = {entries: blogEntries}
    res.render('home', viewsm)
  })
}

function getEntry (req, res) {
//>> code here
}
