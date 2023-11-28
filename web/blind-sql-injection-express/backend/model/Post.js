const mongoose = require('mongoose')

const postScheme = new mongoose.Schema({
  title: String,
  content: String,
  deleted: Boolean
})

const Post = mongoose.model('Post', postScheme)

module.exports = Post
