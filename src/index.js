const path = require('path');
const express = require('express')

const app = express()

const handlebars = require('express-handlebars')

const morgan = require('morgan')

// import controllers news

const news = require('./app/controllers/Newcontroller')

// import roures index

const route = require('./routes');

// sass
var sass = require('node-sass');

const port = 3000

// static file
app.use(express.static(path.join(__dirname, 'public')));

// middleware cho form data do không có trong body của method: POST
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('.hbs', handlebars( {
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
// set foder
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})