import React from 'react'
import Main from './components/main'
import { BrowserRouter, HashRouter } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  )
}