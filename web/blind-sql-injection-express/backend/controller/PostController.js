const express = require('express')
const router = express.Router()

const { getPostsBySearchWord, getPostById } = require('@service/PostService')

router.get('', async (req, res) => {
  const { searchParam } = req.query

  const posts = await getPostsBySearchWord(searchParam)
  res.json(posts)
})

router.get('/:postId', async (req, res) => {
  const { postId } = req.params

  const post = await getPostById(postId)
  res.json(post)
})

module.exports = router
