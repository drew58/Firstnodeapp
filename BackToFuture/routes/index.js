var express = require('express');
var router = express.Router();
/* To get the data of the customers out */
const customers = require("../db/customer_data.json")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/customers', function (req, res, next) {
  //res.send( customers)
  res.render('index', { title: 'All Customers', customers });
});

router.get('/customers/:id', function (req, res, next) {
  //res.send( customers)
  const id = parseInt(req.params.id)
  res.render('specific', { title: 'Details of Customers', detail: customers[id] });
});

router.get("/customers/country/:country", function (req, res, next) {
  //res.send( customers)
  const country = req.params.country;
  const userInCountries =
    customers.filter(item => item.country === country)
  res.render('country',
    {
      title: 'Users From',
      country,
      userInCountries
    });
});

router.post('/customers', function (req, res, next) {
  res.render('index', { title: 'Customers Post' });
});

router.delete('/customers', function (req, res, next) {
  res.render('index', { title: 'Customers Delete' });
});

router.put('/customers', function (req, res, next) {
  res.render('index', { title: 'Customers PUT' });
});

module.exports = router;
