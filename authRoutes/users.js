var express = require('express');
var router = express.Router();

// register
router.get('/register', function(req, res) {
	res.render('register');
})

router.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  //validation
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is Required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


  var errors = req.validationErrors();

  if(errors){
  	res.render('register',{
  		errors:errors
  	});
  } else {
  	console.log('PASSED')
  }

});

//login 

router.get('/login', function(req, res) {
	res.render('login');

})


module.exports = router;