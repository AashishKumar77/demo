var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var post = new Schema({
   title: {
      type: String,
      required:true
   },
   description: {
      type: String,
   },
},{
   versionKey: false, // You should be aware of the outcome after set to false
   timestamps: true
});

var post = mongoose.model('post', post);
module.exports = post;