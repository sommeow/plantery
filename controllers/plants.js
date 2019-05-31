const User = require('../models/user');
const Plant = require('../models/plant');
const Greenhouse = require('../models/greenhouse');

module.exports = {
  indexPlant,
  newPlant,
  showPlant,
  createPlant,
  deletePlant,
  tendPlant,
};


function newPlant(req, res) {
  res.render('plants/new', {user: req.user});
}

function createPlant(req, res) {
  var plant = new Plant(req.body);
  plant.save(function(err) {
      // one way to handle errors
      if (err) return res.send(err);
      res.redirect('/plants');
  });
}


function showPlant(req, res) {
  Plant.findById(req.params.id, function (err, plant) {
    if (err) return res.send(err);
      res.render('plants/show', {user: req.user, plant});
    })
  };

  function deletePlant(req ,res) {
    Plant.findByIdAndDelete(req.params.id, function(err, plant){
      if (err) return res.redirect('/plants/');
      res.redirect('/plants');
    });
  }

  function tendPlant(req,res) {
    Plant.findById(req.params.id, function (err, plant) {
      plant.stats = req.body.stats
      plant.save()
      .then(result => {
        res.redirect(`/plants/${req.params.id}`)
      })
      .catch(error => console.log(error))
      
    });
  }


function indexPlant(req, res) {
  Plant.find({}, function(err, plants) {
    res.render('plants/index', {
      user: req.user, plants
    })
  })
}