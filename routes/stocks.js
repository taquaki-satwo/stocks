var express = require('express');
var router = express.Router();

var Stock = require('../models/stock');

var stockModels = [
  { id: 1, name: 'iPhone X 64GB スペースグレイ iOS10' },
  { id: 2, name: 'iPhone X 64GB シルバー iOS10' },
  { id: 3, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 4, name: 'iPhone X 64GB シルバー iOS11' },
  { id: 5, name: 'iPhone X 256GB スペースグレイ iOS10' },
  { id: 6, name: 'iPhone X 256GB シルバー iOS10' },
  { id: 7, name: 'iPhone X 256GB スペースグレイ iOS11' },
  { id: 8, name: 'iPhone X 256GB シルバー iOS11' }
]

router.get('/', function (req, res, next) {
  res.render('stocks', { stockModels: stockModels });
});

router.post('/', function (req, res, next) {
  console.log(req.body);

  var stock = new Stock();

  stock.stock_amount = req.body.stock_amount;
  stock.stock_model = req.body.stock_model;
  stock.stock_date = req.body.stock_date;
  stock.save();

  res.redirect('/stocks');
});

module.exports = router;
