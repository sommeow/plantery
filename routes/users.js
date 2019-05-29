var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /plants
router.get('/users', usersCtrl.index);
router.get('/:id', usersCtrl.buildGreenhouse);

// // POST /facts
// // We will already have access to the logged in student on
// // the server, therefore do not use: /plants/:id/facts
// router.post('/users/plants', isLoggedIn, usersCtrl.addPlant);

// // DELETE /facts/:id
// router.delete('/users/:id', usersCtrl.delPlant);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;