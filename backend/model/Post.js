const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  typer: {
    type: String,
    enum: ["Public", "Private"]
  }
});

const Post = mongoose.model("Post", postSchema);
exports.Post = Post;
