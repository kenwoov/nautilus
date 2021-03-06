var express = require('express');
const uuidv4 = require('uuid/v4')

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const uuid = uuidv4();
  res.render('index', {
    title: uuidv4().replace(/-/g, '')
  });
});

module.exports = router;