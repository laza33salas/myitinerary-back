var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const{
    newUser, 
    readUsers,
    read,
    signUp,
    verifyMail,
    signIn, 
    signOut,
    signInToken
} = require('../controllers/users')


//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//}); 
router.post('/', newUser)
router.get('/', readUsers)
router.get('/:id', read)
router.post('/logout', signOut)
router.post('/signup', signUp)
router.post('/signin', signIn);
router.get('/verify/:code', verifyMail)
router.get('/token', passport.authenticate('jwt',{session:false}), signInToken)


module.exports = router;
