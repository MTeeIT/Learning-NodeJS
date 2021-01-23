var low = require('lowdb');//data
var FileSync = require('lowdb/adapters/FileSync'); //adapter
var adapter = new FileSync('db.json'); //luu du lieu
db = low(adapter); // dung db truy xuat du lieu

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write();

  module.exports = db;