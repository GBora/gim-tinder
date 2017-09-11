const express = require('express');
const app = express();

var port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

const routes = require('./routes.js');

app.use(routes);

app.listen(port, () => {
    console.log('app listening on port: ', port);
})