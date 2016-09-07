var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  getEntry: getEntry
}

function getIndex (req, res) {
  db.getTitles(function (err, data) {
    if (err) {
      console.error(err.message)
    }
    res.render('home', data)
  })
}

function getEntry (req, res) {

}
