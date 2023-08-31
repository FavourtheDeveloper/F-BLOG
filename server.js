const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const Blog = require("./models/blogModel");

 URI = process.env.mongodburi;
 mongoose.connect(URI)
 .then((result) => {
    console.log('Connected to the DB Successfully');
 })
 .catch((err) => {
    console.log(err);
 })


app.use(morgan('combined'))
const blogRouter = require('./routes/blogRouter');
const { log } = require('console');
app.listen(3000);
app.use(express.static('./frontend'))
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))

app.use('/', blogRouter)