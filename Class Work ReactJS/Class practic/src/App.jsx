import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import MapFilter from './Components/MapFilter'
import UseState from './Components/Hooks/UseState'
import UseEffect from './Components/Hooks/UseEffect'
import Events from './Components/Hooks/Events'
import ConditionalRendering from './Components/Hooks/ConditionalRendering'
import UseRef from './Components/Hooks/UseRef'

function App() {
  return (
    <>
      <div>
        {/* <ConditionalRendering /> */}
        <UseRef />
       </div>
    </>
  )
}

export default App
