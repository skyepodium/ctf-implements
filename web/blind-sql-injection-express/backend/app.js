const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const port = 3000

const { getPostsBySearchWord } = require(path.join(__dirname, './service', 'PostService'))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection error:'))
db.once('open', () => {
  console.log('MongoDB Connected')

  // Express에서 JSON 파싱을 위한 미들웨어 설정
  app.use(bodyParser.json())

  // data.json 파일 읽어서 MongoDB에 저장
  const loadDataToMongoDB = async () => {
    try {
      // data.json 파일 읽기
      const filePath = path.join(__dirname, './data/data.json')
      const data = await fs.readFile(filePath, 'utf8')
      const jsonData = JSON.parse(data)

      // MongoDB에 있는 데이터 삭제
      await Post.deleteMany({})
      // MongoDB에 데이터 추가
      await Post.insertMany(jsonData)

      console.log('게시물이 MongoDB에 추가되었습니다.')
    } catch (err) {
      console.error('MongoDB에 데이터 추가 중 오류가 발생했습니다.', err)
    }
  }

  loadDataToMongoDB()
})
const rootPath = process.cwd()
const Post = require(path.join(rootPath, './model', 'Post'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/api/v1/post', async (req, res) => {
  const { searchWord } = req.query // Use req.query instead of req.params
  console.log('req.query', req.query)
  try {
    const posts = await getPostsBySearchWord(searchWord) // Pass searchWord directly
    res.json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

app.get('/api/v1/post/:postId', async (req, res) => {
  const { postId } = req.params

  try {
    const posts = await Post.findById(postId)
    res.json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

app.listen(port, function () {
  console.log(`server is on port: ${port}`)
})
