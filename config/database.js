const mongoose = require('mongoose');

require("dotenv").config();

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .then( () =>{
        console.log("connection has been succesful")
    })
    .catch((error) =>{
        console.log("connection face a issue")
        console.error(error.message);
        process.exit(1); 
    });
}


module.exports = dbConnection;
