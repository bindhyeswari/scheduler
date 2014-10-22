var express = require('express');
var router = express.Router();

var candidates = [];

/* GET home page. */
router.get('/json', function(req, res) {
    res.status(200).json({ message: 'Hello World!' });
    // res.render('index', { title: 'Express' });
});

router.post('/json', function(req, res) {
    console.log(req.body);
    candidates.push(req.body);
    res.status(200).json({ message: 'Thanks for the info!' });
});

router.get('/scheduler', function(req, res) {
    res.render('scheduler');
});

module.exports = router;
