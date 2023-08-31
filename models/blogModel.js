const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    blogtitle: {
      type: String,
      require: true,
    },
    blogbody: {
      type: String,
      require: true,
    },
  },
  { timetamps: true }
);

const Blog = mongoose.model('fblogs', blogSchema);

module.exports = Blog
