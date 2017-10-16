var express = require('express');
var router = express.Router();
var quotations = require('../models/quotations.js');

// router.get('/', function(req, res) {
//   quotations.selectAll(function(data) {
//     var hbsObject = {
//       quote: data
//     };
//     // console.log(hbsObject);
//     res.render('index', hbsObject);
//     // console.log(res);
//   });
// });

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

router.post('/', function(req, res) {
  quotations.insertOne([
    'quotation'
  ], [
    req.body.quotation
  ], function(data) {
    res.redirect('/');
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