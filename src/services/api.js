import axios from 'axios'

//CEP/json/
const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
})

export default api
