var path = require('path');
const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

const morgan = require('morgan')

// sass
var sass = require('node-sass');

const port = 3000

// static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('.hbs', handlebars( {
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
// set foder
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})