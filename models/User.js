const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
},
{
  timestamps: true
});



module.exports = mongoose.model('User', userSchema);