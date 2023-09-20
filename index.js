const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT  || 3000; 


app.use(express.json());


const todoRoutes = require('./routes/Todo');

app.use("/api/v1", todoRoutes);

app.listen(PORT, () =>{
    console.log(`server is started on ${PORT}`);
})

const dbConnection = require('./config/database');
dbConnection();

app.get('/', (req, res) =>{
    res.send(`<h1>this is the homepage</h1>`)
});