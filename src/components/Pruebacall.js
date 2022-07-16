import React, {useState} from "react"
import Testimonio from "./Testimonio"

const Michis = [
    {
        nombremichi:'Michi con Ponche y Aguinaldo',
        residencia:'Mexico',
        carrera:'Administracion',
        empresa:'Casa',
        texto:'Hola soy un michi licenciado, enfocado a administrar las croquetas que se dan de comer ' +
        'en mi casa, por lo tanto gestiono y controlo la cantidad de alimento para todos los michis de mi casa',
        imgmichi:'michito.png'
    },
    {
        nombremichi: 'Michi Tiste',
        residencia: 'Mexico',
        carrera: 'Administracion en Tistesa',
        empresa: 'Casa',
        texto: 'Hola soy un michi licenciado en tistesa, enfocado en atender a mis duenos que se ponen tistes ' +
            'para darles alegria y ayudarlos a sonreir, con el fin de eliminar su tistesa',
        imgmichi: 'licenciadoTiste.jpeg'
    },
    {
        nombremichi:'Michi Bachita',
        residencia:'Mexico',
        carrera:'Administracion en Bachitas',
        empresa:'Casa',
        texto:'Hola soy un michi licenciado en bachitas, enfocado en cuidar a mis hermanos que se hacen bien ' +
            'mensos y me roban mi comida.. P.D: No he podido salir porque toy chiquito y me da ansiedad',
        imgmichi:'licenciadoBachita.jpeg'
    }
]

export default function Pruebacall(){

    const [state, setState] = useState(Michis);

    return <div>
        {
            state.map(infomichi => infomichi.map(datmichi => <Testimonio props={datmichi}/>))

        }
    </div>
}
