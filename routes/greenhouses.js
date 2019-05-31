var router = require('express').Router();
var greenhousesCtrl = require('../controllers/greenhouses');

router.get('/index', greenhousesCtrl.index);
router.get('/greenhouses/newGreenhouses', isLoggedIn, greenhousesCtrl.newGh);
router.get('/greenhouses/:id', greenhousesCtrl.showGh);
router.post('/greenhouses', greenhousesCtrl.createGh);
router.delete('/greenhouses/:id', greenhousesCtrl.deleteGh);
router.get('/greenhouses/:id/editGreenhouses', greenhousesCtrl.editGh);
router.put('/greenhouses/:id', greenhousesCtrl.updateGh);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;