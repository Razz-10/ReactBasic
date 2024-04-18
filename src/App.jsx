
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Button from './Button'
import About from './About'
import { useEffect } from 'react'
import UseEffect from './UseEffect'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/useEffect"element={<UseEffect/>}/>
      <Route path="/Contact"element={<h1>contact </h1>}/>
  
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
