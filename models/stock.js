var mongoose = require('mongoose');

var Stock = new mongoose.Schema({
  stock_amount: {},
  stock_model: {},
  stock_date: {}
});

module.exports = mongoose.model('Stock', Stock);