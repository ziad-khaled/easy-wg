var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {

});

router.post('/', function(req, res) {

});


// //export this router to use in our app.js
module.exports = router;
