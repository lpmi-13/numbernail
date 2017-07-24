var express = require('express');
var router = express.Router();

/* go to example sentences */
var request = require('request');

router.get('/info', function(req, res) {

	res.render('info', { title: 'Information'});

});

module.exports = router;
