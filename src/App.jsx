
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Abour"element={<h1>About page</h1>}/>
      <Route path="/Contact"element={<h1>contact </h1>}/>

      
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
