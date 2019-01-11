var mongoose = require('mongoose');
require('../config/mongoose.js');
module.exports = {
    product: function () {
        var ProductSchema = new mongoose.Schema({
            title: { type: String, required : true, minlength : [3, "Title must be longer than three characters"] },
            price: { type: String, required: true },
            imgUrl: { type: String, default: "http://khaoyaiconcrete.co.th/images/no-img.jpg" }
        }, { timestamps: true });
        mongoose.model('Product', ProductSchema);
        mongoose.model('Product');
    }
}