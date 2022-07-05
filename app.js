const express = require('express')
const exphbs = require('express-handlebars')



const app = express()
require('./config/mongoose')
const route = require('./routes/index')
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(route)





app.listen(port, () => {
  console.log(`this is listening: http://${port}`)
})