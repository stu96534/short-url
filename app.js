const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const getNumber = require('./routes/modules/getNumber')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connectrd!')
})

app.get('/', (req, res) => {
  console.log(getNumber(5))
  res.render('new')
})

app.listen(port, () => {
  console.log(`this is listening: http://${port}`)
})