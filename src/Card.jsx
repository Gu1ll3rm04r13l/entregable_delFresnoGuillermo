import React from 'react'

function Card ({ car }) {
    return (

        <div>
            <h3>Autos agregados</h3>
            {car.map((car, index) => (
                <h4 key={index} style={{color: 'green'}}>Marca:  {car.name}   Modelo: {car.modelo}</h4>
                
            ))}
            {/* {console.log(car)} */}
        </div>
    )
}

export default Card