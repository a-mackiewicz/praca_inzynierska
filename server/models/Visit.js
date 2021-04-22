const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let visitSchema = new Schema({
  patientId: {
    type: String
  },
  allergy: {
    type: String
  },
  date: {
    type: Array
  },
  hour: {
    type: String
  },
  duration: {
    type: Number
  },
  cost: {
    type: Number
  },
  paid: {
    type: Number
  },
  description: {
    type: String
  },
  state: {
    type: String
  },
}, {
  collection: 'visits'
})

module.exports = mongoose.model('Visit', visitSchema)