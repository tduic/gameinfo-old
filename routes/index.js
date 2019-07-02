const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');
const request = require('request');

const { body, validationResult } = require('express-validator');

const router = express.Router();
//const Player = mongoose.model('Player');
const Registration = mongoose.model('Registration');
//const Series = mongoose.model('Series');
//const Team = mongoose.model('Team');

// set up
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

// the following block shows how to make an api call
/*request('http://google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/

// get request
router.get('/', (req, res) => {
  res.render('home/index', { title: 'Registration form', data: null });
});

router.get('/design/:file', (req, res) => {
  res.render(req.url.slice(1), { title: 'Registration form', data: null });
});

router.get('/home/:file', (req, res) => {
  res.render(req.url.slice(1), { title: 'Registration form', data: null });
});

router.get('/shared/:file', (req, res) => {
  res.render(req.url.slice(1), { title: 'Registration form', data: null });
});

router.get('/sports/:file', (req, res) => {
  res.render(req.url.slice(1), { title: 'Registration form', data: null });
});

// post request with validation
router.post('/',
  [
    body('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save();
      Registration.find()
        .then((registrations) => {
          res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

module.exports = router;
