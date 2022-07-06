const short_url = require('../short_url')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    short_url.create({ RanderNumber: `name-${i}`, originalURL: `original-${i}` })
  }
  console.log('done.')
})