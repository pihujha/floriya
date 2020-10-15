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
app.get('/dashboard', function(req, res) {
    res.render('pages/dashboard');
});
// about page
app.get('/paitients', function(req, res) {
    res.render('pages/paitients');
});
// about page
app.get('/schedeule', function(req, res) {
    res.render('pages/schedeule');
});

app.listen(3000);
console.log('3000 is the magic port');