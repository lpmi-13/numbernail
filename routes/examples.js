var express = require('express');
var router = express.Router();

/* go to example sentences */
var request = require('request');

router.get('/examples', function(req, res) {

	res.render('examples', { title: 'Examples'});

});

module.exports = router;
