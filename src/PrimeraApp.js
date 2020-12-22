import React from 'react';
import PropTypes from 'prop-types';

//Functional component
const PrimeraApp = ({ saludo, subtitulo }) => {
    return (
        <>
            <h1>Hola { saludo }</h1>
            <h3>{ subtitulo }</h3>
        </>
    );
}


export default PrimeraApp;

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy el subtitulo'
}


//Los boolean no se puede imprimir, lo Object directamente tampoco, pero si se usa JSON.stringify() se se lo puede observar