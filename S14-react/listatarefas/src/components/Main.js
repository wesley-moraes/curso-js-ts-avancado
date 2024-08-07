import React, {Component} from 'react';
import './Main.css';

import Form from './Form';
import Tarefas from './Tarefas';

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
        index: -1 //Para editar
    }

    componentDidMount(){ //Resgatando as tarefas já no localstorage
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if(!tarefas) return;

        this.setState({
            tarefas
        });
    }

    componentDidUpdate(prevProps, prevState){ //Guardando as novas tarefas
        //É uma função do react
        //prevState = estado anterior

        const {tarefas} = this.state;

        if(tarefas === prevState.tarefas) return; 

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return; //Verificando se a tarefa já existe
        //Se a tarefa já existir, o return vai parar de executar o código na hora, caso contrário,
        //Acontece o código abaixo.

        const novasTarefas = [...tarefas]; //Não posso editar tarefas diretamente  

        if(index === -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
        }else{
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })
        }
        
    }

    handleDelete = (e, index) =>{
        console.log('entrou');
        const {tarefas} = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas]
        })
    }

    handleEdit = (e, index) =>{
        console.log('entrou');
        const {tarefas } = this.state;
        this.setState({
            //index: index
            index, //Como tem o memso nome, não precisa fazer os dois pontos
            novaTarefa : tarefas[index]
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
                
                <Form 
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    novaTarefa = {novaTarefa}                
                />

                <Tarefas
                    tarefas = {tarefas}
                    handleEdit = {this.handleEdit}
                    handleDelete = {this.handleDelete}
                />
            </div>
        )
    }
}