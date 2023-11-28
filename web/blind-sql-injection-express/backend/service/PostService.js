const path = require('path')

const rootPath = process.cwd()

const Post = require(path.join(rootPath, './model', 'Post'))

const getPostsBySearchWord = async (searchParam) => {
  try {
    if (!searchParam) {
      return await Post.find({ deleted: false })
    }

    return await Post.find({
      deleted: false,
      ...searchParam
    })
  } catch (err) {
    console.error(err)
    throw new Error('Server error')
  }
}

module.exports = {
  getPostsBySearchWord
}
