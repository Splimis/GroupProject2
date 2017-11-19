var express = require('express');
var router = express.Router();

router.get('/admin', ensureAuthenticated, function(req, res) {
	res.render('admin');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg', 'You are not logged in');
		res.redirect('/');
	}
}

module.exports = router;