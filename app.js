const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const port = 3000

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connectrd!')
})

app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`this is listening: http://${port}`)
})