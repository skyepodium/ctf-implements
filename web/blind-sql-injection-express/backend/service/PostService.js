const Post = require('@model/Post')

const getPostsBySearchWord = async (searchParam) => {
  if (!searchParam) {
    const posts = await Post.find({ deleted: false })
    return postFilter(posts)
  }

  const posts = await Post.find({
    deleted: false,
    ...searchParam
  })

  return postFilter(posts)
}

const getPostById = async (postId) => {
  const post = await Post.findById(postId)
  return getMaskedFlag(post)
}

const getMaskedFlag = (post) => {
  const { _id, title, content } = post
  return {
    _id,
    title,
    content,
    flag: 'CLASSIFIED'
  }
}

const postFilter = (posts) => {
  return posts.map(post => {
    const { _id, title, content, flag } = getMaskedFlag(post)
    return {
      _id,
      title,
      content,
      flag
    }
  })
}

module.exports = {
  getPostsBySearchWord,
  getPostById
}
