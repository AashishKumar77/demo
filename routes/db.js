var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user');
var con = mongoose.connection;
con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', function callback () {
  console.log("connected");
  con.collection('user', function(err, collection) {
    console.log(collection);
  });
});

module.exports = con;