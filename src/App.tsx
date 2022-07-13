import React, { useEffect, createContext } from 'react'
import Main from './components/main'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScData = createContext<any>(null)

export default function App() {
  const handle = useFullScreenHandle();
  useEffect(() => {
    handle.enter()
  }, [])
  return (
    <HashRouter>
      <FullScreen handle={handle}>
        <FullScData.Provider value={handle}>
          <Main />
        </FullScData.Provider>
      </FullScreen>
    </HashRouter>
  )
}

export { FullScData }
