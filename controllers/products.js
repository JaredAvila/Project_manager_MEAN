const mongoose = require('mongoose');
Product = mongoose.model('Product');
module.exports = {
    getAll: function (req, res) {
        Product.find({}, function (err, products) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ product: products });
            }
        })
    },
    findProduct: function (req, res) {
        Product.findById({ _id: req.params.id }, function (err, product) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ product: product });
            }
        })
    },
    creation: function (req, res) {
        var product = new Product({ title: req.body['prod'].title, price: req.body['prod'].price, imgUrl: req.body['prod'].imgUrl });
        product.save(function (err) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ product: product });
            }
        })
    },
    update: function (req, res) {
        if (req.body.title === "" || req.body.price === "" || req.body.imgUrl === "") {
            res.json({ error: "Cannot leave blank!" })
        } else {
            Product.findOneAndUpdate({ _id: req.body.id }, { title: req.body.title, price: req.body.price, imgUrl: req.body.imgUrl }, function (err) {
                if (err) {
                    res.json({ error: err });
                } else {
                    res.json({ updated: req.body.title });
                }
            })
        }
    },
    destroy: function (req, res) {
        Product.findByIdAndDelete({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({ error: err })
            } else {
                res.json({ sucess: 'IT WORKS!!! YAY' });
            }
        })
    }
}