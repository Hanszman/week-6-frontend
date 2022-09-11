// Importações
import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';

// Exportação da Classe do Componente Principal da Aplicação (Main): Está sendo chamado no App.js
export default class Main extends Component {
    // Variável para armazenar os estados da página
    state = {
        newBox: '',
    };
    
    // Função utilizada no onSubmit do Form
    handleSbumit = () => {
        
    };

    // Função utilizada no onChange do Form
    handleInputChange = (event) => {
        this.setState({ newBox: event.target.value }); // Função do React para alterar estados na página
    };

    // Renderização do HTML na página
    render() {
        return (
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