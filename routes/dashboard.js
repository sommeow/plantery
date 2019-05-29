var router = require('express').Router();
var passport = require('passport');

router.get('/', (req, res) => {
    res.render('/dashboard');
  });

module.exports = router;
