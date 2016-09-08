function saveEntry (entry) {
//read file
// push the array
// stringfy the array
//save the file
  var file = path.join(__dirname, 'blog-entries.json')
  fs.readFile(file, function (err, contents){
  }
  if (err){
    callback(err.message)
  }
  // parse the file -- outputs an array
var array = JSON.parse(contents)
var stuffToAdd = array.push[]
// push the array
var newEntry = JSON.stringify(stuffToAdd)
// stringfy the array

fs.writefile(stuffToAdd, 'blog-entries.json', (err) => {
  if (err) throw error
  console.log('saved successfully')
  //save the file
  callback(here)
})
}

var file = path.join(__dirname, 'blog-entries.json')
fs.readFile(file, function (err, contents){
  var blogEntries = JSON.parse(contents)
  callback(blogEntries)
})
}

//   var stuffToAdd = []
//   var title = req.body.title
//   var contents = req.body.contents
//   stuffToAdd.push(title, contents)
//   fs.writefile(stuffToAdd, 'blog-entries.json', (err) => {
//     if (err) throw error
//     console.log('saved successfully')
//   })
// }
