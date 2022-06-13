//express app
const express = require('express');
const app = express();

//mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentCollection');

//middle-wares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//studentRouter

const studentRouter = require("../src/student /studentRoute")
app.use('/student', studentRouter);


//server
app.listen(3000, (req, res) => {
    console.log("app running at port 3000");
});
