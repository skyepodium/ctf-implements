import axios from 'axios'
import Header from 'components/Header'
import Post from 'components/Post'
import React, { useState, useEffect } from 'react'

import { type Post as PostType } from 'types/types'

function App (): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PostType[]>('http://localhost:4000/api/v1/post')
        setPosts(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="">
        <Header/>
        {posts?.map((post) => (
          <Post key={post._id} _id={post._id} title={post.title} content={post.content}/>
        ))}
    </div>
  )
}

export default App
