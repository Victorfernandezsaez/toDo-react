import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Navbar />
    <Container className="App">      
    
    </Container>
  </>
  )
}

export default App
