import React, { Fragment } from 'react'
import PropTypes from 'prop-types';



const CounterApp = ({ value }) => {
    return <Fragment>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        <button class="btn">
            +1
        </button>
    </Fragment>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;