const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  URL: {
    type: String,
    required: true
  }
})

module.exports('shortURL', shortSchema)