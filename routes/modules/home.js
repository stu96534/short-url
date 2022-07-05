const express = require('express')

const route = express()
const getNumber = require('./getNumber')


route.get('/', (req, res) => {
  console.log(getNumber(5))
  res.render('index')
})

module.exports = route