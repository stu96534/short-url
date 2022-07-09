const express = require('express')

const route = express()
const getNumber = require('./getNumber')


route.get('/', (req, res) => {
  res.render('index')
})

module.exports = route