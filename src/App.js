// Importações
import React, { Component } from 'react';
import Main from './pages/Main';
import './App.css';

// Componente App: Está sendo chamado no index.js
class App extends Component {
  // Renderização do Componente Main na página
  render() { // O render retorna o conteúdo html e é o único método obrigatório do componente
    return <Main/>;
  }
}

// Exportação
export default App;
