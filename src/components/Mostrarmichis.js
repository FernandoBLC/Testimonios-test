import React, {useState} from "react"
import Testimonio from "./Testimonio"

const Michis = [
    {
        nombremichi:'Michi con Ponche y Aguinaldo',
        residencia:'Mexico',
        carrera:'Administracion 2.0',
        empresa:'Casa',
        texto:'Este gato es un licencia en Administracion 2.0',
        imgmichi:'michito.png'
    },
    {
        nombremichi: 'Michi Tiste',
        residencia: 'Mexico',
        carrera: 'Administracion',
        empresa: 'Casa',
        texto: 'Este gato es un licencia en Administracion',
        imgmichi: 'licenciadoTiste.jpeg'
    },
    {
        nombremichi:'Michi Bachita',
        residencia:'Mexico',
        carrera:'Administracion en Bachitas',
        empresa:'Casa',
        texto:'Este gato es un licencia en Administracion en Bachitas',
        imgmichi:'licenciadoBachita.jpeg'
    }
]

export default function Mostrarmichis(){

    const [state, setState] = useState(Michis);

    return <div>
        {
            state.map(informichi => <Testimonio props={informichi} />)
        }
    </div>
}
