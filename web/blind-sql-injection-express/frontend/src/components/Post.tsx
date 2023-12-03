import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  _id: string
  title: string
  content: string
}

export default function Post ({ title, content, _id }: Props): JSX.Element {
  return (
    <Link className="post" to={`/post/${_id}`}>
        <div className="title">
            {title}
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Link>
  )
}
