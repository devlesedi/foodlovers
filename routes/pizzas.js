var db = require('./pghelper'),
    express = require('express'),
    router = express.Router();

function findAll(limit) {
    return db.query('SELECT id, name, description, image__c AS image, publishDate__c AS publishDate FROM campaign ORDER BY publishDate DESC LIMIT $1', [limit]);
};

function findById(id) {
    return db.query('SELECT id, name, description, image__c AS image, publishDate__c AS publishDate FROM campaign WHERE id=$1', [id], true);
};

//https://news.ycombinator.com/item?id=9512360
//https://blog.lateral.io/2015/05/full-text-search-in-milliseconds-with-postgresql/
function search(q) {
    return db.query("SELECT id, name as title FROM (SELECT id, name, tsv FROM campaign, plainto_tsquery($1) AS q WHERE (tsv @@ q)) AS t1 ORDER BY ts_rank_cd(t1.tsv, plainto_tsquery($1)) DESC LIMIT 5;", [q], false);
};

router.get('/', function(req, res, next) {
    findAll(20)
        .then(function (products) {
            return res.send(JSON.stringify(products));
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    findById(id)
        .then(function (product) {
            res.render('items/show', { title: 'Grub', item: product, connected: true });
        })
        .catch(next);
});

module.exports.router = router;
module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.search = search;