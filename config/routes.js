const mongoose = require('mongoose'),
    Product = mongoose.model('Product')
var products = require('../controllers/products.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.json({error: 'what did you do?'})
    })
    app.get('/api/products', function(req, res) {
        products.getAll(req, res);
    })
    app.get('/api/product/:id', function(req, res) {
        products.findProduct(req, res);
    })
    app.post('/api/product', function(req, res) {
        products.creation(req, res);
    })
    app.put('/api/product/', function(req, res) {
        products.update(req, res);
    })
    app.delete('/api/product/:id', function(req,res) {
        products.destroy(req, res);
    })
}