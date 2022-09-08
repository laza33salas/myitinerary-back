var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')
const commentRouter = require('./comments')
const userRouter = require('./users')
const activityRouter = require('./activities')
const itineraryRouter = require('./itineraries')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyItinerary' });
});

router.use('/cities', cityRouter) 
router.use('/comments', commentRouter)
router.use('/users', userRouter)
router.use('/activities', activityRouter)
router.use('/itineraries', itineraryRouter)

module.exports = router;