var express = require('express');
var router = express.Router();

const{newUser, readUsers, signUp, verifyMail,signIn} = require('../controllers/users')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 

router.post('/', newUser)
router.post('signup', signUp)
router.post('/signin', signIn);
router.get('/', readUsers)
router.get('/verify/:code', verifyMail)

module.exports = router;
