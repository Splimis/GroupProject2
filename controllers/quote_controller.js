var express = require('express');
var router = express.Router();
var quotations = require('../models/quotations.js');

router.get('/quotes', function(req, res) {
  quotations.selectAll(function(data) {
    var hbsObject = {
      quote: data
    };
    // console.log(hbsObject);
    res.render('quotes', hbsObject);
    // console.log(res);
  });
});

router.get('/', function(req, res) {
  quotations.selectRand(function(data) {
    var hbsObject = {
      quote: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
    // console.log(res);
  });
});

router.get('/rick', function(req,res) {
  quotations.selectRick(function(data) {
    var hbsObject = {
      quote: data
    };
     res.render('rick', hbsObject);
  });
});

router.get('/morty', function(req,res) {
  quotations.selectMort(function(data) {
    var hbsObject = {
      quote: data
    };
     res.render('morty', hbsObject);
  });
});

router.get('/jerry', function(req,res) {
  quotations.selectJerr(function(data) {
    var hbsObject = {
      quote: data
    };
     res.render('jerry', hbsObject);
  });
});

router.get('/beth', function(req,res) {
  quotations.selectBeth(function(data) {
    var hbsObject = {
      quote: data
    };
     res.render('beth', hbsObject);
  });
});

router.get('/admin', function(req,res) {
  quotations.selectBeth(function(data) {
    var hbsObject = {
      quote: data
    };
     res.render('admin', hbsObject);
  });
});

router.post('/', function(req, res) {
  quotations.insertOne([
    'quotation',
    'CharID',
    'url'
  ], [
    req.body.quotation,
    req.body.CharID,
    req.body.url
  ], function(data) {
    res.redirect('/admin');
  });
});

// router.put('/quotes/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   quote.updateOne({
//     devoured: true
//   }, condition, function(data) {
//     res.redirect('/');
//   });
// });

module.exports = router;