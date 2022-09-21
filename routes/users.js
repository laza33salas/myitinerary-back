var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const{
    newUser, 
    readUsers,
    signUp,
    verifyMail,
    signIn, 
    signOut,
    verifyToken
} = require('../controllers/users')


//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//}); 
router.post('/', newUser)
router.get('/', readUsers)
router.post('/logout', signOut)
router.post('/signup', signUp)
router.post('/signin', signIn);
router.get('/verify/:code', verifyMail)
router.get('/token', passport.authenticate('jwt',{session:false}), verifyToken)


module.exports = router;
