var db = require('./data/db')
//getting database file
module.exports = {
  getIndex: getIndex,
  getEntry: getEntry
}
//db files get s te module getTitles which generates callback
function getIndex (req, res) {
  db.getTitles(function (blogEntries) {
    var viewModel = {entries: blogEntries}
    //we created an object from array, var viewsm because res.render can only render object.
    res.render('home', viewModel)
  })
}

function getEntry (req, res) {
  //console.log(req.params.id)
  db.getEntry(req.params.id, function (err, blogEntry){
    if (err){
      res.send(err)
    }
    else {
      res.render('entry', blogEntry)
    }
  })

}
