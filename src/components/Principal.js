import React from "react";
import Mostrarmichis from "./Mostrarmichis";

export default function Principal (){

    return <div className='contenedor-principal min-vh-600 d-flex flex-wrap align-items-center justify-content-center'>
        <h1 className='titulo-site'>Michis, estos michis se dedican a ser los mejores
            licenciados del mundo mundial de los michis...</h1>
        <Mostrarmichis />
    </div>
}
