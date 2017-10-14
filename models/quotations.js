var orm = require('../config/orm.js');

var quote = {
  selectAll: function(cb) {
    orm.selectAll('quote', function(res) {
      cb(res);
    });
  },

  selectRand: function(cb) {
    orm.selectRand('quote', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('quote', cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('quote', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = quote;