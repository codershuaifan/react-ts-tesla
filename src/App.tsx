import React from 'react'
import Main from './components/main'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}
