import React, {Component} from 'react';
import './Main.css';

//Form
import { FaPlus } from "react-icons/fa6";

//Tarefas
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default class Main extends Component {

    /*
    constructor(props){
        super(props);

        this.state = {
            novaTarefa : '',
        }

        this.inputMudou = this.inputMudou.bind(this); //É uma maneira de disponibilizar o inputMudou! 
    }*/
    //Class Field
    state = {
        novaTarefa : '',
        tarefas: [],
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('oi');
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return; //Verificando se a tarefa já existe
        //Se a tarefa já existir, o return vai parar de executar o código na hora, caso contrário,
        //Acontece o código abaixo.

        const novasTarefas = [...tarefas]; //Não posso editar tarefas diretamente  

        this.setState({
            tarefas: [...novasTarefas, novaTarefa]
        })
    }

    handleChange = (e) =>{
        this.setState({
            novaTarefa : e.target.value
        })
    }

    

    render(){
        const {novaTarefa, tarefas} = this.state;
        return (
            <div className='main'>
                <h1>Lista de Tarefas</h1>
                <form action='@' onSubmit={this.handleSubmit} className='form'>
                    <input 
                        onChange={this.handleChange}
                        type='text' 
                        value={novaTarefa}
                    />
                    <button type='submit'>
                        <FaPlus />
                    </button>
                </form>
                <ul className='tarefas'>
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <CiEdit  className='edit' />
                                <IoMdClose className='delete'/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}