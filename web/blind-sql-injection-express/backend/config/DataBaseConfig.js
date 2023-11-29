const mongoose = require('mongoose')
const fs = require('fs/promises')
const path = require('path')
const Post = require('@model/Post')

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongodb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB Connection error:', error)
  }
}

const loadDataToMongoDB = async () => {
  try {
    const filePath = path.join(process.cwd(), './data/data.json')
    const data = await fs.readFile(filePath, 'utf8')
    const jsonData = JSON.parse(data)

    await Post.deleteMany({})
    await Post.insertMany(jsonData)

    console.log('Data loaded to MongoDB')
  } catch (error) {
    console.error('Error loading data to MongoDB:', error)
  }
}

module.exports = {
  connectToMongoDB,
  loadDataToMongoDB
}
