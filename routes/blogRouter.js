const { log } = require("console");
const express = require("express");
const router = express.Router();

const Blog = require("../models/blogModel");

const blogControl = require('../controllers/blogController')

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/blogs", blogControl.getAllPosts);

router.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

router.post("/", blogControl.postNewBlog);

router.get('/blogdetails/:id', blogControl.blogDetails)

router.get('/delete/:id', blogControl.blogDelete)




module.exports = router;
