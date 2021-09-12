const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
//const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

//mongoose

//data schema and model

const db = mysql.createConnection({
    user: "ReactApp",
    host: "localhost",
    password: "1111",
    database: "iwpDB",
});

app.get('/data', (req,res) => {
    db.query("SELECT * FROM iwp_sensor_data LIMIT 10", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001");
});


//API routes 

