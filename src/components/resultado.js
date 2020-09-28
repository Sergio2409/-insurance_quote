import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;

`;

const ContenedorCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    position: relative;
`;

const Resultado = ({cotizacion}) => {   

    return ( 
        (cotizacion == 0) ? 
        <Mensaje>Elije marca, año y tipo de seguro</Mensaje>
        :
        (
            <ContenedorCotizacion>
                <TextoCotizacion>El total es : ${cotizacion}</TextoCotizacion>
            </ContenedorCotizacion>
        )
                
    );
}
 
export default Resultado;