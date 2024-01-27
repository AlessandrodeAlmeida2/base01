// Importar módulos
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import './style.css';

// Importar componentes
import Componente01 from "./component01";
import Componente02 from "./component02";
import Componente03 from "./componente03";

// Componente do arquivo index.js
class Principal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {texto: props.textoInicial};
    //this.mensagem = this.mensagem.bind(this);
  }

  //função
  minhaFuncao = (elemento) => {
    this.setState({texto:elemento.target.value})
  }
  mensagem() {
    alert(`Hello ${ this.state.n }!`);
  }

  minhaArrowFunction = (curso) => {
    alert('Estou fazendo o curso de' + curso);
  }

  teclado = (obj) => {
    console.log(obj.target.value);
  }

  render() {

    const estilo = {
      color:'white',
      background:'black'
    }

    return(
      <div style={estilo}>
        <Componente01 />
        <Componente02 />
        <Componente03 />
        <h1>{ this.state.n }</h1>
        <h1>Olá { this.props.informacoes.nome }</h1>
        <h2>{ this.props.informacoes.idade }</h2>
        <button onClick={this.mensagem.bind(this)}>Clique aqui</button>
        <button onClick={() => this.minhaArrowFunction('ReactJS')}>Arrow function</button>
        <hr />
        <h1>Digite o seu texto aqui:</h1>
        <input type="text" onChange={this.minhaFuncao} value={this.state.texto} />
        <h3>{this.state.texto}</h3>
      </div>      
    )
  }
}

// JSON
var dados = {nome: "Ale", idade:44};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Principal informacoes={dados} textoInicial="Digite algo..." />)
