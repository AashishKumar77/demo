var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
   userName: {
      type: String,
      required:true
   },
   password: {
      type: String,
      required:true
   },
   token:{
      type: String,
   }
},{
   versionKey: false, // You should be aware of the outcome after set to false
   timestamps: true
});

var user = mongoose.model('user', user);
module.exports = user;