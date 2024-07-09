import React, {Component} from 'react';
import './Main.css';


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
                <form action='@'>
                    <input onChange={this.handleChange} type='text' />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}