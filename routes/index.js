const express = require('express')
const route = express()

const home = require('./modules/home')
const newURL = require('./modules/enginejack')

route.use('/', home)
route.use('/enginejack', newURL)

module.exports = route