import React, { useState } from "react"


function Form({ onAddCar, setShow, setError }) {

    const [name, setName] = useState('')
    const [modelo, setModelo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length > 2 && name[0] !== ' ' && modelo.length > 5) {
            onAddCar({name, modelo})
            setName('')
            setModelo('')
            setShow(true);
            setError(false);
        } else {
            setError(true);
        }

    }

    return (
        <div>
            <h2>Auto Favorito</h2>
            <h3>Completar los campos con estas instrucciones: </h3>
            <p>Para el nombre de la marca, al menos 3 caracteres y sin espacios.</p>
            <p>Para el modelo, al menos 6 caracteres.</p>
            <form onSubmit={handleSubmit}>
                <label>Marca Favorita: </label>
                <input type="text" placeholder="Ingrese Marca" value={name} onChange={(e) => setName(e.target.value)} />
                <label> Modelo de Auto: </label>
                <input type="text" placeholder="Ingrese Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                <br />
                <br />
                <button type="submit">Agregar Vehiculo</button>
            </form>
        </div>
    )
}

export default Form