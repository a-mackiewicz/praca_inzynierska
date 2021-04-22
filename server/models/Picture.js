const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pictureSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  patientId: {
    type: String
  },
  head: {
    type: String
  },
  files: {
    type: Array
  },
}, {
  collection: 'pictures'
})

module.exports = mongoose.model('Picture', pictureSchema)