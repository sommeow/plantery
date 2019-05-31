const User = require('../models/user');
const Plant = require('../models/plant');
const Greenhouse = require('../models/greenhouse');
const Nursery = require('../models/nursery');

module.exports = {
    index,
    newGh,
    showGh,
    createGh,
    deleteGh,
    editGh,
    updateGh
  };

  function updateGh(req, res) {
    Greenhouse.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, greenhouse) {
        greenhouse.save(function(err) {
            if (err) return res.redirect('/greenhouses');
            res.redirect('/greenhouses')
        })
    })
  }

  function editGh(req, res) {
    Greenhouse.findById(req.params.id, function(err, greenhouse) {
        res.render('greenhouses/editGreenhouses', {greenhouse, user: req.user})
    })
  }

  function deleteGh(req, res) {
    Greenhouse.findByIdAndDelete(req.params.id, req.body, function(err, greenhouse) {
        greenhouse.save(function(err) {
            if(err) return res.redirect('/greenhouses');
            res.redirect('greenhouses')
        })
    })
  }

  function createGh(req, res) {
    var greenhouse = new Greenhouse(req.body);
    greenhouse.save(function(err) {
        if (err) return res.redirect('/greenhouses/newGreenhouses');
        res.redirect('/greenhouses')
    });
  }

  function showGh(req, res) {
    Greenhouse.findById(req.params.id)
    .populate('plants').exec(function(err, greenhouse) {
        Plant.find({_id: {$nin: greenhouse.plants}})
        .exec(function(err, plants) {
            res.render('greenhouses/showGreenhouses', {
                greenhouse, plants, user: req.usesr
            })
        })
    })
  }

  function newGh(req, res) {
      res.render('greenhouses/newGreenhouses', {user: req.user})
  }

  function index(req, res) {
    Greenhouse.find({}, function(err, greenhouse) {
        res.render('greenhouses/indexGreenhouses', {
            users,
            user: req.user, greenhouses,
            name: req.query.name
        });
    });
  }

