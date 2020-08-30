const express = require('express');

const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

app.set('view engine', 'hbs');

//Helpers

app.get('/', (req, res) => {

    res.render('home', { nombre: 'Rousseau' });

});

app.get('/about', (req, res) => {
    res.render('about', { nombre: 'Rousseau' });
});

app.get('/data', (req, res) => {

    res.send('Hola data');


});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});