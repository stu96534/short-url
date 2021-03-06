const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')



const app = express()
require('./config/mongoose')
const route = require('./routes/index')
const port = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(route)





app.listen(port, () => {
  console.log(`this is listening: http://localhost:${port}`)
})