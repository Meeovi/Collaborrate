const client = require('../config/database.config')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();