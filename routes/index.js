var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyItinerary' });
});

router.use('/events', cityRouter) 

module.exports = router;