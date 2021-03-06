const express = require('express')
const route = express()
const getNumber = require('./getNumber')
const shortURL = require('../../models/short_url')


//setting new page
route.get('/:RanderNumber/new', (req, res) => {
  let RanderNumber = req.params.RanderNumber
  return shortURL.find()
    .lean()
    .then(shortURLlist => {
      const shorturl = shortURLlist.find(list => {
        return list.RanderNumber.includes(RanderNumber)
      })
      res.render('new', { shortURLlist: shorturl })
    })
    .catch(error => console.error(error))
})

// add url
route.post('/', (req, res) => {
  let RanderNumber = getNumber(5)
  let originalURL = req.body.URL
  return shortURL.find()
    .lean()
    .then(shortURLlist => {
      const shorturl = shortURLlist.find(list => {
        return list.originalURL.includes(originalURL)
      })
      if (shorturl) {
        // if same URL redirect same short url
        res.redirect(`/enginejack/${shorturl.RanderNumber}/new`)
      } else {
        // if new URL create new url
        shortURL.create({ RanderNumber, originalURL }).then(() => res.redirect(`/enginejack/${RanderNumber}/new`))
      }
    })
    .catch(error => console.error(error))

})

//connect url
route.get('/:RanderNumber', (req, res) => {
  let RanderNumber = req.params.RanderNumber
  return shortURL.find()
    .lean()
    .then(shortURLlist => {
      const shorturl = shortURLlist.find(list => {
        return list.RanderNumber.includes(RanderNumber)
      })

      res.redirect(shorturl.originalURL)
    })
    .catch(error => console.error(error))
})

module.exports = route