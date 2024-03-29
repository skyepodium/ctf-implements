const express = require('express')
const app = express()
const port = 4000
const path = require('path')

const cors = require('cors')

const { addAliases } = require('module-alias')

// Define your aliases
addAliases({
  '@controller': path.join(__dirname) + '/controller',
  '@service': path.join(__dirname) + '/service',
  '@model': path.join(__dirname) + '/model',
  '@data': path.join(__dirname) + '/data',
  '@config': path.join(__dirname) + '/config'
})

const { connectToMongoDB, loadDataToMongoDB } = require('@config/DataBaseConfig')

// Connect to MongoDB
connectToMongoDB()

// Load data to MongoDB
loadDataToMongoDB()

const postController = require('@controller/PostController')

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use('/api/v1/post', postController)

app.listen(port, function () {
  console.log(`server is on port: ${port}`)
})
