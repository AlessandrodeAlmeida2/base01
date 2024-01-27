import React from "react";

class Componente02 extends React.Component {
    render() {

        // Vetor
        let cores = ['Azul', 'Amarelo', 'Vermelho'];

        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
        });

        // Retorno
        return ([
            <h1 style={{color:'red', backgroundColor:'yellow'}}>Meu segundo Componente</h1>,
            <h1 className="titulo">Listas e Chaves</h1>,
            <ul>
                {listar}
            </ul>
        ])
    }
}

//Exportar
export default Componente02;
