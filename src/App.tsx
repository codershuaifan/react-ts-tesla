import React, { useEffect } from 'react'
import Main from './components/main'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from "react-full-screen";


export default function App() {
  const handle = useFullScreenHandle();
  useEffect(() => {
    handle.enter()
  }, [])
  return (
    <HashRouter>
      <FullScreen handle={handle}>
        <Main />
      </FullScreen>
    </HashRouter>
  )
}
