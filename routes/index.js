var router = require('express').Router();
var passport = require('passport');

// get HOME PAGE
router.get('/', function(req, res) {
  res.redirect('/users');
});

router.get('/', isLoggedIn, function(req, res) {
  res.render('/dashboards', {
    user: req.user
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

    res.redirect('/');
}

module.exports = router;