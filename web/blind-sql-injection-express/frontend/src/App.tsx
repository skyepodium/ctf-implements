import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from 'views/Main'
import PostDetail from 'views/PostDetail'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/post/:id" element={<PostDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
