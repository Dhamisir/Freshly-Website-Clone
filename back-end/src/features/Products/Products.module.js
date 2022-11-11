const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    subTitle : {
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
    subImg : {
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
    },
    ingredients : {
        type : Array,
        required : true
    },
    calorie : {
        type : Number,
        required : true
    },
    carbs : {
        type : Number,
        required : true
    },
    totalFat : {
        type : Number,
        required : true
    },
    protein : {
        type : Number,
        required : true
    },
    ingredientsTyps : {
        type : Array,
    }
}, {
    timestamps : true,
    versionKey : false
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;