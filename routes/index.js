var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.json(200, { message: 'Hello World!' });
    // res.render('index', { title: 'Express' });
});

module.exports = router;
