import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {

  const [car, setCar] = useState([])
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const addCar = (newCar) => {
    setCar([...car, newCar]);
  }
  

  return (
    <>
      <Form onAddCar={addCar} setShow={setShow} setError={setError}/>
      {error && <p style={{color: 'red'}}>Por favor chequea que la informacion sea correcta</p>}
      {show && <Card car={car}/>}
      
    </>
  )
}

export default App
