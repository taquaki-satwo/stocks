var express = require('express');
var router = express.Router();

var stockModels = [
  { id: 1, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 2, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 3, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 4, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 5, name: 'iPhone X 64GB スペースグレイ iOS11' },
  { id: 6, name: 'iPhone X 64GB スペースグレイ iOS11' }
]

router.get('/', function (req, res, next) {
  res.render('stocks', { stockModels: stockModels });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
});

module.exports = router;
