// Importações
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';

// Exportação da Classe do Componente Principal da Aplicação (Main): Está sendo chamado no App.js
export default class Main extends Component {
    // Existem dois tipos de componente no React: o statefull (armazena mudança de estado) e o stateless (não armazena mudança de estado). Esse é um componente statefull, por isso deve ser implementado dessa forma:
    state = { // Variável para armazenar os estados da página
        newBox: ''
    };
    
    // Função utilizada no onSubmit do Form
    handleSubmit = async (event) => { // Método declarado com async para ser possível a utilização do await e funcionar de forma síncrona
        event.preventDefault(); // Serve para prevenir o comportamento padrão do onSubmit no Form, de forma que a página não atualize no envio do formulário
        const response = await api.post('/boxes', { // Chamada da rota de salvar boxes da api
            title: this.state.newBox // Body da requisição
        });
        // O props serve para acessar as propriedades do componente
        const navigate = useNavigate(); // O navigate serve para navegar o usuário para alguma tela
        navigate(`/box/${response.data._id}`); // Nesse caso está redirecionando para a rota box passando o id que veio da requisição acima
    };

    // Função utilizada no onChange do Form
    handleInputChange = (event) => {
        this.setState({ newBox: event.target.value }); // Função do React para alterar estados na página
    };

    // Renderização do HTML na página
    render() { // O render retorna o conteúdo html e é o único método obrigatório do componente
        return ( // Essa sintaxe chama jsx e é uma mistura de javascript com xml
            <div id="main-container">
                <form onSubmit={this.handleSubmit} action="">
                    <img src={logo} alt="" />
                    <input placeholder="Criar um box" value={this.state.newBox} onChange={this.handleInputChange} />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}