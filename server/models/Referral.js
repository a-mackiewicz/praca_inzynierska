const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let referralSchema = new Schema({
  patientId: {
    type: String
  },
  type: {
    type: String
  },
  date: {
    type: String
  },
  text: {
    type: String
  },
  image: {
    type: Array
  },
}, {
  collection: 'referrals'
})

module.exports = mongoose.model('Referral', referralSchema)