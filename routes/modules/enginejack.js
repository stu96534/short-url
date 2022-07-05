const express = require('express')
const route = express()
const getNumber = require('./getNumber')
const shortURL = require('../../models/short_url')


route.get('/', (req, res) => {
  console.log(getNumber(5))
  shortURL.find()
    .lean()
    .then(shortURL => console.log(shortURL))

  return res.render('new')
})

route.post('/', (req, res) => {
  let RanderNumber = getNumber(5)
  let originalURL = req.body.URL

  return shortURL.create({ RanderNumber, originalURL }).then(() => res.redirect('/enginejack'))

})

module.exports = route