import React from "react";
import Pruebacall from "./components/Pruebacall";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App min-vh-100 d-flex flex-wrap align-items-center justify-content-center text-center" responsive>
        <div className='contenedor-principal min-vh-600 d-flex flex-wrap align-items-center justify-content-center'>
          <h1 className='titulo-site'>Michis, estos michis se dedican a ser los mejores
          licenciados del mundo mundial de los michis...</h1>
          <Pruebacall />
         </div>
    </div>
  );
}

export default App;
