const mongoose = require('mongoose');


const reviewSchema = mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    comment : {
        type : String,
        required : true
    }
},{
    timestamps : true,
    versionKey : false
});

const reviewModel = mongoose.model('review', reviewSchema);
module.exports = {reviewModel}