var express = require('express');
var router = express.Router();

var stockModels = [
  { id: 1, name: 'iPhoneX 64GB スペースグレイ iOS11' }
]

router.get('/', function(req, res, next) {
  res.render('stocks', { stockModels: stockModels });
});

module.exports = router;
