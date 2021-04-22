const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let interviewSchema = new Schema({
  allergy: {
    type: String
  },
  laryngology: {
    type: String
  },
  breath: {
    type: String
  },
  snore: {
    type: String
  },
  epilepsy: {
    type: String
  },
  hypertension: {
    type: String
  },
  diabetes: {
    type: String
  },
  blood: {
    type: String
  },
  ort_after: {
    type: String
  },
  damage: {
    type: String
  },
  malocclusion: {
    type: String
  },
}, {
  collection: 'interviews'
})

module.exports = mongoose.model('Interview', interviewSchema)