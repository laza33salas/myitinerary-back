var express = require('express');
var router = express.Router();

const{newUser, readUsers, signUp} = require('../controllers/users')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.post('/', newUser)
router.post('signup', signUp)
router.get('/', readUsers)

module.exports = router;
