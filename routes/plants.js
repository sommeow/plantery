var express = require('express');
var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.addPlant);
router.get('/:id', plantsCtrl.showPlant);
router.post('/', plantsCtrl.create);
// router.post('/:id', foodCtrl.updateFood);
router.delete('/:id', plantsCtrl.deletePlant);

module.exports = router;
