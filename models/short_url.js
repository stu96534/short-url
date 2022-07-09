const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortSchema = new Schema({
  RanderNumber: {
    type: String,
    required: true
  },
  originalURL: {
    type: String,
    required: true
  },
  fault: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('shortURL', shortSchema)