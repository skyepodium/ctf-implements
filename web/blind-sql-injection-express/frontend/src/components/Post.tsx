import React from 'react'

interface Props {
  _id: string
  title: string
  content: string
}

export default function Post ({ title, content }: Props): JSX.Element {
  return (
    <div className="post">
        <div className="title">
            {title}
        </div>
        <div className="content">
            {content}
        </div>
    </div>
  )
}
