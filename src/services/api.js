// Importações
import axios from 'axios'; // Biblioteca para utilização de API's

// Utilizando o Axios para acessar a API do Backend da Aplicação
const api = axios.create({
    baseURL: 'https://omnistack-bakend.herokuapp.com/',
});

// Exportação
export default api;