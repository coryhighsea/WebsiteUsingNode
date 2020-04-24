const express = require('express');
const app = express();

app.set('view engine', 'ejs');
process.env.PWD = process.cwd();

app.get('/', (req, res) => {
    res.render('landing');
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Cory High Sea server has started');
})