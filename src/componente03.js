import React from "react";

class Componente03 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cor: 'vermelho',
            nome: '',
            idade: null
        }
    }

    // Depois de realizar o render
    componentDidMount() {
        setTimeout(() => {
            this.setState({cor: 'azul'})
        }, 2000)
    }

    minhaFuncao = (elemento) => {
        elemento.preventDefault(); // Não permiti que o action do onSubimit funcione
        alert('Testando evento onSubmit');
    }

    enviarParaState = (campo) => {
        this.setState({[campo.target.name]: campo.target.value});
    }


    render() {
        return (
            <div>
                <h1>Minha cor preferida é o {this.state.cor}</h1>
                <form>
                    <input type="text" placeholder="Nome" name="nome" onChange={this.enviarParaState} />
                    <input type="number" placeholder="Idade" name="idade" onChange={this.enviarParaState} />
                    <p>{this.state.nome}</p>
                    <p>{this.state.idade}</p>
                </form>
                <form onSubmit={this.minhaFuncao} action="https://alessandrodealmeida.dev.br/">
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Componente03;