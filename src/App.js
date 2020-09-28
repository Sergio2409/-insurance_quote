import React, {useState} from 'react';
import Header from './components/header';
import styled from '@emotion/styled';
import Formulario from './components/formulario';
import Resumen from './components/resumen';
import Resultado from './components/resultado';
import Spinner from './components/spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding:3rem;
`;


function App() {

  const [resumen, guardarResumen] = useState({
      cotizacion: 0,
      datos: {
        marca: '',
        year: '',
        plan: ''
      }
  });

  const [cargando, guardarCargando] = useState(false);

  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen} 
            guardarCargando={guardarCargando}
          />          
          {cargando ? <Spinner /> : null}
          
          <Resumen datos={datos}/> 

          {!cargando ? 
            <Resultado cotizacion={cotizacion}/>
            : null
          }                   
          
      </ContenedorFormulario>

    </Contenedor>    
  );
}

export default App;
