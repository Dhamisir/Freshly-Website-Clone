const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    adminId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "admin"
    },
    img : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min: 1,
        max: 5,
        default: 1 
    },
    price : {
        type : Number,
        min: 1,
        default: 1 
    }
}, {
    timestamps : true,
    versionKey : false
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;