const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

// use pug files in views for layout
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = path.join(__dirname, 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
