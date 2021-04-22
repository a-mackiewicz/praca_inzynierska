const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  city: {
    type: String
  },
  street: {
    type: String
  },
  property: {
    type: String
  },
  premises: {
    type: String
  },
}, {
  collection: 'settings'
})

module.exports = mongoose.model('Settings', userSchema)