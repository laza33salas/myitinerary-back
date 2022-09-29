var express = require('express');
var router = express.Router();

const {newComment, readComments} = require('../controllers/comments')


router.post('/', newComment)
router.get('/', readComments)

module.exports = router;
