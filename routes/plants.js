var express = require('express');
var router = require('express').Router();
var plantsCtrl = require('../controllers/plants');

router.get('/plants', plantsCtrl.indexPlant);

router.get('/greenhouses/plants', plantsCtrl.newPlant);

// router.post('/update/:id', isLoggedIn, plantsCtrl.tendPlant);

router.get('/greenhouses/:id/plants', plantsCtrl.showPlants);

router.post('/greenhouses/plants', plantsCtrl.createPlant);

router.delete('/greenhouses/:id/plants',plantsCtrl.deletePlant);

module.exports = router;
