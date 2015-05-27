var express = require('express');
var products = require('./products');
var pizzas = require('./pizzas');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var items = [];
	products.findAll(4).then(function(products) {
		items = products;
		res.render('index', { title: 'Express', products: items, connected: true });
	})
	.catch(next);
});

router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About', connected: true });
});

router.get('/bookmarks', function(req, res, next) {
	res.render('bookmarks', { title: 'About', connected: true });
});

router.get('/pizza', function(req, res, next) {
	var items = [];
	pizzas.findAll(10).then(function(products) {
		items = products;
		res.render('pizzas', { title: 'Pizzas', products: items, connected: true });
	})
	.catch(next);
});

router.get('/pizza/:id', function(req, res, next) {
    var id = req.params.id;
    pizzas.findById(id)
        .then(function (product) {
            res.render('items/show', { title: 'Grub', item: product, connected: true, from: 'pizza' });
        })
        .catch(next);
});

router.get('/search', function(req, res, next) {
    res.render('items/search', { title: 'search', connected: true });
});

router.post('/search', function(req, res, next) {
    var q = req.body.q;
    pizzas.search(q)
        .then(function (products) {
            return res.send(JSON.stringify(products));
        })
        .catch(next);
});
module.exports = router;