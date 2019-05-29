const User = require('../models/user');
const Plant = require('../models/plant');
const Greenhouse = require('../models/greenhouse');
const Nursery = require('../models/nursery');

module.exports = {
  index,
  addPlant,
  showPlant,
  delPlant,
  tendPlant,
  buildGreenhouse,
  visitNursery
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', { users, name: req.query.name, sortKey });
  });
}

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

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

function buildGreenhouse(req, res, next) {

}

function visitNursery(req, res, next) {

}