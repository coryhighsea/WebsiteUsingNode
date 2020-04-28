const express = require('express');
const app = express();

app.set('view engine', 'ejs');
process.env.PWD = process.cwd();

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/3d', (req, res) =>{
    res.render('3d');
});

app.get('/map', (req, res) =>{
    res.render('map');
});

app.get('/finance', (req, res) =>{
    res.render('finance');
});

app.get('/marrakech', (req, res) =>{
    res.render('marrakech');
});

app.get('/smallposts', (req, res) =>{
    res.render('smallposts');
});

app.get('/photogallery', (req, res) => {
    res.render('photogallery');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.use(express.static(process.env.PWD + '/public'));

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Cory High Sea server has started');
});