const User = require('../models/user');
const Plant = require('../models/plant');
const Greenhouse = require('../models/greenhouse');
const Nursery = require('../models/nursery');

module.exports = {
    addPlant,
    showPlant,
    delPlant,
    tendPlant,
    // visitNursery
  };

  function addPlant(req, res, next) {
    req.user.plant.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  }
  
  function showPlant(req, res, next) {
  
  }
  
  function delPlant(req, res, next) {
    User.findOne({'plant._id': req.params.id}, function(err, user) {
      user.plant.id(req.params.id).remove();
      user.save(function(err) {
        res.redirect('/users');
      });
    });
  }
  
  function tendPlant(req, res, next) {
    User.findByIdAndUpdate(req.params.id, function(err, plant) {
      if (err) return res.redirect('/users');
        console.log(plant);
        res.redirect('/users');
    });
  }