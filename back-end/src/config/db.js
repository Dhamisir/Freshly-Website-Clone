const mongoose = require('mongoose');
const url = process.env.DATABASE_URL || `mongodb+srv://sophisticated-legs-486:sophisticated-legs-486@cluster0.kuwseoo.mongodb.net/`;

const connection = () =>{
    mongoose.connect(`${url}sophisticated-legs-486`).then(() =>{
        console.log("Connection Successful!");
    }).catch((error) =>{
        console.log(error);
    })
}

module.exports = connection;