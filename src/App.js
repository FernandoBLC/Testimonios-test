import Testimonio from './components/Testimonio'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import pruebaCall from "./components/pruebaCall";


function App() {
  return (
    <div className="App min-vh-100 d-flex flex-wrap align-items-center justify-content-center text-center" responsive>
        <div className='contenedor-principal min-vh-600 d-flex flex-wrap align-items-center justify-content-center'>
          <h1 className='titulo-site'>Michis, estos michis se dedican a ser los mejores
          licenciados del mundo mundial de los michis...</h1>
            <pruebaCall />
          <Testimonio
            nombremichi='Michi con Ponche y Aguinaldo'
            residencia='Mexico'
            carrera='Administracion'
            empresa='Casa'
            texto='Hola soy un michi licenciado, enfocado a administrar las croquetas que se dan
            de comer en mi casa, por lo tanto gestiono y controlo la cantidad de alimento para
            todos los michis de mi casa'
            imgmichi='michito.png' />
          <Testimonio
            nombremichi='Michi Tiste'
            residencia='Mexico'
            carrera='Administracion en Tistesa'
            empresa='Casa'
            texto='Hola soy un michi licenciado en tistesa, enfocado en atender
            a mis duenos que se ponen tistes para darles alegria y ayudarlos
            a sonreir, con el fin de eliminar su tistesa'
            imgmichi='licenciadoTiste.jpeg' />
          <Testimonio
            nombremichi='Michi Bachita'
            residencia='Mexico'
            carrera='Administracion en Bachitas'
            empresa='Casa'
            texto='Hola soy un michi licenciado en bachitas, enfocado en cuidar a mis
            hermanos que se hacen bien mensos y me roban mi comida.. P.D: No he podido
            salir porque toy chiquito y me da ansiedad'
            imgmichi='licenciadoBachita.jpeg' />
         </div>
    </div>
  );
}

export default App;
