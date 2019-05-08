const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
});

const Post = mongoose.model("Post", postSchema);
exports.Post = Post;
