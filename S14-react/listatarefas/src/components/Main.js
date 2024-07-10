import React, {Component} from 'react';
import './Main.css';

//Form
import { FaPlus } from "react-icons/fa6";

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
    }

    handleChange = (e) =>{
        this.setState({
            novaTarefa : e.target.value
        })
    }
    render(){
        const {novaTarefa} = this.state;
        return (
            <div className='main'>
                <h1>Lista de Tarefas</h1>
                <p>{novaTarefa}</p>
                <form action='@' className='form'>
                    <input 
                        onChange={this.handleChange}
                        type='text' 
                        value={novaTarefa}
                    />
                    <button type='submit'>
                        <FaPlus />
                    </button>
                </form>
            </div>
        )
    }
}