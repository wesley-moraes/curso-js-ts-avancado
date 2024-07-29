import React from "react";
import PropTypes from 'prop-types'

import { FaPlus } from "react-icons/fa6";


import './Form.css';

export default function Form({handleSubmit, handleChange, novaTarefa}){
    return (
        <form action='#' onSubmit={handleSubmit} className='form'>
            <input
                onChange={handleChange}
                type='text'
                value={novaTarefa}
            />
            <button type='submit'>
                <FaPlus /> 
            </button>
        </form>
    )
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
}