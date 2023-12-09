import axios from 'axios'
import Header from 'components/Header'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { type Post as PostType } from 'types/types'

export default function Post (): JSX.Element {
  const [post, setPost] = useState<PostType>()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PostType>(`http://localhost:4000/api/v1/post/${id}`)
        setPost(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  const getContent = () => {
    if (post != null) {
      return { __html: post?.content }
    }

    return { __html: '' }
  }

  return (
    <div>
        <Header/>
        <div className='layout'>
            <div className="post">
                <div className="title">
                    {post?.title}
                </div>
                <div className="content" dangerouslySetInnerHTML={getContent()} />
            </div>
        </div>
    </div>
  )
}
