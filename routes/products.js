var db = require('./pghelper'),
    express = require('express'),
    router = express.Router();

function findAll(limit) {
    return db.query('SELECT id, name, description, image__c AS image, productPage__c AS productPage, publishDate__c AS publishDate FROM product2 ORDER BY publishDate DESC LIMIT $1', [limit]);
};

function findById(id) {
    return db.query('SELECT id, name, description, image__c AS image, productPage__c AS productPage, publishDate__c AS publishDate FROM product2 WHERE id=$1', [id], true);
};

router.get('/', function(req, res, next) {
    findAll(20)
        .then(function (products) {
            res.render('products', { title: 'Browse', products: products, connected: true });
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    findById(id)
        .then(function (product) {
            res.render('items/show', { title: 'Grub', item: product, connected: true, from: 'products' });
        })
        .catch(next);
});

module.exports.router = router;
module.exports.findAll = findAll;
module.exports.findById = findById;