import axios from'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;

//Fazer a conexão com os diretórios de formulários.
//Nesse caso Login, Modal e NotFound.