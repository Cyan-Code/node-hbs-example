require('dotenv').config()
const express = require('express');
const hbs = require('hbs')

const app = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico Middelwares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Luis Carrion',
    titulo: 'Curso Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Luis Carrion',
    titulo: 'Curso Node '
  })
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Luis Carrion',
    titulo: 'Curso Node '
  })
});

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(process.env.PORT);
