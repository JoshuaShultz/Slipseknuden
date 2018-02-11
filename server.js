var express = require('express')
    , http = require('http')
    , path = require('path');
var app = express();

var fs = require('fs');

footer = require('./configs/footer.json');
about = require('./configs/about.json');
garanti = require('./configs/garanti.json');
produkter = require('./configs/produkter.json');


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('pages/index', {

    });
});
app.get('/about', function (req, res) {
    res.render('pages/about', {

    });
});
app.get('/garanti', function (req, res) {
    res.render('pages/garanti', {

    });
});
app.get('/contact', function (req, res) {
    res.render('pages/contact', {

    });
});

app.get('/nyheder', function (req, res) {
    res.render('pages/nyheder', {

    });
});

app.get('/produkter', function (req, res) {
    res.render('pages/produkter', {

    });
});

//Middleware
app.listen(3000);
console.log("http://localhost:3000");
