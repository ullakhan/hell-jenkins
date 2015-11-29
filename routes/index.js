var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadManager')(router);

/* GET home page. */
router.get('/', function(req, res) {
  res.send('hello world');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
