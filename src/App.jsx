import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar />
    <Trending />
    </div>
  )
}

export default App
