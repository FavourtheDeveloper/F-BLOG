const { log } = require("console");
const express = require("express");
const router = express.Router();

const Blog = require("../models/blogModel");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/blogs", (req, res) => {
    Blog.find()
    .then((result) => {
        res.render("blogs", { Blogs : result, title: "All Blog Posts" });
    })
    .catch((err) => {
        console.log(err)
    })
});

router.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log("Successful");
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
