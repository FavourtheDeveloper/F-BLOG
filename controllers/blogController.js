 const Blog = require('../models/blogModel')

const getAllPosts = (req, res) => {
    Blog.find()
    .then((result) => {
        res.render("blogs", { Blogs : result, title: "All Blog Posts" });
    })
    .catch((err) => {
        console.log(err)
    })
}

const postNewBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog
      .save()
      .then((result) => {
        console.log("Successful");
        res.redirect("/blogs");
      })
      .catch((err) => {
        res.send(err);
      });
  }


  const blogDetails = (req, res) => {
    const blogid = req.params.id;
    Blog.findById(blogid)
    .then((result) => {
        res.render("blogdetails", {currentBlog: result, title: result.blogtitle})
    })
    .catch((err) => {
        console.log(err);
    })
  }

  
  const blogDelete = (req, res) => {
    const blogid = req.params.id;
    Blog.findByIdAndDelete(blogid)
    .then((result) => {
        console.log('Blog Deleted Successfully');
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
  }








module.exports = {
    getAllPosts,
    postNewBlog,
    blogDetails,
    blogDelete
}