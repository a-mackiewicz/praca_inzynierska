const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let examinationSchema = new Schema({
  teeth: {
    type: Array
  },
  breath: {
    type: String
  },
  joints: {
    type: String
  },
  bridle: {
    type: String
  },
  suction: {
    type: Boolean
  },
  clenching: {
    type: Boolean
  },
  grinding: {
    type: Boolean
  },
  spariness: {
    type: String
  },
  crowding: {
    type: String
  },
  diastema: {
    type: String
  },
  open: {
    type: String
  },
  deep: {
    type: String
  },
  class: {
    type: String
  },
  crossFront: {
    type: String
  },
  crossLateral: {
    type: String
  },
}, {
  collection: 'examinations'
})

module.exports = mongoose.model('Examination', examinationSchema)