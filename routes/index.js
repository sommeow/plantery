var express = require('express');
var router = require('express').Router();
var passport = require('passport');
var User = require('../models/user');

// The root route renders our view
router.get('/', function(req, res) {
  res.render('../views/index', {
    user: req.user
  })
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : './greenhouses/indexGreenhouses',
    failureRedirect : '../views/index'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;