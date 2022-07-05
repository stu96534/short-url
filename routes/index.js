const express = require('express')
const route = express()

const home = require('./modules/home')

route.use('/', home)

module.exports = route