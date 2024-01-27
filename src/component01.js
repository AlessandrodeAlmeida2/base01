import React from "react";

class Componente01 extends React.Component {
    // Construtor
    constructor(props) {
        super(props);

        this.state = { exibir: false };
    }

    // Função
    alterarState = () => {
        let converter = !this.state.exibir;

        this.setState({ exibir: converter });
    }

    render() {
        let meuTexto = '';
        if (this.state.exibir === true) {
            meuTexto = [<h1 key="1">Ola!!! Utilizando condicionais</h1>, <h1 key="2">Meu primeiro componente</h1>]
        } else {
            meuTexto = ''
        }

        return(
            <div>
                {meuTexto}
                <button onClick={this.alterarState}>Clique aqui</button>
            </div>
        )
    }
}

//Exportar
export default Componente01;
