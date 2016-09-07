var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  getEntry: getEntry,
  postNew: postNew,
  createBlog: createBlog
}

function getIndex (req, res) {
  db.getTitles(function (err, data) {
    if (err) {
      console.error(err.message)
    }
    var vm = {blogsFile: data}
    res.render('home', vm)
  })
}

function getEntry (req, res) {
  var id = parseInt(req.params.id)
  db.getBlog(id, function (err, blogEntry) {
    if (err) {
      console.error(err.message)
    }
      res.render('entry', blogEntry)
  })
}

function postNew (req, res) {
  res.render('new')
}

function createBlog (req, res) {
  db.saveEntry(req.body, function (err) {
    res.redirect('/')
  })
}
