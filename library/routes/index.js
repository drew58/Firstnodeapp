var express = require('express');
var router = express.Router();

var book_controller = require("../controllers/bookController")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/catalog');
});

router.get('/books', book_controller.index);
router.get('/books/create', book_controller.create);

module.exports = router;
