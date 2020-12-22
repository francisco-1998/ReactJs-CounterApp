import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';



const CounterApp = ({ value = 0 }) => {

    const [ valor, setValor ] = useState(value);

    const handlerAdd = () => {
        setValor(valor + 1)
    }


    const handleSubtract = () => setValor( valor - 1);
    const handleReset = () => setValor( value );

    return <Fragment>
        <h1>Counter App</h1>
        <h2>{valor}</h2>
        <button className="boton" onClick={handlerAdd}> +1 </button>
        <button className="boton" onClick={handleReset}> Reset </button>
        <button className="boton" onClick={handleSubtract}> -1 </button>
    </Fragment>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;