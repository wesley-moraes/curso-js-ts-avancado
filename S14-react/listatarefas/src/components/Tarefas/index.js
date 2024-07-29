import React from "react";

import PropTypes from 'prop-types'
import './Tarefas.css'

import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Tarefas({tarefas, handleEdit, handleDelete}) {
    return (
        <ul className='tarefas'>
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <CiEdit
                            className='edit'
                            onClick={(e) => handleEdit(e, index)}
                        />
                        <IoMdClose
                            onClick={(e) => handleDelete(e, index)}
                            className='delete'
                        />
                    </span>
                </li>
            ))}
        </ul>
    )
}
Tarefas.propTypes = {
    tarefas: PropTypes.array,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}