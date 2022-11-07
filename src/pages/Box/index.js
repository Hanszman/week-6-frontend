// Importações
import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { MdInsertDriveFile } from 'react-icons/md'; // Para utilizar o pacote de ícones do React, é necessário instalar esta dependência: npm install react-icons
import './styles.css';

// Exportação da Classe do Componente Box
export default class Box extends Component {
    // Existem dois tipos de componente no React: o statefull (armazena mudança de estado) e o stateless (não armazena mudança de estado). Esse é um componente statefull, por isso deve ser implementado dessa forma:
    state = { // Variável para armazenar os estados da página
        box: {}
    };

    // Método que é disparado assim que o componente é renderizado na tela
    async componentDidMount() {
        const box = this.props.match.params.id; // Esse comando do props serve para pegar os parâmetros que vêm da rota, nesse caso o id da box
        const response = await api.get(`boxes/${box}`); // Chamada da rota para recuperar essa box da api
        this.setState({ box: response.data }); // Função do React para alterar estados do box na página
    }

    // Renderização do HTML na página
    render() { // O render retorna o conteúdo html e é o único método obrigatório do componente
        return ( // Essa sintaxe chama jsx e é uma mistura de javascript com xml
            <div id="box-container">
                <header>
                    <img src={logo} alt=""/>
                    <h1>{this.state.box.title}</h1>
                </header>
                <ul>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff"/>
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>Há 3 minutos atrás</span>
                    </li>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff"/>
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>Há 3 minutos atrás</span>
                    </li>
                </ul>
            </div>
        );
    }
}