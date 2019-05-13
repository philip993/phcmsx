const { Post } = require("../model/Post");

exports.getPosts = (req, res) => {
  Post.find({})
    .then(posts => {
      res.status(200).json({
        posts: posts
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "System error. Posts not available!"
      });
    });
};

exports.newPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    details: req.body.details,
    typer: req.body.typer
  });
  post
    .save()
    .then(post => {
      res.status(201).json({
        post: post
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "System error! Can not create post!"
      });
    });
};

exports.deletePost = (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then(post => {
      res.status(200).json({
        deletedPost: post
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot delete post! Server error!"
      });
    });
};
