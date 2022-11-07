// Importações
import React from 'react'; // É necessário ter a importação do React toda vez que for utilizar a sintaxe de jsx no componente, mesmo que não se esteja utilizando o React em si
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Para configurar as rotas da aplicação com o React, é necessário instalar esta dependência: npm install react-router-dom@5.2.0
// O BrowserRouter serve para indicar para o React como as rotas vão se comportar na url (separadas pela barra, etc); O Switch garante que cada endereço chame apenas uma rota por momento; O Route serve para indicar cada rota
import Main from './pages/Main';
import Box from './pages/Box';

// Componente Routes
const Routes = () => ( // Existem dois tipos de componente no React: o statefull (armazena mudança de estado) e o stateless (não armazena mudança de estado). Esse é um componente stateless, por isso pode ser implementado em formato de função de forma abreviada (Arrow Function)
    <BrowserRouter>
        <Switch>
            <Route path ="/" component={Main}/>
        </Switch>
    </BrowserRouter>
);

// Exportação
export default Routes;