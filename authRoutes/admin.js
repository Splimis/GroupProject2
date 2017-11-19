var express = require('express');
var router = express.Router();

//Get Login Page
router.get('/admin', function(req, res) {
	res.render('admin');
})

module.exports = router;