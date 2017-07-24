var express = require('express');
var router = express.Router();

var request = require('request');

router.get('/:quizID', function(req, res) {

	var quizID = req.params.quizID;

});

module.exports = router;
