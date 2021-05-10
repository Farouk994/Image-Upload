// First we install the necessary dependencies for the app
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static("./public"));

app.get("/", (req,res)=>{
    res.render('index')
});

// Declare PORT 
const PORT = process.env.PORT || 4000;

// Listen to the PORT
app.listen(PORT, ()=>{
    console.log("Listening to PORT " + PORT)
});

