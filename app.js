//required packages in this project
const express = require('express')
//require express-handlebars
const exphbs = require('express-handlebars')
const app = express()
const port = 3000



//setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

//route settings
//首頁
app.get('/', (req, res) => {
  const title = {
    page: '首頁',
    active: { home: true }
  }
  res.render('index', title)
})

//About
app.get('/about', (req, res) => {
  const title = {
    page: 'About',
    active: { about: true }
  }
  res.render('index', title)
})

//Portfolio
app.get('/portfolio', (req, res) => {
  const title = {
    page: 'Portfolio',
    active: { portfolio: true }
  }
  res.render('index', title)
})

//Contact
app.get('/contact', (req, res) => {
  const title = {
    page: 'Contact',
    active: { contact: true }
  }
  res.render('index', title)
})

//start server
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
})