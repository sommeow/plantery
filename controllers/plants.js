const User = require('../models/user');
const Plant = require('../models/plant');
const Greenhouse = require('../models/greenhouse');
const Nursery = require('../models/nursery');

module.exports = {
  index,
  addPlant,
  create,
  showPlant,
  delPlant,
  // tendPlant,
  };

  async function addPlant(req, res) {
    const greenhouses = await Greenhouse.find({});
    res.render('plants/new', { title: 'Add New Plant', greenhouses });
  };

  async function create(req, res) {
    console.log(req.body);
    const plant = await new Plant({ 
      plant: req.body.plant,
      light: req.body.light,
      water: req.body.water,
      soil: req.body.soil,
      pot: req.body.pot,
      petfriendly: req.body.petfriendly
    }).save();
    res.redirect('/plants');
}

  async function showPlant(req, res) {
    const plant = await Plant.findById(req.params.id).populate('greenhouse');
    res.render('plants/show', { plant });
  };
  
  function delPlant(req, res) {
    Food.findByIdAndDelete(req.params.id, function(err, plant){
      if (err) return res.redirect('/plants');
        console.log(plant);
      res.redirect('/plants');
    });
  };
  
  // function tendPlant(req, res, next) {
  //   User.findByIdAndUpdate(req.params.id, function(err, plant) {
  //     if (err) return res.redirect('/users');
  //       console.log(plant);
  //       res.redirect('/users');
  //   });
  // }