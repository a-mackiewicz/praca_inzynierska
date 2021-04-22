const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let patientSchema = new Schema({
  picture: {
    type: String
  },
  doctorId: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  },
  phone: {
    type: Number
  },
  state: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  birth_date: {
    type: String
  },
  start_date: {
    type: String
  },
  pesel: {
    type: Number
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
  zip_code: {
    type: String
  },
  city: {
    type: String
  },
  password: {
    type: String
  },
  message: {
    type: String
  },
}, {
  collection: 'patients'
})

module.exports = mongoose.model('Patient', patientSchema)