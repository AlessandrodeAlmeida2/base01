import React from "react";

class Componente03 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {cor: 'vermelho'}
    }

    // Depois de realizar o render
    componentDidMount() {
        setTimeout(() => {
            this.setState({cor: 'azul'})
        }, 2000)
    }

    render() {
        return <h1>Minha cor preferida é o {this.state.cor}</h1>
    }
}

export default Componente03;