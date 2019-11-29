import React, { Component } from 'react';

import classes from './App.css'


import Pessoas from './Pessoas/Pessoas'; 

class App extends Component {

  state = {  
    pessoas: [
     {id:'1', nome: 'Tom', idade: 21},
     {id:'2', nome: 'Julia', idade: 22},
     {id:'3', nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor',
    mostrarPessoas: false
  }  
  
  nomeManipuladorAlterado = (event, id) => {
    const pessoaIndex = this.state.pessoas.findIndex(p => {
      return p.id === id;
    });
    
    const pessoa = {
      ...this.state.pessoas[pessoaIndex]
    };

    pessoa.nome = event.target.value;

    const pessoas = [...this.state.pessoas];
    pessoas[pessoaIndex] = pessoa;

    this.setState({pessoas: pessoas});
  }

  apagarManipuladorPessoa = (pessoaIndex) => {
    //const pessoas = this.state.pessoas.slice();
    const pessoas = [...this.state.pessoas];
    pessoas.splice(pessoaIndex, 1);
    this.setState({pessoas: pessoas});
  }

  toogleManipuladorPessoas = () => {
    const fazerMostrar = this.state.mostrarPessoas;
    this.setState({mostrarPessoas: !fazerMostrar});
  }

  render() {
    
    let pessoas = null;
    let botaoClasse = '';

    if (this.state.mostrarPessoas) {
      pessoas = (
        <div>
         <Pessoas 
         pessoas={this.state.pessoas}
         clicked={this.apagarManipuladorPessoa}
         changed={this.nomeManipuladorAlterado} />
        </div>
      );
      
      botaoClasse = classes.vermelho;
    }

    const classesAssinaladas = [];
    if (this.state.pessoas.length <= 2) {
      classesAssinaladas.push(classes.vermelho);  //classes = ['vermelho']
    }
    if (this.state.pessoas.length <= 1) {
      classesAssinaladas.push(classes.negrito);  //classes = ['vermelho', 'negrito']
    }

    return (
      
      <div className={classes.App}>
        <h1>Olá, Sou um aplicativo React</h1>
        <p className={classesAssinaladas.join( ' ' )}>Isto está funcionando</p>
        <button 
        className={botaoClasse}
        onClick={this.toogleManipuladorPessoas}>Alternancia de Pessoas
        </button> 
        {pessoas}
      </div> 
    ); 
  }
}

export default App;

