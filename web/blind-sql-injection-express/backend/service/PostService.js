const path = require('path')

const rootPath = process.cwd()

const Post = require(path.join(rootPath, './model', 'Post'))

const getPostsBySearchWord = async (searchWord) => {
  try {
    // if searchWord is empty string, return all posts
    if (!searchWord) {
      return await Post.find({ deleted: false })
    }
    console.log('searchWord', searchWord)
    // return title and content that contains searchWord
    return await Post.find({
      deleted: false,
      $or: [
        { title: { $regex: searchWord, $options: 'i' } },
        { content: { $regex: searchWord, $options: 'i' } }
      ]
    })
  } catch (err) {
    console.error(err)
    throw new Error('Server error')
  }
}

module.exports = {
  getPostsBySearchWord
}
