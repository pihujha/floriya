var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static('public'))
// login page
app.get('/', function(req, res) {
    res.render('pages/index');
});
// about page
app.get('/at', function(req, res) {
    res.render('pages/AT');
});
// about page
app.get('/d', function(req, res) {
    res.render('pages/d');
});
// about page
app.get('/paitients', function(req, res) {
    res.render('pages/paitients');
});
// about page
app.get('/s', function(req, res) {
    res.render('pages/s');
});

app.listen(3000);
console.log('3000 is the magic port');