var express = require('express');
var router = express.Router();
const app = express()


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index');
 });
router.get('/profile', function(req, res, next) {
  res.render('users/profile');
});
router.get('/about', function(req, res, next) {
  res.render('users/about');
});
router.get('/profile', function(req, res, next) {
  res.render('users/contact');
});



module.exports = router;
