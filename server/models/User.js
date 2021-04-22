const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  login: {
    type: String
  },
  password: {
    type: String
  },
  work: {
    type: Array
  },
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)