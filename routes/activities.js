var express = require('express');
var router = express.Router();

const{newActivity, readActivities} = require('../controllers/activity')

router.post('/', newActivity)
router.get('/', readActivities)

module.exports = router;
