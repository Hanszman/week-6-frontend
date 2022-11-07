// Importações
import React, { Component } from 'react';
import Routing from './routes';
import './App.css';

// Componente App (Em formato de Arrow Function): Está sendo chamado no index.js
const App = () => <Routing/>;

// Existem dois tipos de componente no React: o statefull (armazena mudança de estado) e o stateless (não armazena mudança de estado). Esse é um componente stateless, por isso pode ser implementado dessas formas (em formato de função ou não). Acima foi implementado em formato de função de forma abreviada (Arrow Function):
// Formato de Função
// function App () {
//   return <Routing/>;
// }
// Formato de Componente
// class App extends Component {
//   // Renderização do Componente Routing na página, chamando a página inicial que é o Main
//   render() { // O render retorna o conteúdo html e é o único método obrigatório do componente
//     return <Routing/>;
//   }
// }

// Exportação
export default App;
