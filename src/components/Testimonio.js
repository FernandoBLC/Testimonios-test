import React from "react"
import '../componentsCSS/Testimonio.css'

function Testimonio (props) {
    return (
        <div className='contenedor-testimonio d-flex align-items-center justify-content-center shadow p-3'>
            <img className='img-testimonio rounded-2 shadow' src={require(`../imgs/${props.imgmichi}`)}
                 alt={`Foto de ${props.nombremichi}`} />
            <div className='texto-testimonio text-center p-4 lh-1'>
                <p className='nombre-monio'><strong>{props.nombremichi}</strong> en {props.residencia}</p>
                <p className='cargo-monio mt-2  pb-3'>Es Licenciado en {props.carrera} en <strong>{props.empresa}</strong></p>
                <p className='texto-monio'>"{props.texto}"</p>
            </div>
        </div>
    );
}

export default Testimonio
